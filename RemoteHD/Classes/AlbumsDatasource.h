//
//  AlbumsDatasource.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 19/06/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "DAAPResponseagal.h"
#import "AsyncImageLoader.h"

@interface AlbumsDatasource : NSObject 
//<UITableViewDataSource, UITableViewDelegate>
{
		DAAPResponseagal *agal;
	@private
		NSMutableDictionary *artworks;
		NSMutableDictionary *cellId;
}

@property (nonatomic, retain) DAAPResponseagal *agal;

@end
