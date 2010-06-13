//
//  SessionManager.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 23/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "FDServer.h"

@interface SessionManager : NSObject {
@private
	BOOL sessionEstablished;
	NSMutableArray *_servers;
}


+ (id) sharedSessionManager;

- (BOOL) isSessionEstablished;
- (void) foundNewServer:(FDServer *)server;
- (NSArray *) getServers;
- (FDServer *) currentServer;
- (void) openLastUsedServer;

@end
