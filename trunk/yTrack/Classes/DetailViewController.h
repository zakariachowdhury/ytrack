//
//  DetailViewController.h
//  yTrack
//
//  Created by Fabrice Dewasmes on 19/05/10.
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

#import <UIKit/UIKit.h>
#import "DAAPRequestReply.h"
#import "ArtistDatasource.h"
#import "TrackCustomCellClass.h"
#import "DAAPDatasource.h"
#import "TracksDatasource.h"
#import "PodcastsBooksDatasource.h"
#import "AlbumsDatasource.h"
#import "PlaylistDatasource.h"

@protocol DetailDelegate

- (void) didSelectItem;
- (void) startLoading;
- (void) didFinishLoading;

@end


@interface DetailViewController : UITableViewController <DAAPRequestDelegate, DAAPDatasourceDelegate> {
	NSArray *results;
	NSArray *indexList;
	NSMutableArray *arrayOfCharacters;
	ArtistDatasource *artistDatasource;
	TracksDatasource *tracksDatasource;
	PodcastsBooksDatasource *booksDatasource;
	PodcastsBooksDatasource *podcastsDatasource;
	AlbumsDatasource *albumsDatasource;
	PlaylistDatasource *playlistDatasource;
	id<DetailDelegate> delegate;
}

@property (nonatomic, retain) NSArray *results;
@property (nonatomic, retain) NSArray *indexList;
@property (nonatomic, assign) id<DetailDelegate> delegate;
@property (nonatomic, retain) ArtistDatasource *artistDatasource;
@property (nonatomic, retain) TracksDatasource *tracksDatasource;
@property (nonatomic, retain) AlbumsDatasource *albumsDatasource;
@property (nonatomic, retain) PodcastsBooksDatasource *booksDatasource;
@property (nonatomic, retain) PodcastsBooksDatasource *podcastsDatasource;
@property (nonatomic, retain) PlaylistDatasource *playlistDatasource;

- (void) display;
- (void) didFinishLoading:(DAAPResponse *)response;
- (void) changeToArtistView;
- (void) changeToAlbumView;
- (void) changeToTrackView;
- (void) changeToBookView;
- (void) changeToPodcastView;
- (void) didChangeLibrary;
- (void) changeToPlaylistView:(int)playlistId persistentId:(long long)persistentId;
- (void) cancelPendingConnections;

@end
