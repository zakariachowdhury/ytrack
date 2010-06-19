//
//  FDServer.m
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 25/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
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


@implementation FDServer

@synthesize host;
@synthesize port;
@synthesize pairingGUID;
@synthesize sessionId;
@synthesize servicename;
@synthesize TXT;
@synthesize databaseId;
@synthesize musicLibraryId;
@synthesize connected;
@synthesize currentTrack;
@synthesize currentAlbum;
@synthesize currentArtist;
@synthesize daapReqRep;


- (id) init {
	if ((self = [super init])) {
        //[self getServerInfo];
    }
    return self;
}

- (void) open{
	NSLog(@"FDServer-open, pairingGUID:%@",pairingGUID);
	NSString *loginURL = [NSString stringWithFormat:kRequestLogin,self.host,self.port,self.pairingGUID];
	NSLog(@"%@",loginURL);
	DAAPResponsemlog * resp = (DAAPResponsemlog *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:loginURL]];
	sessionId = [[resp mlid] longValue];
	// TODO check value of login request
	self.connected = YES;
	NSString *databaseRequest = [NSString stringWithFormat:kRequestDatabases,self.host,self.port,sessionId];
	DAAPResponseavdb * db = (DAAPResponseavdb *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:databaseRequest]];
	self.databaseId = [(NSNumber *)[(DAAPResponsemlit *)[db.mlcl.list  objectAtIndex:0] miid] intValue];
	NSString *string3 = [NSString stringWithFormat:kRequestPlayLists,self.host,self.port,databaseId,sessionId];
	NSLog(@"%@",string3);
	DAAPResponseaply * response = (DAAPResponseaply *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:string3] ];
	for (DAAPResponsemlit *pl in response.mlcl.list) {
		if ([pl.aePS shortValue] == kServerMusicLibraryAEPS){
			self.musicLibraryId = [pl.miid intValue];
			break;
		}
	}
	[self monitorPlayStatus];
	[[NSNotificationCenter defaultCenter ]postNotificationName:@"connected" object:nil]; 
}

- (void) logout{
	NSLog(@"FDServer-logout");
	[self.daapReqRep cancelConnection];
	[self.daapReqRep release];
	NSString *string = [NSString stringWithFormat:kRequestLogout,self.host,self.port,sessionId];
	[DAAPRequestReply request:[NSURL URLWithString:string]];
}

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

- (NSDictionary *) getAsDictionary{
	NSDictionary *dict = [NSDictionary dictionaryWithObjects:[NSArray arrayWithObjects:self.servicename, self.pairingGUID, self.host, self.port, self.TXT, nil] 
													 forKeys:[NSArray arrayWithObjects:kLibraryServicenameKey, kLibraryPairingGUIDKey, kLibraryHostKey, kLibraryPortKey, kLibraryTXTKey, nil]];
	return dict;
}

- (NSArray *) getPlayLists{
	NSLog(@"FDServer-getPlayLists");
	NSString *string3 = [NSString stringWithFormat:kRequestPlayLists,self.host,self.port,databaseId,sessionId];
	NSLog(@"%@",string3);
	DAAPResponseaply * response = (DAAPResponseaply *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:string3] ];
	NSArray *list = [NSArray arrayWithArray:response.mlcl.list];
	return list;
}

- (NSDictionary *) getArtists{
	NSLog(@"FDServer-getArtists");
	NSString *string3 = [NSString stringWithFormat:kRequestArtists,self.host,self.port,databaseId,sessionId];
	NSLog(@"%@",string3);
	DAAPResponseabro * response = (DAAPResponseabro *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:string3] ];
	NSDictionary *retVal = [NSDictionary dictionaryWithObjectsAndKeys:[NSArray arrayWithArray:response.abar.list],@"list",[NSArray arrayWithArray:response.mshl.indexList],@"index",nil];
	
	return retVal;
}

- (DAAPResponseagal *) getAlbumsForArtist:(NSString *)artist{
	NSLog(@"FDServer-getAlbumsForArtist");
	//NSString *a = [FDServer urlencode:artist];
	NSString * a = (NSString *)CFURLCreateStringByAddingPercentEscapes(NULL,
																	(CFStringRef)artist,
																	NULL,
																	(CFStringRef)@"!*'();:@&=+$,/?%#[]-",
																	kCFStringEncodingUTF8 );
	NSString *string3 = [NSString stringWithFormat:kRequestAlbumsForArtist,self.host,self.port,databaseId,sessionId,a];
	NSLog(@"%@",string3);
	[a release];
	DAAPResponseagal * response = (DAAPResponseagal *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:string3] ];
	return response;
}

- (DAAPResponseagal *) getAllAlbums{
	NSLog(@"FDServer-getAllAlbums");
	NSString *string3 = [NSString stringWithFormat:kRequestAllAlbums,self.host,self.port,databaseId,sessionId];
	NSLog(@"%@",string3);
	DAAPResponseagal * response = (DAAPResponseagal *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:string3] ];
	return response;
}

