//
//  ArtistDelegate.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 11/06/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>


@interface ArtistDatasource : NSObject <UITableViewDataSource, UITableViewDelegate>{
	NSArray *list;
	UINavigationController *navigationController;
}

@property (nonatomic, retain) NSArray *list;
@property (nonatomic, assign) UINavigationController *navigationController;

@end
