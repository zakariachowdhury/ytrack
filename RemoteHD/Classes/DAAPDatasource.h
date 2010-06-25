//
//  DAAPDatasource.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 24/06/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>

@protocol DAAPDatasourceDelegate

- (void) refreshTableView;
- (void) didFinishLoading;
@optional
- (void) updateImage:(UIImage *)image forIndexPath:(NSIndexPath *)indexPath;

@end

@interface DAAPDatasource : NSObject {
	NSString *currentTrack;
	NSString *currentArtist;
	NSString *currentAlbum;
	id<DAAPDatasourceDelegate> delegate;
}

@property (nonatomic, copy) NSString *currentTrack;
@property (nonatomic, copy) NSString *currentAlbum;
@property (nonatomic, copy) NSString *currentArtist;
@property (nonatomic, assign) id<DAAPDatasourceDelegate> delegate;

@end
