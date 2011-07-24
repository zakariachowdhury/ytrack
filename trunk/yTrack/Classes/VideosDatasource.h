//
//  VideosDatasource.h
//  yTrack
//
//  Created by Fabrice Dewasmes on 11/07/11.
//  Copyright 2011 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "DAAPResponseagal.h"
#import "DAAPRequestReply.h"
#import "AsyncImageLoader.h"
#import "DAAPDatasource.h"

@interface VideosDatasource : DAAPDatasource  <UITableViewDataSource, UITableViewDelegate, DAAPRequestDelegate, AsyncImageLoaderDelegate>
{
	UINavigationController *navigationController;
    long long containerPersistentId;
@private
    NSMutableDictionary *artworks;
    NSMutableDictionary *cellId;
    NSMutableDictionary *loaders;
}

@property (nonatomic, assign) UINavigationController *navigationController;

- (void) cleanJobs;
@end