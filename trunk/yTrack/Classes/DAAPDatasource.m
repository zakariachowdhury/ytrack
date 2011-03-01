//
//  DAAPDatasource.m
//  yTrack
//
//  Created by Fabrice Dewasmes on 24/06/10.
//  Copyright 2010 Fabrice Dewasmes. All rights reserved.
//  
//  This file is part of yTrack.
//  
//  yTrack is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//  
//  yTrack is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//  
//  You should have received a copy of the GNU General Public License
//  along with yTrack.  If not, see <http://www.gnu.org/licenses/>.
//

#import "DAAPDatasource.h"
#import "DAAPResponsecmst.h"
#import "DDLog.h"

#ifdef CONFIGURATION_DEBUG
static const int ddLogLevel = LOG_LEVEL_VERBOSE;
#else
static const int ddLogLevel = LOG_LEVEL_WARN;
#endif

@implementation DAAPDatasource
@synthesize delegate;
@synthesize list;
@synthesize indexList;
@synthesize needsRefresh;

- (id) init{
	if ((self = [super init])) {
		needsRefresh = YES;
		[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(statusUpdate:) name:kNotificationStatusUpdate object:nil];
    }
    return self;
}


// Used to update nowPlaying in the table
- (void) statusUpdate:(NSNotification *)notification{
	DDLogVerbose(@"DAAPDatasource received update from server");
	[self.delegate refreshTableView];
	DDLogVerbose(@"DAAPDatasource doneRefreshing");
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
	[super dealloc];
}

@end