- (DAAPResponseapso *) getAllTracksForArtist:(NSString *)artist{
	NSLog(@"FDServer-getAllTracksForArtist");
	NSString * a = (NSString *)CFURLCreateStringByAddingPercentEscapes(
																	   NULL,
																	   (CFStringRef)artist,
																	   NULL,
																	   (CFStringRef)@"!*'();:@&=+$,/?%#[]-",
																	   kCFStringEncodingUTF8 );
	NSString *string3 = [NSString stringWithFormat:kRequestAllTracksForArtist,self.host,self.port,databaseId,musicLibraryId, sessionId,a];
	NSLog(@"%@",string3);
	DAAPResponseapso * response = (DAAPResponseapso *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:string3] ];
	return response;
}

- (DAAPResponseapso *) getTracksForAlbum:(NSString *)albumId{
	NSLog(@"FDServer-getTracksForAlbum");
	NSString *string3 = [NSString stringWithFormat:kRequestTracksForAlbum,self.host,self.port,databaseId,musicLibraryId, sessionId,albumId];
	DAAPResponseapso * response = (DAAPResponseapso *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:string3] ];
	return response;
}

- (AsyncImageLoader *) getAlbumArtwork:(NSNumber *)albumId delegate:(id<AsyncImageLoaderDelegate>)aDelegate{
	NSLog(@"FDServer-getArtworkForAlbum");
	NSString *string3 = [NSString stringWithFormat:kRequestAlbumArtwork,self.host,self.port,databaseId,[albumId intValue], sessionId];
	NSLog(@"%@",string3);
	AsyncImageLoader *loader = [[[AsyncImageLoader alloc] init] autorelease];
	loader.delegate = aDelegate;
	[loader loadImageFromURL:[NSURL URLWithString:string3] withId:albumId];
	//[loader release];
	return loader;
}

- (void) monitorPlayStatus{
	NSLog(@"FDServer-monitorPlayStatus");
	NSString *string3 = [NSString stringWithFormat:kRequestPlayStatusUpdate,self.host,self.port,1,sessionId];

	DAAPRequestReply *daapReq = [[DAAPRequestReply alloc] init];
	
	[daapReq setDelegate:self];
	[daapReq asyncRequestAndParse:[NSURL URLWithString:string3]];
	self.daapReqRep = daapReq;
	[daapReq release];
}

- (void) connectionTimedOut{
	NSLog(@"FDServer-connectionTimedOut");
	[self monitorPlayStatus];
}

- (void) didFinishLoading:(DAAPResponse *)response{
	NSLog(@"FDServer-didFinishLoading");
	if (response == nil){
		[self open];
		NSLog(@"---PLAYSTATUSUPDATE RESPONSE IS NIL");
		return;
	}
	DAAPResponsecmst * cmst = (DAAPResponsecmst *)response;
	[[NSNotificationCenter defaultCenter ]postNotificationName:@"statusUpdate" object:self userInfo:[NSDictionary dictionaryWithObjectsAndKeys:cmst,@"cmst",nil]];
	self.currentTrack = cmst.cann;
	self.currentAlbum = cmst.canl;
	self.currentArtist = cmst.cana;
	
	revNum = [[cmst cmsr] longValue];
	/*if (revNum < 1) {
		revNum = 1;
	}*/
	NSString *string3 = [NSString stringWithFormat:kRequestPlayStatusUpdate,self.host,self.port,revNum,sessionId];
	NSLog(@"%@",string3);
	DAAPRequestReply *daapReq = [[DAAPRequestReply alloc] init];
	
	[daapReq setDelegate:self];
	[daapReq asyncRequestAndParse:[NSURL URLWithString:string3]];
	self.daapReqRep = daapReq;
	[daapReq release];
}

- (void) getAllTracks:(id<DAAPRequestDelegate>)aDelegate{
	NSLog(@"FDServer-getAllTracks with delegate");
	NSString *string3 = [NSString stringWithFormat:kRequestAllTracks,self.host,self.port,databaseId,musicLibraryId, sessionId];
	DAAPRequestReply *daapreq = [[DAAPRequestReply alloc] init];
	[daapreq setDelegate:aDelegate];
	[daapreq asyncRequestAndParse:[NSURL URLWithString:string3]];
	[daapreq release];
}

- (NSArray *) getSpeakers{
	NSLog(@"FDServer-getSpeakers");
	NSString *string3 = [NSString stringWithFormat:kRequestGetSpeakers,self.host,self.port, sessionId];
	DAAPResponsecasp *casp = (DAAPResponsecasp *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:string3]];
	
	return casp.speakers;
}

