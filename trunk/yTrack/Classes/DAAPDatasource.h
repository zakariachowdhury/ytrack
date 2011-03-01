//
//  DAAPDatasource.h
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

#import <Foundation/Foundation.h>
#import "DAAPResponse.h"

typedef enum {
	kItemTypePodcast = 0,
	kItemTypeBook = 1,
} kItemType;

@protocol DAAPDatasourceDelegate

- (void) refreshTableView;
- (void) didFinishLoading;
@optional
- (void) updateImage:(UIImage *)image forIndexPath:(NSIndexPath *)indexPath;

@end

@interface DAAPDatasource : NSObject {
	NSArray *list;
	NSArray *indexList;
	BOOL needsRefresh;
	id<DAAPDatasourceDelegate> delegate;
}

@property (nonatomic, retain) NSArray *list;
@property (nonatomic, retain) NSArray *indexList;
@property (nonatomic, assign) id<DAAPDatasourceDelegate> delegate;
@property (nonatomic) BOOL needsRefresh;

- (void) didFinishLoading:(DAAPResponse *)response;
- (void) clearDatas;

@end
