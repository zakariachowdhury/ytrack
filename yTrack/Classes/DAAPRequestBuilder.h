//
//  DAAPRequestBuilder.h
//  yTrack
//
//  Created by Fabrice Dewasmes on 30/06/11.
//  Copyright 2011 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>

// COMMANDS
extern NSString const * kDAAPLoginCommand;
extern NSString const * kDAAPLogoutCommand;
extern NSString const * kDAAPContentCodesCommand;
extern NSString const * kDAAPServerInfoCommand;
extern NSString const * kDAAPDatabasesCommand;
extern NSString const * kDACPControlCommand;
extern NSString const * kDAAPContainersSubCommand;

// METADATAS
extern NSString const * kDMAPitemId;
extern NSString const * kDMAPitemName;
extern NSString const * kDMAPitemKind;
extern NSString const * kDMAPpersistentId;
extern NSString const * kDMAPcontainer;
extern NSString const * kDMAPcontainerIdemId;
extern NSString const * kDMAPparentContainerId;
extern NSString const * kDMAPstatus;
extern NSString const * kDMAPstatusString;
extern NSString const * kDMAPitemCount;
extern NSString const * kDMAPcontainerCount;
extern NSString const * kDMAPreturnedCount;
extern NSString const * kDMAPspecifiedTotalCount;
extern NSString const * kDMAPhasChildContainers;
extern NSString const * kDMAPlisting;
extern NSString const * kDMAPlistingItem;
extern NSString const * kDMAPbag;
extern NSString const * kDMAPdictionary;
extern NSString const * kDMAPserverInfoResponse;
extern NSString const * kDMAPauthenticationMethod;
extern NSString const * kDMAPauthenticationSchemes;
extern NSString const * kDMAPloginRequired;
extern NSString const * kDMAPprotocolVersion;
extern NSString const * kDMAPsupportsAutolayout;
extern NSString const * kDMAPsupportsUpdate;
extern NSString const * kDMAPsupportsPersistentIds;
extern NSString const * kDMAPsupportsExtensions;
extern NSString const * kDMAPsupportsBrowse;
extern NSString const * kDMAPsupportsQuery;
extern NSString const * kDMAPsupportsIndex;
extern NSString const * kDMAPsupportsResolve;
extern NSString const * kDMAPtimeoutInterval;
extern NSString const * kDMAPdatabasesCount;
extern NSString const * kDMAPUTCTime;
extern NSString const * kDMAPUTCOffset;
extern NSString const * kDMAPloginResponse;
extern NSString const * kDMAPsessionId;
extern NSString const * kDMAPupdateResponse;
extern NSString const * kDMAPserverRevision;
extern NSString const * kDMAPupdateType;
extern NSString const * kDMAPdeletedId;
extern NSString const * kDMAPcontentCodesResponse;
extern NSString const * kDMAPcontentCodesNumber;
extern NSString const * kDMAPcontentCodesName;
extern NSString const * kDMAPcontentCodesType;
extern NSString const * kDMAPeditCommandsSupported;


extern NSString const * kDAAPsupportsExtraData;
extern NSString const * kDAAPprotocolVersion;
extern NSString const * kDAAPserverDatabases;
extern NSString const * kDAAPdatabaseBrowse;
extern NSString const * kDAAPdatabaseSongs;
extern NSString const * kDAAPdatabasePlaylists;
extern NSString const * kDAAPplayslistSongs;
extern NSString const * kDAAPresolve;
extern NSString const * kDAAPresolveInfo;
extern NSString const * kDAAPbrowseAlbumListing;
extern NSString const * kDAAPbrowseArtistListing;
extern NSString const * kDAAPbrowseComposerListing;
extern NSString const * kDAAPbrowseGenreListing;
extern NSString const * kDAAPisPodcastPlaylist;
extern NSString const * kDAAPsongAlbum;
extern NSString const * kDAAPsongArtist;
extern NSString const * kDAAPsongBitRate;
extern NSString const * kDAAPsongComment;
extern NSString const * kDAAPsongCompilation;
extern NSString const * kDAAPsongComposer;
extern NSString const * kDAAPsongDateAdded;
extern NSString const * kDAAPsongDateModified;
extern NSString const * kDAAPsongDiscount;
extern NSString const * kDAAPsongDiscNumber;
extern NSString const * kDAAPsongEqPreset;
extern NSString const * kDAAPsongGenre;
extern NSString const * kDAAPsongDescription;
extern NSString const * kDAAPsongRelativeVolume;
extern NSString const * kDAAPsongSampleRate;
extern NSString const * kDAAPsongSize;
extern NSString const * kDAAPsongStartTime;
extern NSString const * kDAAPsongStopTime;
extern NSString const * kDAAPsongTime;
extern NSString const * kDAAPsongTrackCount;
extern NSString const * kDAAPsongtrackNumber;
extern NSString const * kDAAPsongUserRating;
extern NSString const * kDAAPsongYear;
extern NSString const * kDAAPsongFormat;
extern NSString const * kDAAPsongDisabled;
extern NSString const * kDAAPsongDataKind;
extern NSString const * kDAAPsongDataURL;
extern NSString const * kDAAPsongBeatsPerMinute;
extern NSString const * kDAAPbasePlaylist;
extern NSString const * kDAAPsongGrouping;
extern NSString const * kDAAPsongCodecType;
extern NSString const * kDAAPsongCodecSubtype;
extern NSString const * kDAAPplaylistShuffleMode;
extern NSString const * kDAAPplaylistRepeatMode;
extern NSString const * kDAAPsongCategory;
extern NSString const * kDAAPsongContentDescription;
extern NSString const * kDAAPsongLongContentDescription;
extern NSString const * kDAAPsongKeywords;
extern NSString const * kDAAPsongContentRating;
extern NSString const * kDAAPsongGapless;
extern NSString const * kDAAPsongExtraData;
extern NSString const * kDAAPsongDateReleased;
extern NSString const * kDAAPsongDatePurchased;
extern NSString const * kDAAPsongHasBeenPlayed;
extern NSString const * kDAAPsortName;
extern NSString const * kDAAPsortArtist;
extern NSString const * kDAAPsortAlbumArtist;
extern NSString const * kDAAPsortAlbum;
extern NSString const * kDAAPsortComposer;
extern NSString const * kDAAPsortSeriesName;
extern NSString const * kDAAPbookmarkable;
extern NSString const * kDAAPsongBookmark;
extern NSString const * kDAAPsongPodcastURL;
extern NSString const * kDAAPsongAlbumID;
extern NSString const * kDAAPsongLongSize;
extern NSString const * kDAAPsongAlbumArtist;

