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
#import "SessionManager.h"
#import "DAAPResponseavdb.h"
#import "DAAPResponseaply.h"
#import "DAAPResponsemlit.h"
#import "DAAPResponsecmst.h"
#import "DAAPResponsemupd.h"
#import "DAAPResponsecmgt.h"
#import "DAAPResponsecasp.h"

@implementation FDServer

@synthesize host;
@synthesize port;
@synthesize databaseId;
@synthesize musicLibraryId;
@synthesize delegate;
@synthesize daap;
@synthesize connected;


- (id) init {
	if ((self = [super init])) {
        //[self getServerInfo];
    }
    return self;
}

- (id) initWithHost:(NSString *)theHost port:(NSString *)thePort{
	if ((self = [super init])) {
        self.host = theHost;
		self.port = thePort;
		SessionManager *sm = [SessionManager sharedSessionManager];
		NSString *databaseRequest = [NSString stringWithFormat:kRequestDatabases,[sm getHost],[sm getPort],[sm getSessionId]];
		DAAPResponseavdb * db = (DAAPResponseavdb *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:databaseRequest]];
		self.databaseId = [(NSNumber *)[(DAAPResponsemlit *)[db.mlcl.list  objectAtIndex:0] miid] intValue];
		NSString *string3 = [NSString stringWithFormat:kRequestPlayLists,[sm getHost],[sm getPort],databaseId,[sm getSessionId]];
		NSLog(@"%@",string3);
		DAAPResponseaply * response = (DAAPResponseaply *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:string3] ];
		for (DAAPResponsemlit *pl in response.mlcl.list) {
			if ([pl.minm isEqualToString:@"Music"])
				self.musicLibraryId = [pl.miid intValue];
		}

		NSLog(@"done");
		musr = 1;
    }
    return self;
}

- (NSArray *) getPlayLists{
	NSLog(@"FDServer-getPlayLists");
	SessionManager *sm = [SessionManager sharedSessionManager];
	NSString *string3 = [NSString stringWithFormat:kRequestPlayLists,self.host,self.port,databaseId,[sm getSessionId]];
	NSLog(@"%@",string3);
	DAAPResponseaply * response = (DAAPResponseaply *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:string3] ];
	NSArray *list = [NSArray arrayWithArray:response.mlcl.list];
	return list;
}

- (void) monitorPlayStatus:(id<FDServerDelegate>)aDelegate{
	NSLog(@"FDServer-monitorPlayStatus");
	self.delegate = aDelegate;
	SessionManager *sm = [SessionManager sharedSessionManager];
	NSString *string3 = [NSString stringWithFormat:kRequestPlayStatusUpdate,self.host,self.port,1,[sm getSessionId]];
	if (self.daap != nil) {
		//[self.daap cancelConnection];
		//self.daap = nil;
		return;
	}
	if (self.daap == nil) {
		/*DAAPRequestReply *temp = [[DAAPRequestReply alloc] init];
		self.daap = temp;
		[temp release];*/
		self.daap = [[DAAPRequestReply alloc] init];
	}
	
	[self.daap setDelegate:self];
	[self.daap asyncRequestAndParse:[NSURL URLWithString:string3]];
}

- (void) connectionTimedOut{
	
	SessionManager *sm = [SessionManager sharedSessionManager];
	[sm open];
	NSString *string3 = [NSString stringWithFormat:kRequestPlayStatusUpdate,self.host,self.port,1,[sm getSessionId]];
	NSLog(@"%@",string3);
	[self.daap setDelegate:self];
	[self.daap asyncRequestAndParse:[NSURL URLWithString:string3]];
}

- (void) didFinishLoading:(DAAPResponse *)response{
	NSLog(@"FDServer-didFinishLoading");
	if (response == nil){
		NSLog(@"---PLAYSTATUSUPDATE RESPONSE IS NIL, ABANDONING UPDATES FROM SERVER---");
		return;
	}
	DAAPResponsecmst * cmst = (DAAPResponsecmst *)response;
	[self.delegate statusUpdate:cmst];
	
	SessionManager *sm = [SessionManager sharedSessionManager];
	revNum = [[cmst cmsr] longValue];
	if (revNum < 1) {
		revNum = 1;
	}
	NSString *string3 = [NSString stringWithFormat:kRequestPlayStatusUpdate,self.host,self.port,revNum,[sm getSessionId]];
	NSLog(@"%@",string3);
	//[daap release];
	//daap = [[DAAPRequestReply alloc] init] ;
	[self.daap setDelegate:self];
	[self.daap asyncRequestAndParse:[NSURL URLWithString:string3]];
}

- (void) getAllTracks:(id<DAAPRequestDelegate>)aDelegate{
	NSLog(@"FDServer-getAllTracks with delegate");
	SessionManager *sm = [SessionManager sharedSessionManager];
	NSString *string3 = [NSString stringWithFormat:kRequestAllTracks,self.host,self.port,databaseId,musicLibraryId, [sm getSessionId]];
	DAAPRequestReply *daapreq = [[DAAPRequestReply alloc] init];
	[daapreq setDelegate:aDelegate];
	[daapreq asyncRequestAndParse:[NSURL URLWithString:string3]];
	// FIXME : we should release the request but data are not properly retained in tableview
	//[daapreq release];
}

