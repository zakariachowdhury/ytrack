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
#import "TrackCustomCellClass.h"
#import "DAAPDatasource.h"
#import "TracksDatasource.h"
#import "BooksDatasource.h"
#import "AlbumsDatasource.h"

@protocol DetailDelegate

- (void) didSelectItem;
- (void) didFinishLoading;

@end


@interface DetailViewController : UITableViewController <DAAPRequestDelegate, DAAPDatasourceDelegate> {
	NSArray *results;
	NSArray *indexList;
	NSMutableArray *arrayOfCharacters;
	NSString *currentTrack;
	NSString *currentArtist;
	NSString *currentAlbum;
	ArtistDatasource *artistDatasource;
	TracksDatasource *tracksDatasource;
	BooksDatasource *booksDatasource;
	AlbumsDatasource *albumsDatasource;
	id<DetailDelegate> delegate;
}

@property (nonatomic, retain) NSArray *results;
@property (nonatomic, retain) NSArray *indexList;
@property (nonatomic, assign) id<DetailDelegate> delegate;
@property (nonatomic, copy) NSString *currentTrack;
@property (nonatomic, copy) NSString *currentAlbum;
@property (nonatomic, copy) NSString *currentArtist;
@property (nonatomic, retain) ArtistDatasource *artistDatasource;
@property (nonatomic, retain) TracksDatasource *tracksDatasource;
@property (nonatomic, retain) AlbumsDatasource *albumsDatasource;
@property (nonatomic, retain) BooksDatasource *booksDatasource;

- (void) display;
- (void) didFinishLoading:(DAAPResponse *)response;
- (void) changeToArtistView;
- (void) changeToAlbumView;
- (void) changeToTrackView;
- (void) changeToBookView;

@end
