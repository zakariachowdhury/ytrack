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

@implementation SessionManager

@synthesize currentLibrary;
@synthesize currentServer;

SYNTHESIZE_SINGLETON_FOR_CLASS(SessionManager)

- (BOOL) isSessionEstablished {
	return NO;
}

- (int) getSessionId{
	return sessionId;
}

- (NSString *) getHost{
	if (currentLibrary != nil)
		return [currentLibrary objectForKey:@"host"];
	else return nil;
}
- (NSString *) getPort{
	if (currentLibrary != nil)
		return [currentLibrary objectForKey:@"port"];
	else return nil;
}


- (void) open{
	if (currentLibrary != nil) {
		NSString *host = [self.currentLibrary objectForKey:@"host"];
		NSString *portStr = [self.currentLibrary objectForKey:@"port"];
		NSString* string = [[NSString alloc] initWithFormat:kRequestLogin,host,portStr,[self.currentLibrary objectForKey:@"pairingGUID"]];
		
		NSLog(@"%@",string);
		DAAPResponsemlog * resp = (DAAPResponsemlog *)[DAAPRequestReply requestAndParseResponse:[NSURL URLWithString:string]];
		sessionId = [[resp mlid] longValue];
		self.currentServer = [[FDServer alloc] initWithHost:host port:portStr];
		[[NSNotificationCenter defaultCenter ]postNotificationName:@"connected" object:nil]; 
	}
}

@end
