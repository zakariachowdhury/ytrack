//
//  FDServer.m
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 25/05/10.
//  Copyright 2010 Fabrice Dewasmes. All rights reserved.
//

#import "FDServer.h"
#import "DAAPResponsemsrv.h"
#import "DAAPResponsemccr.h"
#import "DAAPResponseavdb.h"
#import "DAAPResponseaply.h"
#import "DAAPResponsemlit.h"
#import "DAAPResponsecmst.h"
#import "DAAPResponsemupd.h"
#import "DAAPResponsecmgt.h"
#import "DAAPResponsecasp.h"
#import "DAAPResponsemlog.h"
#import "DAAPResponseabro.h"
#import "DAAPResponseagal.h"
#import "DAAPResponseerror.h"
#import "SessionManager.h"

@interface FDServer() 
- (NSString *) _encodeString:(NSString *)string;

@end

@implementation FDServer

@synthesize host;
@synthesize port;
@synthesize pairingGUID;
@synthesize sessionId;
@synthesize servicename;
@synthesize TXT;
@synthesize databaseId;
@synthesize musicLibraryId;
@synthesize booksLibraryId;
@synthesize podcastsLibraryId;
@synthesize connected;
@synthesize currentTrack;
@synthesize currentAlbum;
@synthesize currentArtist;
@synthesize currentAlbumId;
@synthesize daapReqRep;
@synthesize booksPersistentId;
@synthesize podcastsPersistentId;


- (id) init {
	if ((self = [super init])) {
        //[self getServerInfo];
    }
    return self;
}

- (BOOL) open{
	NSLog(@"FDServer-open, pairingGUID:%@",pairingGUID);
	NSString *loginURL = [NSString stringWithFormat:kRequestLogin,self.host,self.port,self.pairingGUID];
	NSLog(@"%@",loginURL);
	DAAPResponse * resp = (DAAPResponse *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:loginURL]];
	if ([resp isKindOfClass:[DAAPResponseerror class]]) {
		DAAPResponseerror *err = (DAAPResponseerror *)resp;
		if (err.error != nil) {
			return NO;
		}
		// in case of error, reply is not formatted as other messages, reply is only 3 bytes long
		// here I assume there is only one kind of error namely the rejected remote case
		if (resp.data.length == 3) {
			NSString *rejectedAlertTitle = [[NSBundle mainBundle] localizedStringForKey:@"rejectedAlertTitle" 
												   value:@"Telecommande rejetée" 
												   table:@"Localizable"];
			NSString *rejectedAlertContent = [[NSBundle mainBundle] localizedStringForKey:@"rejectedAlertContent" 
																				  value:@"Votre télécommande n'est plus acceptée par le serveur" 
																				  table:@"Localizable"];
			UIAlertView *alert = [[UIAlertView alloc] initWithTitle:rejectedAlertTitle message:rejectedAlertContent delegate:nil cancelButtonTitle:@"OK" otherButtonTitles:nil];
			[alert show];
			[alert release];
			[[SessionManager sharedSessionManager] deleteServerWithPairingGUID:self.pairingGUID];
			return NO;
		}
	} else {
		sessionId = [[(DAAPResponsemlog *)resp mlid] longValue];
	}
	
	// in case we've got no sessionId, something went wrongly
	if (sessionId == 0) {
		return NO;
	}
	
	// we've got a sessionId, we're connected !
	self.connected = YES;
	
	// we have to know the databaseId for further requests
	NSString *databaseRequest = [NSString stringWithFormat:kRequestDatabases,self.host,self.port,sessionId];
	DAAPResponseavdb * db = (DAAPResponseavdb *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:databaseRequest]];
	if ([db isKindOfClass:[DAAPResponseerror class]]) {
		self.connected = NO;
		return NO;
	}
	self.databaseId = [(NSNumber *)[(DAAPResponsemlit *)[db.listing.list  objectAtIndex:0] miid] intValue];
	
	// query playslists to get the Id of those we're interested in
	NSString *requestUrl = [NSString stringWithFormat:kRequestPlayLists,self.host,self.port,databaseId,sessionId];
	NSLog(@"%@",requestUrl);
	DAAPResponseaply * response = (DAAPResponseaply *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:requestUrl] ];
	if (userPlaylists == nil) {
		userPlaylists = [[[NSMutableArray alloc] init] retain];
	} else {
		[userPlaylists removeAllObjects];
	}

	for (DAAPResponsemlit *pl in response.listing.list) {
		if ([pl.aePS longValue] == 0 && [pl.aeSP longValue] == 0 && [pl.mimc longValue] > 0) {
			NSLog(@"%d-%qX-%@-%d-%d-%i",[pl.miid longValue],[pl.mper longLongValue], pl.name,[pl.aePS longValue], [pl.aeSP longValue],[pl.mimc longValue]);
			[userPlaylists addObject:pl];
		}
		if ([pl.aePS shortValue] == kServerMusicLibraryAEPS){
			self.musicLibraryId = [pl.miid intValue];
			databasePersistentId = [pl.persistentId longLongValue];
		} else if ([pl.aePS shortValue] == kServerPodcastsLibraryAEPS){
			podcastsPersistentId = [pl.persistentId longLongValue];
			self.podcastsLibraryId = [pl.miid intValue];
		} else if ([pl.aePS shortValue] == kServerBooksLibraryAEPS){
			booksPersistentId = [pl.persistentId longLongValue];
			self.booksLibraryId = [pl.miid intValue];
		}
	}
	[userPlaylists removeObjectAtIndex:0];
	
	// initiate server monitoring to receive action events
	[self monitorPlayStatus];
	
	// tell the world we're connected
	[[NSNotificationCenter defaultCenter ]postNotificationName:kNotificationConnected object:nil]; 
	return YES;
}

