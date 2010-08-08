//
//  PodcastsDatasource.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 01/08/10.
//  Copyright 2010 Fabrice Dewasmes. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "DAAPRequestReply.h"
#import "DAAPDatasource.h"
#import "TrackCustomCellClass.h"
#import "AsyncImageLoader.h"

@interface PodcastsDatasource : DAAPDatasource <UITableViewDataSource, UITableViewDelegate, DAAPRequestDelegate, AsyncImageLoaderDelegate>{
	UINavigationController *navigationController;
	long long containerPersistentId;
	NSMutableDictionary *artworks;
	NSMutableDictionary *cellId;
	NSMutableDictionary *loaders;
}

@property (nonatomic, assign) UINavigationController *navigationController;
@property (nonatomic, assign) long long containerPersistentId;

@end
