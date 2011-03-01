//
//  PodcastTracksDatasource.h
//  yTrack
//
//  Created by Fabrice Dewasmes on 01/08/10.
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

#import <Foundation/Foundation.h>
#import "DAAPRequestReply.h"
#import "DAAPDatasource.h"
#import "TrackCustomCellClass.h"
#import "AsyncImageLoader.h"

@interface PodcastsTracksDatasource : UITableViewController < AsyncImageLoaderDelegate>{
	UINavigationController *navigationController;
	long long containerPersistentId;
	NSMutableDictionary *artworks;
	NSMutableDictionary *cellId;
	NSMutableDictionary *loaders;
	NSArray *list;
	NSNumber *currentPodcastGroupId;
	id<DAAPDatasourceDelegate> delegate;
	kItemType itemType;
}

@property (nonatomic, assign) UINavigationController *navigationController;
@property (nonatomic, assign) long long containerPersistentId;
@property (nonatomic, retain) NSArray *list;
@property (nonatomic, retain) NSNumber *currentPodcastGroupId;
@property (nonatomic, assign) kItemType itemType;

@end