- (void) logout{
	NSLog(@"FDServer-logout");
	if (self.daapReqRep != nil) {
		[self.daapReqRep cancelConnection];
		self.daapReqRep = nil;
	}
	NSString *string = [NSString stringWithFormat:kRequestLogout,self.host,self.port,sessionId];
	[DAAPRequestReply request:[NSURL URLWithString:string]];

	// here we do not check the status of the command
	// the request method should at least send back status just in case
	self.connected = NO;
}

// initializer for newly paired servers
- (id) initWithHost:(NSString *)theHost port:(NSString *)thePort pairingGUID:(NSString *)thePairingGUID serviceName:(NSString *)serviceName TXT:(NSDictionary *)theTXT{
	if ((self = [super init])) {
		self.servicename = serviceName;
		self.pairingGUID = thePairingGUID;
		self.host = theHost;
		self.port = thePort;
		self.TXT = theTXT;
		musr = 1;
	}
	return self;
}

// initializer used to rehydrate persisted servers from preference file
- (id) initWithDictionary:(NSDictionary *)dict{
	if ((self = [super init])) {
		self.servicename = [dict objectForKey:kLibraryServicenameKey];
		self.pairingGUID = [dict objectForKey:kLibraryPairingGUIDKey];
		self.host = [dict objectForKey:kLibraryHostKey];
		self.port = [dict objectForKey:kLibraryPortKey];
		self.TXT = [dict objectForKey:kLibraryTXTKey];
		musr = 1;
	}
	return self;
}

// return a form of the object that is persistable
// I think I should use NSCoder
- (NSDictionary *) getAsDictionary{
	NSDictionary *dict = [NSDictionary dictionaryWithObjects:[NSArray arrayWithObjects:self.servicename, self.pairingGUID, self.host, self.port, self.TXT, nil] 
													 forKeys:[NSArray arrayWithObjects:kLibraryServicenameKey, kLibraryPairingGUIDKey, kLibraryHostKey, kLibraryPortKey, kLibraryTXTKey, nil]];
	return dict;
}

#pragma mark -
#pragma mark content queries

- (NSArray *) getPlayLists{
	NSLog(@"FDServer-getPlayLists");
	/*NSString *requestUrl = [NSString stringWithFormat:kRequestPlayLists,self.host,self.port,databaseId,sessionId];
	NSLog(@"%@",requestUrl);
	DAAPResponseaply * response = (DAAPResponseaply *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:requestUrl] ];
	NSArray *list = [NSArray arrayWithArray:response.listing.list];
	
	return list;*/
	return [NSArray arrayWithArray:userPlaylists];
}

- (void) getArtists:(id<DAAPRequestDelegate>)aDelegate{
	NSLog(@"FDServer-getArtists");
	NSString *requestUrl = [NSString stringWithFormat:kRequestArtists,self.host,self.port,databaseId,sessionId];
	DAAPRequestReply *daapreq = [[DAAPRequestReply alloc] init];
	[daapreq setDelegate:aDelegate];
	[daapreq asyncRequestAndParse:[NSURL URLWithString:requestUrl]];
	[daapreq release];
}

