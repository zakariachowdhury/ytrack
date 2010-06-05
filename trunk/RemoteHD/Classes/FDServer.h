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
@optional
- (void) didFindSpeakers:(NSArray *)speakers;

@end


@interface FDServer : NSObject <DAAPRequestDelegate> {
	NSString *host;
	NSString *port;
	NSInteger databaseId;
	NSInteger musicLibraryId;
	id<FDServerDelegate> delegate;
	DAAPRequestReply *daap;
	int musr;
	BOOL connected;
}

@property (nonatomic, copy) NSString *host;
@property (nonatomic, copy) NSString *port;
@property (nonatomic) NSInteger databaseId;
@property (nonatomic) NSInteger musicLibraryId;
@property (nonatomic, assign) id<FDServerDelegate> delegate;
@property (nonatomic, retain) DAAPRequestReply *daap;
@property (nonatomic) BOOL connected;


- (id) initWithHost:(NSString *)theHost port:(NSString *)thePort;

- (NSArray *) getPlayLists;
- (DAAPResponsemlcl *) getAllTracks;
- (void) getAllTracks:(id<DAAPRequestDelegate>)aDelegate;
- (void) playSongInLibrary:(int)songId;
- (void) playPreviousItem;
- (void) playNextItem;
- (void) playPause;
- (void) playStatusUpdate:(NSTimer *)timer;
- (void) monitorPlayStatus:(id<FDServerDelegate>)aDelegate;
- (void) updateStatus;
- (long) getVolume;
- (void) setVolume:(long) volume;
- (NSArray *) getSpeakers;

+ (void) getServerInfoForHost:(NSString *)host atPort:(NSString *)port;


@end