// iTunes specifics
extern NSString const * kITunesNormalizedVolume;
extern NSString const * kITunesSmartPlaylist;
extern NSString const * kITunesMusicStoreSongId;
extern NSString const * kITunesMusicStoreArtistId;
extern NSString const * kITunesMusicStorePlaylistId;
extern NSString const * kITunesMusicStoreComposerId;
extern NSString const * kITunesMusicStoreGenreId;
extern NSString const * kITunesMusicStoreFrontId;
extern NSString const * kITunesIsPodcast;
extern NSString const * kITunesHasVideo;
extern NSString const * kITunesMediaKind;
extern NSString const * kITunesSeriesNames;
extern NSString const * kITunesNetworkName;
extern NSString const * kITunesEpisodeNumberStr;
extern NSString const * kITunesEpisodeSort;
extern NSString const * kITunesSeasonNumber;
extern NSString const * kITunesGaplessHeur;
extern NSString const * kITunesGaplessEncDR;
extern NSString const * kITunesGaplessDuration;
extern NSString const * kITunesGaplessResy;
extern NSString const * kITunesGaplessEncDel;
extern NSString const * kITunesGaplessReqFPlay;
extern NSString const * kITunesSpecialPlaylist;
extern NSString const * kITunesContentRating;
extern NSString const * kITunesSavedGenius;
extern NSString const * kITunesIsHDVideo;
extern NSString const * kITunesStorePersistentId;
extern NSString const * kITunesDRMUserId;
extern NSString const * kITunesNonDRMUserId;
extern NSString const * kITunesDRMKey1;
extern NSString const * kITunesDRMKey2;
extern NSString const * kITunesDRMVersions;
extern NSString const * kITunesDRMPlatformId;
extern NSString const * kITunesXId;
extern NSString const * kITunesExtendedMediaKind;
extern NSString const * kITunesAdamIdsArray;
extern NSString const * kITunesMusicSharingVersion;

// jukebox specifics
extern NSString const * kITunesJukeboxVote;
extern NSString const * kITunesJukeboxClientVote;
extern NSString const * kITunesJukeboxScore;
extern NSString const * kITunesJukeboxCurrent;

//m
//extern NSString const * kTOTO = @"";

//h
//extern NSString const * kTOTO; 

@interface DAAPRequestBuilder : NSObject {
    int sessionId;
    NSInteger databaseId;

@private
	NSString *_host;
	NSString *_port;
    NSDictionary *_codes;
}

@property (nonatomic) int sessionId;
@property (nonatomic) NSInteger databaseId;

// designated initializer
- (id)initWithHost:(NSString *)host port:(NSString *)port andSessionId:(int)theSessionId;

// ---------------------------------
// DAAP commands
// ---------------------------------
- (NSURL *)createLoginRequestWithPairingGUID:(NSString *)GUID;
- (NSURL *)createLogoutRequest;
- (NSURL *)createDBRequest;
// containers, groups and items are queried on the database
- (NSURL *)createContainerRequestWithMeta:(NSArray *)metas;
- (NSURL *)createGroupRequest;
- (NSURL *)createItemsRequest;
- (NSURL *)createUpdateRequest;

// DACP commands
- (NSURL *)createQuery;



@end