- (DAAPResponseagal *) getAlbumsForArtist:(NSString *)artist{
	NSLog(@"FDServer-getAlbumsForArtist");
	NSString *a = [self _encodeString:artist];
	NSString *requestUrl = [NSString stringWithFormat:kRequestAlbumsForArtist,self.host,self.port,databaseId,sessionId,a];
	NSLog(@"%@",requestUrl);
	[a release];
	DAAPResponseagal * response = (DAAPResponseagal *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:requestUrl] ];
	return response;
}

- (DAAPResponseapso *) getAllTracksForArtist:(NSString *)artist{
	NSLog(@"FDServer-getAllTracksForArtist");
	NSString *a = [self _encodeString:artist];
	NSString *requestUrl = [NSString stringWithFormat:kRequestAllTracksForArtist,self.host,self.port,databaseId,musicLibraryId, sessionId,a];
	NSLog(@"%@",requestUrl);
	DAAPResponseapso * response = (DAAPResponseapso *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:requestUrl] ];
	return response;
}

- (void) getAllTracksForPlaylist:(int)playlistId delegate:(id<DAAPRequestDelegate>)aDelegate{
	NSLog(@"FDServer-getAllTracksForPlaylist");
	NSString *requestUrl = [NSString stringWithFormat:kRequestTracksForPlaylist,self.host,self.port,databaseId,playlistId, sessionId];
	NSLog(@"%@",requestUrl);
	DAAPRequestReply *daapreq = [[DAAPRequestReply alloc] init];
	[daapreq setDelegate:aDelegate];
	[daapreq asyncRequestAndParse:[NSURL URLWithString:requestUrl]];
	[daapreq release];
}

- (DAAPResponseapso *) getTracksForAlbum:(NSString *)albumId{
	NSLog(@"FDServer-getTracksForAlbum");
	NSString *requestUrl = [NSString stringWithFormat:kRequestTracksForAlbum,self.host,self.port,databaseId,musicLibraryId, sessionId,albumId];
	DAAPResponseapso * response = (DAAPResponseapso *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:requestUrl] ];
	return response;
}

- (void) getTracksForAlbum:(NSString *)albumId delegate:(id<DAAPRequestDelegate>)aDelegate{
	NSLog(@"FDServer-getTracksForAlbum - Async");
	NSString *requestUrl = [NSString stringWithFormat:kRequestTracksForAlbum,self.host,self.port,databaseId,musicLibraryId, sessionId,albumId];
	DAAPRequestReply *daapreq = [[DAAPRequestReply alloc] init];
	[daapreq setDelegate:aDelegate];
	[daapreq asyncRequestAndParse:[NSURL URLWithString:requestUrl]];
	[daapreq release];
	
	//DAAPResponseapso * response = (DAAPResponseapso *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:requestUrl] ];
	//return response;
}

- (DAAPResponseapso *) getTracksForPodcast:(NSString *)podcastId{
	NSLog(@"FDServer-getTracksForPodcast");
	NSString *requestUrl = [NSString stringWithFormat:kRequestPodcastTracks,self.host,self.port,databaseId,podcastsLibraryId, sessionId,podcastId];
	NSLog(@"%@",requestUrl);
	DAAPResponseapso * response = (DAAPResponseapso *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:requestUrl] ];
	return response;
}

- (AsyncImageLoader *) getAlbumArtwork:(NSNumber *)albumId delegate:(id<AsyncImageLoaderDelegate>)aDelegate{
	NSLog(@"FDServer-getArtworkForAlbum");
	NSString *requestUrl = [NSString stringWithFormat:kRequestAlbumArtwork,self.host,self.port,databaseId,[albumId intValue], sessionId];
	NSLog(@"%@",requestUrl);
	AsyncImageLoader *loader = [[[AsyncImageLoader alloc] init] autorelease];
	loader.delegate = aDelegate;
	[loader loadImageFromURL:[NSURL URLWithString:requestUrl] withId:albumId];
	return loader;
}

- (void) getAllAlbums:(id<DAAPRequestDelegate>)aDelegate{
	NSLog(@"FDServer-getAllAlbums");
	NSString *requestUrl = [NSString stringWithFormat:kRequestAllAlbums,self.host,self.port,databaseId,sessionId];
	DAAPRequestReply *daapreq = [[DAAPRequestReply alloc] init];
	[daapreq setDelegate:aDelegate];
	[daapreq asyncRequestAndParse:[NSURL URLWithString:requestUrl]];
	[daapreq release];
}