- (void) setSpeakers:(NSArray *)speakers{
	NSLog(@"FDServer-setSpeakers");
	if ([speakers count] < 1) return;
	NSString *speakerList = @"";
	for (int i = 0 ;i < [speakers count] - 1 ;i++) {
		long long val = [[speakers objectAtIndex:i] longLongValue];
		NSLog(@"0x%qX",val);
		if (val == 0) {
			speakerList = [speakerList stringByAppendingFormat:@"0,",val];
		} else {
			speakerList = [speakerList stringByAppendingFormat:@"0x%qX,",val];
		}

	}
	long long val = [[speakers lastObject] longLongValue];
	NSLog(@"0x%qX",val);
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

- (long) getVolume{
	NSLog(@"FDServer-getVolume");
	NSString *string3 = [NSString stringWithFormat:kRequestPropertyVolume,self.host,self.port, sessionId];
	DAAPResponsecmgt * response = (DAAPResponsecmgt *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:string3]];
	return [response.cmvo longValue];
}

- (void) setVolume:(long) volume{
	NSLog(@"FDServer-setVolume");
	NSString *string = [NSString stringWithFormat:kRequestChangePropertyVolume,self.host,self.port,volume,sessionId];
	/*DAAPRequest *daapReq = [[DAAPRequest alloc] init];
	
	[daapReq asyncRequest:[NSURL URLWithString:string]];
	[daapReq release];*/
	[DAAPRequestReply request:[NSURL URLWithString:string]];
}

- (void) playSongInLibrary:(int)songId{
	NSLog(@"FDServer-playSongInLibrary");
	NSString *string = [NSString stringWithFormat:kRequestStopPlaying,self.host,self.port,sessionId];
	[DAAPRequestReply request:[NSURL URLWithString:string]];
	
	NSString *string2 = [NSString stringWithFormat:kRequestPlaySongInLibrary,self.host,self.port,songId,sessionId];
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
	NSString * a = (NSString *)CFURLCreateStringByAddingPercentEscapes(
																	   NULL,
																	   (CFStringRef)artist,
																	   NULL,
																	   (CFStringRef)@"!*'();:@&=+$,/?%#[]-",
																	   kCFStringEncodingUTF8 );
	NSString *string = [NSString stringWithFormat:kRequestStopPlaying,self.host,self.port,sessionId];
	[DAAPRequestReply request:[NSURL URLWithString:string]];
	
	NSString *string2 = [NSString stringWithFormat:kRequestPlayAllTracksForArtist,self.host,self.port,a, songIndex, sessionId];
	NSLog(@"%@",string2);
	[DAAPRequestReply request:[NSURL URLWithString:string2]];
}

- (void) playPreviousItem{
	NSLog(@"FDServer-playPreviousItem");
	NSString *string = [NSString stringWithFormat:kRequestPlayPreviousItem,self.host,self.port,sessionId];
/*	DAAPRequest *daapReq = [[DAAPRequest alloc] init];
	
	[daapReq asyncRequest:[NSURL URLWithString:string]];
	[daapReq release];*/
	[DAAPRequestReply request:[NSURL URLWithString:string]];
}

- (void) playPause{
	NSLog(@"FDServer-playPause");
	NSString *string = [NSString stringWithFormat:kRequestPlayPause,self.host,self.port,sessionId];
	/*DAAPRequest *daapReq = [[DAAPRequest alloc] init];	
	[daapReq asyncRequest:[NSURL URLWithString:string]];
	[daapReq release];*/
	[DAAPRequestReply request:[NSURL URLWithString:string]];
}

- (void) playNextItem{
	NSLog(@"FDServer-playNextItem");
	NSString *string = [NSString stringWithFormat:kRequestPlayNextItem,self.host,self.port,sessionId];
	/*DAAPRequest *daapReq = [[DAAPRequest alloc] init];
	
	[daapReq asyncRequest:[NSURL URLWithString:string]];
	[daapReq release];*/
	[DAAPRequestReply request:[NSURL URLWithString:string]];
}

- (void) updateStatus{
	NSLog(@"FDServer-updateStatus");
	NSString* str = [NSString stringWithFormat:kRequestUpdate,host,port,sessionId,musr];
	DAAPResponsemupd *mupd = (DAAPResponsemupd *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:str]];
	musr = [mupd.musr intValue];
}

+ (void) getServerInfoForHost:(NSString *)host atPort:(NSString *)port{
	NSLog(@"FDServer-getServerInfoForHost");
	NSString* str = [NSString stringWithFormat:kRequestServerInfo,host,port];
	DAAPResponsemsrv *msrv = (DAAPResponsemsrv *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:str]];
	NSLog(@"%@",msrv.ceWM);
	//[msrv release];
	//NSString* str = [[NSString alloc] initWithFormat:kRequestContentCodes,host,port];
	//DAAPResponsemccr * resp = (DAAPResponsemccr *)[DAAPRequestReply requestAndParseResponse:[NSURL URLWithString:str]];
}

- (void)dealloc {
	[self.host release];
	[self.port release];
	[self.pairingGUID release];
	[self.servicename release];
	[self.TXT release];
    [super dealloc];
}

@end
