//
//  FDServer.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 25/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "DAAPRequestReply.h"
#import "DAAPResponseapso.h"
#import "DAAPResponsecmst.h"

@protocol FDServerDelegate

- (void) statusUpdate:(DAAPResponsecmst *)cmst;

@end


@interface FDServer : NSObject <DAAPRequestDelegate> {
	NSString *host;
	NSString *port;
	NSInteger databaseId;
	NSInteger musicLibraryId;
	id<FDServerDelegate> delegate;
	DAAPRequestReply *daap;
}

@property (nonatomic, copy) NSString *host;
@property (nonatomic, copy) NSString *port;
@property (nonatomic) NSInteger databaseId;
@property (nonatomic) NSInteger musicLibraryId;
@property (nonatomic, assign) id<FDServerDelegate> delegate;


- (id) initWithHost:(NSString *)theHost port:(NSString *)thePort;

- (NSArray *) getPlayLists;
- (DAAPResponsemlcl *) getAllTracks;
- (void) getAllTracks:(id<DAAPRequestDelegate>)aDelegate;
- (void) playSongInLibrary:(int)songId;
- (void) playPreviousItem;
- (void) playNextItem;
- (void) playPause;
- (void) playStatusUpdate;
- (void) monitorPlayStatus:(id<FDServerDelegate>)aDelegate;

+ (void) getServerInfoForHost:(NSString *)host atPort:(NSString *)port;


@end