- (void) getAllTracks:(id<DAAPRequestDelegate>)aDelegate{
	NSLog(@"FDServer-getAllTracks with delegate");
	NSString *requestUrl = [NSString stringWithFormat:kRequestAllTracks,self.host,self.port,databaseId,musicLibraryId, sessionId];
	DAAPRequestReply *daapreq = [[DAAPRequestReply alloc] init];
	[daapreq setDelegate:aDelegate];
	[daapreq asyncRequestAndParse:[NSURL URLWithString:requestUrl]];
	[daapreq release];
}

- (void) getAllBooks:(id<DAAPRequestDelegate>)aDelegate{
	NSLog(@"FDServer-getAllBooks with delegate");
	NSString *requestUrl = [NSString stringWithFormat:kRequestAllBooks,self.host,self.port,databaseId,sessionId];
	DAAPRequestReply *daapreq = [[DAAPRequestReply alloc] init];
	[daapreq setDelegate:aDelegate];
	[daapreq asyncRequestAndParse:[NSURL URLWithString:requestUrl]];
	[daapreq release];
}

- (void) getAllPodcasts:(id<DAAPRequestDelegate>)aDelegate{
	NSLog(@"FDServer-getAllPodcasts with delegate");
	NSString *requestUrl = [NSString stringWithFormat:kRequestAllPodcasts,self.host,self.port,databaseId,sessionId];
	DAAPRequestReply *daapreq = [[DAAPRequestReply alloc] init];
	[daapreq setDelegate:aDelegate];
	[daapreq asyncRequestAndParse:[NSURL URLWithString:requestUrl]];
	[daapreq release];
}

#pragma mark -
#pragma mark server monitoring

- (void) monitorPlayStatus{
	NSLog(@"FDServer-monitorPlayStatus");
	NSString *requestUrl = [NSString stringWithFormat:kRequestPlayStatusUpdate,self.host,self.port,1,sessionId];

	DAAPRequestReply *daapReq = [[DAAPRequestReply alloc] init];
	
	[daapReq setDelegate:self];
	[daapReq asyncRequestAndParse:[NSURL URLWithString:requestUrl]];
	self.daapReqRep = daapReq;
	[daapReq release];
}

- (void) connectionTimedOut{
	NSLog(@"FDServer-connectionTimedOut");
	[self monitorPlayStatus];
}

// if user can't connect to host, simply give up and don't try to reconnect automatically
- (void) cantConnect{
	NSLog(@"FDServer-cantConnect");
	//self.connected = NO;
	[self logout];
	[[NSNotificationCenter defaultCenter ]postNotificationName:kNotificationConnectionLost object:nil];
}

// server finally sent a reply, see what's happened and notify observers
- (void) didFinishLoading:(DAAPResponse *)response{
	NSLog(@"FDServer-didFinishLoading");
	if (response == nil){
		NSLog(@"---PLAYSTATUSUPDATE RESPONSE IS NIL");
		[self logout];
		[self open];
		return;
	}
	DAAPResponsecmst * cmst = (DAAPResponsecmst *)response;
	[[NSNotificationCenter defaultCenter ]postNotificationName:kNotificationStatusUpdate object:self userInfo:[NSDictionary dictionaryWithObjectsAndKeys:cmst,@"cmst",nil]];
	self.currentTrack = cmst.cann;
	self.currentAlbum = cmst.canl;
	self.currentArtist = cmst.cana;
	self.currentAlbumId = [cmst.asai longLongValue];
	
	revNum = [[cmst cmsr] longValue];
	/*if (revNum < 1) {
		revNum = 1;
	}*/
	NSString *requestUrl = [NSString stringWithFormat:kRequestPlayStatusUpdate,self.host,self.port,revNum,sessionId];
	NSLog(@"%@",requestUrl);
	DAAPRequestReply *daapReq = [[DAAPRequestReply alloc] init];
	
	[daapReq setDelegate:self];
	[daapReq asyncRequestAndParse:[NSURL URLWithString:requestUrl]];
	self.daapReqRep = daapReq;
	[daapReq release];
}

#pragma mark -
#pragma mark query and set server state

