//
//  FDServer.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 25/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "DAAPRequestReply.h"

@interface FDServer : NSObject {
	NSString *host;
	NSString *port;
	NSInteger databaseId;
	NSInteger musicLibraryId;
}

@property (nonatomic, copy) NSString *host;
@property (nonatomic, copy) NSString *port;
@property (nonatomic) NSInteger databaseId;
@property (nonatomic) NSInteger musicLibraryId;

- (id) initWithHost:(NSString *)theHost port:(NSString *)thePort;

- (NSArray *) getPlayLists;
- (NSArray *) getAllTracks;
- (void) playSongInLibrary:(int)songId;

+ (void) getServerInfoForHost:(NSString *)host atPort:(NSString *)port;


@end
