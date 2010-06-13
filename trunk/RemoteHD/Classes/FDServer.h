//
//  FDServer.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 25/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "DAAPRequestReply.h"
#import "DAAPRequest.h"
#import "DAAPResponseapso.h"
#import "DAAPResponsecmst.h"
#import "DAAPResponseagal.h"
#import "AsyncImageLoader.h"

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

- (void) statusUpdate:(DAAPResponsecmst *)cmst;
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
	NSInteger musicLibraryId;
//	id<FDServerDelegate> delegate;
	int musr;
	long revNum;
	BOOL connected;
	NSString *currentTrack;
	NSString *currentAlbum;
	NSString *currentArtist;
}

@property (nonatomic, copy) NSString *host;
@property (nonatomic, copy) NSString *port;
@property (nonatomic, copy) NSString *pairingGUID;
@property (nonatomic, copy) NSString *servicename;
@property (nonatomic, retain) NSDictionary *TXT;
@property (nonatomic) int sessionId;
@property (nonatomic) NSInteger databaseId;
@property (nonatomic) NSInteger musicLibraryId;
//@property (nonatomic, assign) id<FDServerDelegate> delegate;

@property (nonatomic) BOOL connected;
@property (nonatomic, copy) NSString *currentTrack;
@property (nonatomic, copy) NSString *currentAlbum;
@property (nonatomic, copy) NSString *currentArtist;



- (id) initWithHost:(NSString *)theHost port:(NSString *)thePort pairingGUID:(NSString *)thePairingGUID serviceName:(NSString *)serviceName TXT:(NSDictionary *)theTXT;
- (id) initWithDictionary:(NSDictionary *)dict;
- (void) open;

- (NSArray *) getPlayLists;
- (NSArray *) getArtists;
- (DAAPResponseagal *) getAlbumsForArtist:(NSString *)artist;
- (DAAPResponseapso *) getTracksForAlbum:(NSString *)albumId;
- (DAAPResponseapso *) getAllTracksForArtist:(NSString *)artist;
- (void) getAlbumArtwork:(NSNumber *)albumId delegate:(id<AsyncImageLoaderDelegate>)aDelegate;
- (void) getAllTracks:(id<DAAPRequestDelegate>)aDelegate;
- (void) playSongInLibrary:(int)songId;
- (void) playPreviousItem;
- (void) playNextItem;
- (void) playPause;
- (void) monitorPlayStatus;
- (void) updateStatus;
- (long) getVolume;
- (void) setVolume:(long) volume;
- (NSArray *) getSpeakers;
- (void) setSpeakers:(NSArray *)speakers;
- (NSDictionary *) getAsDictionary;


+ (void) getServerInfoForHost:(NSString *)host atPort:(NSString *)port;
- (void) connectionTimedOut;


@end