- (NSArray *) getSpeakers{
	NSLog(@"FDServer-getSpeakers");
	NSString *requestUrl = [NSString stringWithFormat:kRequestGetSpeakers,self.host,self.port, sessionId];
	DAAPResponsecasp *casp = (DAAPResponsecasp *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:requestUrl]];
	
	return casp.speakers;
}

- (void) setSpeakers:(NSArray *)speakers{
	NSLog(@"FDServer-setSpeakers");
	if ([speakers count] < 1) return;
	NSString *speakerList = @"";
	for (int i = 0 ;i < [speakers count] - 1 ;i++) {
		long long val = [[speakers objectAtIndex:i] longLongValue];
		if (val == 0) {
			speakerList = [speakerList stringByAppendingFormat:@"0,",val];
		} else {
			speakerList = [speakerList stringByAppendingFormat:@"0x%qX,",val];
		}
		
	}
	long long val = [[speakers lastObject] longLongValue];
	if (val == 0) {
		speakerList = [speakerList stringByAppendingFormat:@"0",val];
	} else {
		speakerList = [speakerList stringByAppendingFormat:@"0x%qX",val];
	}
	NSLog(@"%@",speakerList);
	
	NSString *string = [NSString stringWithFormat:kRequestSetSpeakers,self.host,self.port,speakerList,sessionId];
	NSLog(@"%@",string);
	
	[DAAPRequestReply request:[NSURL URLWithString:string]];
}

- (void) getVolume:(id<DAAPRequestDelegate>)aDelegate action:(SEL)action{
	NSLog(@"FDServer-getVolume");
	NSString *requestUrl = [NSString stringWithFormat:kRequestPropertyVolume,self.host,self.port, sessionId];
	
	DAAPRequestReply *daapreq = [[DAAPRequestReply alloc] init];
	[daapreq setDelegate:aDelegate];
	[daapreq setAction:action];
	[daapreq asyncRequestAndParse:[NSURL URLWithString:requestUrl] withTimeout:30];
	[daapreq release];
}

// this call cannot be made asynchronously as we re-read state from server immediately after chnging the volume value
- (void) setVolume:(long) volume{
	NSLog(@"FDServer-setVolume");
	NSString *string = [NSString stringWithFormat:kRequestChangePropertyVolume,self.host,self.port,volume,sessionId];
	[DAAPRequestReply request:[NSURL URLWithString:string]];
}

- (void) changePlayingTime:(int)position{
	NSLog(@"FDServer-changePlayingTime");
	NSString *string = [NSString stringWithFormat:kRequestSetPlayingTime,self.host,self.port,position,sessionId];
	DAAPRequest *daapReq = [[DAAPRequest alloc] init];
	[daapReq asyncRequest:[NSURL URLWithString:string]];
	[daapReq release];
}

#pragma mark -
#pragma mark commands

- (void) playSongInLibrary:(int)songId{
	NSLog(@"FDServer-playSongInLibrary");
	NSString *string = [NSString stringWithFormat:kRequestStopPlaying,self.host,self.port,sessionId];
	[DAAPRequestReply request:[NSURL URLWithString:string]];
	
	NSString *string2 = [NSString stringWithFormat:kRequestPlaySongInLibrary,self.host,self.port,songId,sessionId];
	NSLog(@"%@",string2);
	[DAAPRequestReply request:[NSURL URLWithString:string2]];
}

- (void) playSongInPlaylist:(long long)containermper song:(long)songId{
	NSLog(@"FDServer-playSongInPlaylist");
	NSString *string = [NSString stringWithFormat:kRequestStopPlaying,self.host,self.port,sessionId];
	[DAAPRequestReply request:[NSURL URLWithString:string]];
	
	NSString *string2 = [NSString stringWithFormat:kRequestPlaySongInPlaylist,self.host,self.port,databasePersistentId,containermper,songId,sessionId];
	NSLog(@"----%@",string2);
	[DAAPRequestReply request:[NSURL URLWithString:string2]];
}

- (void) playBookInLibrary:(int)bookId{
	NSLog(@"FDServer-playBookInLibrary");
	NSString *string = [NSString stringWithFormat:kRequestStopPlaying,self.host,self.port,sessionId];
	[DAAPRequestReply request:[NSURL URLWithString:string]];
	
	NSString *string2 = [NSString stringWithFormat:kRequestPlayBookInLibrary,self.host,self.port,bookId,sessionId];
	NSLog(@"%@",string2);
	[DAAPRequestReply request:[NSURL URLWithString:string2]];
}

