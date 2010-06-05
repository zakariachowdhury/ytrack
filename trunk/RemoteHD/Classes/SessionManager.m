//
//  SessionManager.m
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 23/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import "SessionManager.h"
#import "SynthesizeSingleton.h"
#import "DAAPRequestReply.h"
#import "DAAPResponsemlog.h"
#import "DAAPResponsemdcl.h"

@implementation SessionManager

@synthesize currentLibrary;
@synthesize currentServer;

SYNTHESIZE_SINGLETON_FOR_CLASS(SessionManager)

- (BOOL) isSessionEstablished {
	if (self.currentServer != nil) {
		if (self.currentServer.connected) {
			return YES;
		}
	}
	return NO;
}

- (int) getSessionId{
	return sessionId;
}

- (NSString *) getHost{
	if (currentLibrary != nil)
		return currentLibrary.host;
	else return nil;
}
- (NSString *) getPort{
	if (currentLibrary != nil)
		return currentLibrary.port;
	else return nil;
}


- (void) open{
	NSLog(@"SessionManager-open");
	if (currentLibrary != nil) {
		NSLog(@"SessionManager-currentLibrary is not nil");
		if (!currentServer.connected){
			NSLog(@"SessionManager-currentServer is not connected");
			NSString *host = self.currentLibrary.host;
			NSString *portStr = self.currentLibrary.port;
			NSString *pairingGuid = self.currentLibrary.pairingGUID;
			NSString *loginURL = [NSString stringWithFormat:kRequestLogin,host,portStr,pairingGuid];
			NSLog(@"%@",loginURL);
			DAAPResponsemlog * resp = (DAAPResponsemlog *)[DAAPRequestReply onTheFlyRequestAndParseResponse:[NSURL URLWithString:loginURL]];
			sessionId = [[resp mlid] longValue];
			self.currentServer = [[FDServer alloc] initWithHost:host port:portStr];
			self.currentServer.connected = YES;
			[[NSNotificationCenter defaultCenter ]postNotificationName:@"connected" object:nil]; 
		}
	}
}

@end
