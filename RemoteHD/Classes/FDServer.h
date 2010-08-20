//
//  FDServer.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 25/05/10.
//  Copyright 2010 Fabrice Dewasmes. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "DAAPRequestReply.h"
#import "DAAPRequest.h"
#import "DAAPResponseapso.h"
#import "DAAPResponsecmst.h"
#import "DAAPResponseagal.h"
#import "AsyncImageLoader.h"
#import "Reachability.h"

#define kLibraryServicenameKey @"servicename"
#define kLibraryPairingGUIDKey @"pairingGUID"
#define kLibraryHostKey @"host"
#define kLibraryPortKey @"port"
#define kLibraryTXTKey @"TXT"

#define kServerPodcastsLibraryAEPS 1
#define kServerITunesDJLibraryAEPS 2
#define kServerMoviesLibraryAEPS 4
#define kServerTVShowsLibraryAEPS 5
#define kServerMusicLibraryAEPS 6
#define kServerBooksLibraryAEPS 7
#define kServerPurchasedLibraryAEPS 8
#define kServerPurchasedOnDeviceLibraryAEPS 9
#define kServerGeniusLibraryAEPS 12
#define kServerITunesULibraryAEPS 13
#define kServerGeniusMixesLibraryAEPS 15
#define kServerGeniusMixLibraryAEPS 16

@protocol FDServerDelegate

@optional
- (void) didFindSpeakers:(NSArray *)speakers;

@end


@interface FDServer : NSObject <DAAPRequestDelegate> {
	NSString *host;
	NSString *port;
	NSString *pairingGUID;
	NSString *servicename;
	NSDictionary *TXT;
	int sessionId;
	NSInteger databaseId;
	long long databasePersistentId;
	NSInteger musicLibraryId;
	NSInteger podcastsLibraryId;
	long long podcastsPersistentId;
	NSInteger booksLibraryId;
	long long booksPersistentId;
	int musr;
	long revNum;
	BOOL connected;
	NSString *currentTrack;
	NSString *currentAlbum;
	NSString *currentArtist;
	NSNumber *currentAlbumId;
	DAAPRequestReply *daapReqRep;
	
	@private
	NSMutableArray *userPlaylists;
	Reachability *r;
}

@property (nonatomic, copy) NSString *host;
@property (nonatomic, copy) NSString *port;
@property (nonatomic, copy) NSString *pairingGUID;
@property (nonatomic, copy) NSString *servicename;
@property (nonatomic, retain) NSDictionary *TXT;
@property (nonatomic) int sessionId;
@property (nonatomic) NSInteger databaseId;
@property (nonatomic) NSInteger musicLibraryId;
@property (nonatomic) NSInteger podcastsLibraryId;
@property (nonatomic) NSInteger booksLibraryId;
@property (nonatomic, readonly) long long booksPersistentId;
@property (nonatomic, readonly) long long podcastsPersistentId;
@property (nonatomic, retain) DAAPRequestReply *daapReqRep;
@property (nonatomic, retain) Reachability *r;

@property (nonatomic) BOOL connected;
@property (nonatomic, copy) NSString *currentTrack;
@property (nonatomic, copy) NSString *currentAlbum;
@property (nonatomic, copy) NSString *currentArtist;
@property (nonatomic, retain) NSNumber *currentAlbumId;



- (id) initWithHost:(NSString *)theHost port:(NSString *)thePort pairingGUID:(NSString *)thePairingGUID serviceName:(NSString *)serviceName TXT:(NSDictionary *)theTXT;
- (id) initWithDictionary:(NSDictionary *)dict;
- (BOOL) open;
- (void) logout;

- (NSArray *) getPlayLists;
- (void) getArtists:(id<DAAPRequestDelegate>)aDelegate;
- (DAAPResponseagal *) getAlbumsForArtist:(NSString *)artist;
- (DAAPResponseapso *) getTracksForAlbum:(NSNumber *)albumId;
- (void) getTracksForAlbum:(NSNumber *)albumId delegate:(id<DAAPRequestDelegate>)aDelegate;
- (DAAPResponseapso *) getTracksForPodcast:(NSString *)podcastId;
- (DAAPResponseapso *) getAllTracksForArtist:(NSString *)artist;
- (void) getAllTracksForPlaylist:(int)playlistId delegate:(id<DAAPRequestDelegate>)aDelegate;
- (AsyncImageLoader *) getArtwork:(NSNumber *)albumId delegate:(id<AsyncImageLoaderDelegate>)aDelegate forAlbum:(BOOL)forAlbum;
- (AsyncImageLoader *) getArtwork:(NSNumber *)albumId size:(int)aSize delegate:(id<AsyncImageLoaderDelegate>)aDelegate forAlbum:(BOOL)forAlbum;
- (void) getAllAlbums:(id<DAAPRequestDelegate>)aDelegate;
- (void) getAllTracks:(id<DAAPRequestDelegate>)aDelegate;
- (void) getAllBooks:(id<DAAPRequestDelegate>)aDelegate;
- (void) getAllPodcasts:(id<DAAPRequestDelegate>)aDelegate;
- (void) playSongInLibrary:(int)songId;
- (void) playSongInPlaylist:(long long)containermper song:(long)songId;
- (void) playBookInLibrary:(int)bookId;
- (void) playSongIndex:(int)songIndex inAlbum:(NSNumber *)albumId;
- (void) playAllTracksForArtist:(NSString *)artist index:(int)songIndex;
- (void) playPreviousItem;
- (void) playNextItem;
- (void) playPause;
- (void) monitorPlayStatus;
- (void) updateStatus;
//- (long) getVolume;
- (void) getVolume:(id<DAAPRequestDelegate>)aDelegate action:(SEL)action;
- (void) setVolume:(long) volume;
- (void) changePlayingTime:(int)position;
- (NSArray *) getSpeakers;
- (void) getSpeakers:(id<DAAPRequestDelegate>)aDelegate;
- (void) setSpeakers:(NSArray *)speakers;
- (NSDictionary *) getAsDictionary;


- (void) getServerInfo;
- (void) connectionTimedOut;


@end