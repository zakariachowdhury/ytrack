//
//  TracksDatasource.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 24/06/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "DAAPRequestReply.h"
#import "ArtistDatasource.h"
#import "TrackCustomCellClass.h"
#import "DAAPDatasource.h"


@interface TracksDatasource : DAAPDatasource <UITableViewDataSource, UITableViewDelegate, DAAPRequestDelegate>{
	NSArray *results;
	NSArray *indexList;

	UINavigationController *navigationController;
}

@property (nonatomic, retain) NSArray *results;
@property (nonatomic, retain) NSArray *indexList;
@property (nonatomic, assign) UINavigationController *navigationController;

@end
