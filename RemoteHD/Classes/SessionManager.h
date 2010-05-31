//
//  SessionManager.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 23/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "FDServer.h"
#import "Library.h"

@interface SessionManager : NSObject {
	Library *currentLibrary;
	FDServer *currentServer;
@private
	BOOL sessionEstablished;
	int sessionId;
}

@property (nonatomic, retain) Library *currentLibrary;
@property (nonatomic, retain) FDServer *currentServer;


+ (id) sharedSessionManager;

- (BOOL) isSessionEstablished;
- (int) getSessionId;
- (NSString *) getHost;
- (NSString *) getPort;
- (void) open;

@end
