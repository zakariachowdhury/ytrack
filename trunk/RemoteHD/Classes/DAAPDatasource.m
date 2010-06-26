//
//  DAAPDatasource.m
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 24/06/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import "DAAPDatasource.h"
#import "DAAPResponsecmst.h"


@implementation DAAPDatasource
@synthesize delegate;
@synthesize list;
@synthesize indexList;
@synthesize currentTrack;
@synthesize currentAlbum;
@synthesize currentArtist;
@synthesize needsRefresh;

- (id) init{
	if ((self = [super init])) {
		[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(statusUpdate:) name:kNotificationStatusUpdate object:nil];
		needsRefresh = YES;
    }
    return self;
}


// Used to update nowPlaying in the table
- (void) statusUpdate:(NSNotification *)notification{
	DAAPResponsecmst *cmst = (DAAPResponsecmst *)[notification.userInfo objectForKey:@"cmst"];
	self.currentTrack = cmst.cann;
	self.currentArtist = cmst.cana;
	self.currentAlbum = cmst.canl;
	
	[self.delegate refreshTableView];
}

- (void) clearDatas{
	self.list = nil;
	self.indexList = nil;
	needsRefresh = YES;
}

- (void) didFinishLoading:(DAAPResponse *)response{
	needsRefresh = NO;
}

- (void) dealloc{
	[self.list release];
	[self.indexList release];
	[currentTrack release];
	[currentAlbum release];
	[currentArtist release];
	[super dealloc];
}

@end
