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
#import "DAAPResponseapso.h"


@implementation FDServer

@synthesize host;
@synthesize port;
@synthesize databaseId;
@synthesize musicLibraryId;

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
		DAAPResponseavdb * db = (DAAPResponseavdb *)[DAAPRequestReply requestAndParseResponse:[NSURL URLWithString:databaseRequest]];
		self.databaseId = [(NSNumber *)[(DAAPResponsemlit *)[db.res objectAtIndex:0] miid] intValue];

		NSString *string3 = [NSString stringWithFormat:kRequestPlayLists,[sm getHost],[sm getPort],databaseId,[sm getSessionId]];
		NSLog(@"%@",string3);
		DAAPResponseaply * response = (DAAPResponseaply *)[DAAPRequestReply requestAndParseResponse:[NSURL URLWithString:string3] ];
		for (DAAPResponsemlit *pl in response.playLists) {
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
	DAAPResponseaply * response = (DAAPResponseaply *)[DAAPRequestReply requestAndParseResponse:[NSURL URLWithString:string3] ];
	return response.playLists;
}

- (NSArray *) getAllTracks{
	SessionManager *sm = [SessionManager sharedSessionManager];
	NSString *string3 = [NSString stringWithFormat:kRequestAllTracks,self.host,self.port,databaseId,musicLibraryId, [sm getSessionId]];
	DAAPResponseapso * response = (DAAPResponseapso *)[DAAPRequestReply requestAndParseResponse:[NSURL URLWithString:string3] ];
	return response.res;
}

- (void) playSongInLibrary:(int)songId{
	SessionManager *sm = [SessionManager sharedSessionManager];
	
	NSString *string = [NSString stringWithFormat:kRequestStopPlaying,self.host,self.port,[sm getSessionId]];
	[DAAPRequestReply request:[NSURL URLWithString:string]];
	
	NSString *string2 = [NSString stringWithFormat:kRequestPlaySongInLibrary,self.host,self.port,1,[sm getSessionId]];
	NSLog(@"%@",string2);
	[DAAPRequestReply request:[NSURL URLWithString:string2]];
}

+ (void) getServerInfoForHost:(NSString *)host atPort:(NSString *)port{
	NSString* str = [[NSString alloc] initWithFormat:kRequestServerInfo,host,port];
	(DAAPResponsemsrv *)[DAAPRequestReply requestAndParseResponse:[NSURL URLWithString:str]];
	//NSString* str = [[NSString alloc] initWithFormat:kRequestContentCodes,host,port];
	//DAAPResponsemccr * resp = (DAAPResponsemccr *)[DAAPRequestReply requestAndParseResponse:[NSURL URLWithString:str]];
}

@end
