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


@implementation FDServer

@synthesize host;
@synthesize port;
@synthesize databaseId;
@synthesize musicLibraryId;
@synthesize delegate;


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
    }
    return self;
}

- (NSArray *) getPlayLists{
	SessionManager *sm = [SessionManager sharedSessionManager];
	NSString *string3 = [NSString stringWithFormat:kRequestPlayLists,self.host,self.port,databaseId,[sm getSessionId]];
	NSLog(@"%@",string3);
	DAAPResponseaply * response = (DAAPResponseaply *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:string3] ];
	return response.mlcl.list;
}

- (void) monitorPlayStatus:(id<FDServerDelegate>)aDelegate{
	self.delegate = aDelegate;
	SessionManager *sm = [SessionManager sharedSessionManager];
	NSString *string3 = [NSString stringWithFormat:kRequestPlayStatusUpdate,self.host,self.port,1,[sm getSessionId]];
	daap = [[DAAPRequestReply alloc] init] ;
	[daap setDelegate:self];
	[daap asyncRequestAndParse:[NSURL URLWithString:string3]];
}

- (void) didFinishLoading:(DAAPResponse *)response{
	DAAPResponsecmst * cmst = (DAAPResponsecmst *)response;
	[self.delegate statusUpdate:cmst];
	SessionManager *sm = [SessionManager sharedSessionManager];
	NSString *string3 = [NSString stringWithFormat:kRequestPlayStatusUpdate,self.host,self.port,cmst.cmsr,[sm getSessionId]];

	daap = [[DAAPRequestReply alloc] init] ;
	[daap setDelegate:self];
	[daap asyncRequestAndParse:[NSURL URLWithString:string3]];
}

- (void) getAllTracks:(id<DAAPRequestDelegate>)aDelegate{
	SessionManager *sm = [SessionManager sharedSessionManager];
	NSString *string3 = [NSString stringWithFormat:kRequestAllTracks,self.host,self.port,databaseId,musicLibraryId, [sm getSessionId]];
	daap = [[DAAPRequestReply alloc] init];
	[daap setDelegate:aDelegate];
	[daap asyncRequestAndParse:[NSURL URLWithString:string3]];
}

- (DAAPResponsemlcl *) getAllTracks{
	SessionManager *sm = [SessionManager sharedSessionManager];
	NSString *string3 = [NSString stringWithFormat:kRequestAllTracks,self.host,self.port,databaseId,musicLibraryId, [sm getSessionId]];
	//DAAPResponseapso * response = (DAAPResponseapso *)[DAAPRequestReply requestAndParseResponse:[NSURL URLWithString:string3] ];
	DAAPResponseapso * response = (DAAPResponseapso *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:string3]];
	return response.mlcl;
}

- (void) playSongInLibrary:(int)songId{
	SessionManager *sm = [SessionManager sharedSessionManager];
	
	NSString *string = [NSString stringWithFormat:kRequestStopPlaying,self.host,self.port,[sm getSessionId]];
	[DAAPRequestReply request:[NSURL URLWithString:string]];
	
	NSString *string2 = [NSString stringWithFormat:kRequestPlaySongInLibrary,self.host,self.port,songId,[sm getSessionId]];
	NSLog(@"%@",string2);
	[DAAPRequestReply request:[NSURL URLWithString:string2]];
}

- (void) playPreviousItem{
	SessionManager *sm = [SessionManager sharedSessionManager];
	
	NSString *string = [NSString stringWithFormat:kRequestPlayPreviousItem,self.host,self.port,[sm getSessionId]];
	[DAAPRequestReply request:[NSURL URLWithString:string]];
}

- (void) playPause{
	SessionManager *sm = [SessionManager sharedSessionManager];
	
	NSString *string = [NSString stringWithFormat:kRequestPlayPause,self.host,self.port,[sm getSessionId]];
	[DAAPRequestReply request:[NSURL URLWithString:string]];
}

- (void) playNextItem{
	SessionManager *sm = [SessionManager sharedSessionManager];
	
	NSString *string = [NSString stringWithFormat:kRequestPlayNextItem,self.host,self.port,[sm getSessionId]];
	[DAAPRequestReply request:[NSURL URLWithString:string]];
}

- (void) playStatusUpdate{
	SessionManager *sm = [SessionManager sharedSessionManager];
	
	NSString *string = [NSString stringWithFormat:kRequestPlayStatusUpdate,self.host,self.port,[sm getSessionId]];
	DAAPResponsecmst * response = (DAAPResponsecmst *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:string]];
	NSLog(@"cana:%@",response.cana);
	NSLog(@"cant:%d",response.cant);
}

/*- (UIImage *) getArtwork{
	SessionManager *sm = [SessionManager sharedSessionManager];
	
	NSString *string = [NSString stringWithFormat:kRequestNowPlayingArtwork,self.host,self.port,[sm getSessionId]];
	[DAAPRequestReply request:[NSURL URLWithString:string]];
}*/

+ (void) getServerInfoForHost:(NSString *)host atPort:(NSString *)port{
	NSString* str = [[NSString alloc] initWithFormat:kRequestServerInfo,host,port];
	DAAPResponsemsrv *msrv = (DAAPResponsemsrv *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:str]];
	NSLog(@"%@",msrv.ceWM);
	//NSString* str = [[NSString alloc] initWithFormat:kRequestContentCodes,host,port];
	//DAAPResponsemccr * resp = (DAAPResponsemccr *)[DAAPRequestReply requestAndParseResponse:[NSURL URLWithString:str]];
}

@end
