//
//  DetailViewController.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 19/05/10.
//  fabrice.dewasmes@gmail.com
//  Copyright Fabrice Dewasmes 2010. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "DAAPRequestReply.h"
#import "ArtistDatasource.h"

@protocol DetailDelegate

- (void) didSelectItem;
- (void) didFinishLoading;

@end


@interface DetailViewController : UITableViewController <DAAPRequestDelegate> {
	NSArray *results;
	NSArray *indexList;
	NSMutableArray *arrayOfCharacters;
	NSString *currentTrack;
	ArtistDatasource *artistDatasource;
	id<DetailDelegate> delegate;
}

@property (nonatomic, retain) NSArray *results;
@property (nonatomic, retain) NSArray *indexList;
@property (nonatomic, assign) id<DetailDelegate> delegate;
@property (nonatomic, copy) NSString *currentTrack;
@property (nonatomic, retain) ArtistDatasource *artistDatasource;

- (void) display;
- (void) didFinishLoading:(DAAPResponse *)response;
- (void) changeToArtistView;
- (void) changeToAlbumView;
- (void) changeToTrackView;
//- (void) nowPlayingTrack:(NSString *)track album:(NSString *)album artist:(NSString *)artist;

@end