- (void) playSongIndex:(int)songIndex inAlbum:(NSNumber *)albumId{
	NSLog(@"FDServer-playSongIndex:inAlbum:");
	NSString *string = [NSString stringWithFormat:kRequestStopPlaying,self.host,self.port,sessionId];
	[DAAPRequestReply request:[NSURL URLWithString:string]];
	
	NSString *string2 = [NSString stringWithFormat:kRequestPlayTracksInAlbum,self.host,self.port,[albumId longLongValue], songIndex, sessionId];
	NSLog(@"%@",string2);
	[DAAPRequestReply request:[NSURL URLWithString:string2]];
}

- (void) playAllTracksForArtist:(NSString *)artist index:(int)songIndex{
	NSLog(@"FDServer-playAllTracksForArtist");
	NSString *a = [self _encodeString:artist];
	NSString *string = [NSString stringWithFormat:kRequestStopPlaying,self.host,self.port,sessionId];
	[DAAPRequestReply request:[NSURL URLWithString:string]];
	
	NSString *string2 = [NSString stringWithFormat:kRequestPlayAllTracksForArtist,self.host,self.port,a, songIndex, sessionId];
	NSLog(@"%@",string2);
	[DAAPRequestReply request:[NSURL URLWithString:string2]];
}

- (void) playPreviousItem{
	NSLog(@"FDServer-playPreviousItem");
	NSString *string = [NSString stringWithFormat:kRequestPlayPreviousItem,self.host,self.port,sessionId];
	DAAPRequest *daapReq = [[DAAPRequest alloc] init];
	
	[daapReq asyncRequest:[NSURL URLWithString:string]];
	[daapReq release];
}

- (void) playPause{
	NSLog(@"FDServer-playPause");
	NSString *string = [NSString stringWithFormat:kRequestPlayPause,self.host,self.port,sessionId];
	DAAPRequest *daapReq = [[DAAPRequest alloc] init];	
	[daapReq asyncRequest:[NSURL URLWithString:string]];
	[daapReq release];
}

- (void) playNextItem{
	NSLog(@"FDServer-playNextItem");
	NSString *string = [NSString stringWithFormat:kRequestPlayNextItem,self.host,self.port,sessionId];
	DAAPRequest *daapReq = [[DAAPRequest alloc] init];
	
	[daapReq asyncRequest:[NSURL URLWithString:string]];
	[daapReq release];
}

#pragma mark -
#pragma mark not used

- (void) updateStatus{
	NSLog(@"FDServer-updateStatus");
	NSString* str = [NSString stringWithFormat:kRequestUpdate,host,port,sessionId,musr];
	DAAPResponsemupd *mupd = (DAAPResponsemupd *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:str]];
	musr = [mupd.musr intValue];
}

+ (void) getServerInfoForHost:(NSString *)host atPort:(NSString *)port{
	NSLog(@"FDServer-getServerInfoForHost");
	//NSString* str = [NSString stringWithFormat:kRequestServerInfo,host,port];
	//DAAPResponsemsrv *msrv = (DAAPResponsemsrv *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:str]];
	//[msrv release];
	//NSString* str = [[NSString alloc] initWithFormat:kRequestContentCodes,host,port];
	//DAAPResponsemccr * resp = (DAAPResponsemccr *)[DAAPRequestReply requestAndParseResponse:[NSURL URLWithString:str]];
}

- (NSString *) _encodeString:(NSString *)string{
	
	// escape the ' character which is used as string delimiter in DAAP queries
	NSString *escapedString = [string stringByReplacingOccurrencesOfString:@"'" withString:@"\\'"];
	
	// url encode query
	NSString * a = (NSString *)CFURLCreateStringByAddingPercentEscapes(
																	   NULL,
																	   (CFStringRef)escapedString,
																	   NULL,
																	   (CFStringRef)@"!*();:@&=+$,/?%#[]-\\",
																	   kCFStringEncodingUTF8 );
	return a;
}

#pragma mark -
#pragma mark memory management

- (void)dealloc {
	[userPlaylists release];
	[self.host release];
	[self.port release];
	[self.pairingGUID release];
	[self.servicename release];
	[self.TXT release];
	[self.daapReqRep release];
	[self.currentAlbum release];
	[self.currentTrack release];
	[self.currentArtist release];
    [super dealloc];
}

@end