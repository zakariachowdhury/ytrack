//
//  DAAPDatasource.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 24/06/10.
//  Copyright 2010 Fabrice Dewasmes. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "DAAPResponse.h"

@protocol DAAPDatasourceDelegate

- (void) refreshTableView;
- (void) didFinishLoading;
@optional
- (void) updateImage:(UIImage *)image forIndexPath:(NSIndexPath *)indexPath;

@end

@interface DAAPDatasource : NSObject {
	NSArray *list;
	NSArray *indexList;
	NSString *currentTrack;
	NSString *currentArtist;
	NSString *currentAlbum;
	BOOL needsRefresh;
	id<DAAPDatasourceDelegate> delegate;
}

@property (nonatomic, copy) NSString *currentTrack;
@property (nonatomic, copy) NSString *currentAlbum;
@property (nonatomic, copy) NSString *currentArtist;
@property (nonatomic, retain) NSArray *list;
@property (nonatomic, retain) NSArray *indexList;
@property (nonatomic, assign) id<DAAPDatasourceDelegate> delegate;
@property (nonatomic) BOOL needsRefresh;

- (void) didFinishLoading:(DAAPResponse *)response;
- (void) clearDatas;

@end