- (DAAPResponsemlcl *) getAllTracks{
	NSLog(@"FDServer-getAllTracks");
	SessionManager *sm = [SessionManager sharedSessionManager];
	NSString *string3 = [NSString stringWithFormat:kRequestAllTracks,self.host,self.port,databaseId,musicLibraryId, [sm getSessionId]];
	DAAPResponseapso * response = (DAAPResponseapso *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:string3]];
	DAAPResponsemlcl *resp = [response.mlcl copy];
	return resp;
}

- (NSArray *) getSpeakers{
	NSLog(@"FDServer-getSpeakers");
	SessionManager *sm = [SessionManager sharedSessionManager];
	NSString *string3 = [NSString stringWithFormat:kRequestGetSpeakers,self.host,self.port, [sm getSessionId]];
	DAAPResponsecasp *casp = (DAAPResponsecasp *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:string3]];
	
	return casp.speakers;
}

- (void) setSpeakers:(NSArray *)speakers{
	NSLog(@"FDServer-setSpeakers");
	if ([speakers count] < 1) return;
	SessionManager *sm = [SessionManager sharedSessionManager];
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

	NSString *string = [NSString stringWithFormat:kRequestSetSpeakers,self.host,self.port,speakerList,[sm getSessionId]];
	NSLog(@"%@",string);
	[DAAPRequestReply request:[NSURL URLWithString:string]];
}

- (long) getVolume{
	NSLog(@"FDServer-getVolume");
	SessionManager *sm = [SessionManager sharedSessionManager];
	NSString *string3 = [NSString stringWithFormat:kRequestPropertyVolume,self.host,self.port, [sm getSessionId]];
	DAAPResponsecmgt * response = (DAAPResponsecmgt *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:string3]];
	return [response.cmvo longValue];
	
}

- (void) setVolume:(long) volume{
	NSLog(@"FDServer-setVolume");
	SessionManager *sm = [SessionManager sharedSessionManager];
	
	NSString *string = [NSString stringWithFormat:kRequestChangePropertyVolume,self.host,self.port,volume,[sm getSessionId]];
	[DAAPRequestReply request:[NSURL URLWithString:string]];
}

- (void) playSongInLibrary:(int)songId{
	NSLog(@"FDServer-playSongInLibrary");
	SessionManager *sm = [SessionManager sharedSessionManager];
	
	NSString *string = [NSString stringWithFormat:kRequestStopPlaying,self.host,self.port,[sm getSessionId]];
	[DAAPRequestReply request:[NSURL URLWithString:string]];
	
	NSString *string2 = [NSString stringWithFormat:kRequestPlaySongInLibrary,self.host,self.port,songId,[sm getSessionId]];
	NSLog(@"%@",string2);
	[DAAPRequestReply request:[NSURL URLWithString:string2]];
}

- (void) playPreviousItem{
	NSLog(@"FDServer-playPreviousItem");
	SessionManager *sm = [SessionManager sharedSessionManager];
	
	NSString *string = [NSString stringWithFormat:kRequestPlayPreviousItem,self.host,self.port,[sm getSessionId]];
	[DAAPRequestReply request:[NSURL URLWithString:string]];
}

- (void) playPause{
	NSLog(@"FDServer-playPause");
	SessionManager *sm = [SessionManager sharedSessionManager];
	
	NSString *string = [NSString stringWithFormat:kRequestPlayPause,self.host,self.port,[sm getSessionId]];
	[DAAPRequestReply request:[NSURL URLWithString:string]];
}

- (void) playNextItem{
	NSLog(@"FDServer-playNextItem");
	SessionManager *sm = [SessionManager sharedSessionManager];
	
	NSString *string = [NSString stringWithFormat:kRequestPlayNextItem,self.host,self.port,[sm getSessionId]];
	[DAAPRequestReply request:[NSURL URLWithString:string]];
}

- (void) playStatusUpdate:(NSTimer *)timer{
	NSLog(@"FDServer-playStatusUpdate");
	SessionManager *sm = [SessionManager sharedSessionManager];
	NSNumber *idReq = [timer userInfo];
	NSString *string3 = [NSString stringWithFormat:kRequestPlayStatusUpdate,self.host,self.port,[idReq longValue],[sm getSessionId]];
	
	daap = [[DAAPRequestReply alloc] init] ;
	[daap setDelegate:self];
	[daap asyncRequestAndParse:[NSURL URLWithString:string3]];
	
}

- (void) updateStatus{
	NSLog(@"FDServer-updateStatus");
	SessionManager *sm = [SessionManager sharedSessionManager];
	NSString* str = [NSString stringWithFormat:kRequestUpdate,host,port,[sm getSessionId],musr];
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
	[self.daap release];
	[self.host release];
	[self.port release];
    [super dealloc];
}

@end
