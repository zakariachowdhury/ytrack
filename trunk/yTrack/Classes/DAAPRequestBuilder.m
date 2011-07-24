//
//  DAAPRequestBuilder.m
//  yTrack
//
//  Created by Fabrice Dewasmes on 30/06/11.
//  Copyright 2011 __MyCompanyName__. All rights reserved.
//

#import "DAAPRequestBuilder.h"
#import "NSURL+parameters.h"

@interface DAAPRequestBuilder()
- (NSURL *)_createBaseURL;
- (NSURL *)_createControlRequest;
- (NSURL *)_createDAAPCommand:(NSString const *)command;
- (NSURL *)_createDACPSubCommand:(NSString const *)subCommand;
- (NSURL *)_createDAAPContainerRequest:(int) containerId;

@property (nonatomic, copy, readwrite) NSString *host;
@property (nonatomic, copy, readwrite) NSString *port;
@property (nonatomic, retain) NSDictionary *codes;
@end

@implementation DAAPRequestBuilder

// COMMANDS
NSString const * kDAAPLoginCommand = @"login";
NSString const * kDAAPLogoutCommand = @"logout";
NSString const * kDAAPUpdateCommand = @"update";
NSString const * kDAAPContentCodesCommand = @"content-codes";
NSString const * kDAAPServerInfoCommand = @"server-info";
NSString const * kDAAPDatabasesCommand = @"databases";
NSString const * kDAAPContainersSubCommand = @"containers";
NSString const * kDACPControlCommand = @"crtl-int";
NSString const * kDACPStatusSubCommand = @"playstatusUpdate";

// COMMANDS PARAMS
NSString const * kDAAPParamSessionId = @"session-id";
NSString const * kDAAPParamRevisionNum = @"revision-number";

// METADATAS
NSString const * kDMAPitemId = @"dmap.itemid";
NSString const * kDMAPitemName = @"dmap.itemname";
NSString const * kDMAPitemKind = @"dmap.itemkind";
NSString const * kDMAPpersistentId = @"dmap.persistentid";
NSString const * kDMAPcontainer = @"dmap.container";
NSString const * kDMAPcontainerIdemId = @"dmap.containeritemid";
NSString const * kDMAPparentContainerId = @"dmap.parentcontainerid";
NSString const * kDMAPstatus = @"dmap.status";
NSString const * kDMAPstatusString = @"dmap.statusstring";
NSString const * kDMAPitemCount = @"dmap.itemcount";
NSString const * kDMAPcontainerCount = @"dmap.containercount";
NSString const * kDMAPreturnedCount = @"dmap.returnedcount";
NSString const * kDMAPspecifiedTotalCount = @"dmap.specifiedtotalcount";
NSString const * kDMAPhasChildContainers = @"dmap.haschildcontainers";
NSString const * kDMAPlisting = @"dmap.listing";
NSString const * kDMAPlistingItem = @"dmap.listingitem";
NSString const * kDMAPbag = @"dmap.bag";
NSString const * kDMAPdictionary = @"dmap.dictionary";
NSString const * kDMAPserverInfoResponse = @"dmap.serverinforesponse";
NSString const * kDMAPauthenticationMethod = @"dmap.authenticationmethod";
NSString const * kDMAPauthenticationSchemes = @"dmap.authenticationschemes";
NSString const * kDMAPloginRequired = @"dmap.loginrequired";
NSString const * kDMAPprotocolVersion = @"dmap.protocolversion";
NSString const * kDMAPsupportsAutolayout = @"dmap.supportsautologout";
NSString const * kDMAPsupportsUpdate = @"dmap.supportsupdate";
NSString const * kDMAPsupportsPersistentIds = @"dmap.supportspersistentids";
NSString const * kDMAPsupportsExtensions = @"dmap.supportsextensions";
NSString const * kDMAPsupportsBrowse = @"dmap.supportsbrowse";
NSString const * kDMAPsupportsQuery = @"dmap.supportsquery";
NSString const * kDMAPsupportsIndex = @"dmap.supportsindex";
NSString const * kDMAPsupportsResolve = @"dmap.supportsresolve";
NSString const * kDMAPtimeoutInterval = @"dmap.timeoutinterval";
NSString const * kDMAPdatabasesCount = @"dmap.databasescount";
NSString const * kDMAPUTCTime = @"dmap.utctime";
NSString const * kDMAPUTCOffset = @"dmap.utcoffset";
NSString const * kDMAPloginResponse = @"dmap.loginresponse";
NSString const * kDMAPsessionId = @"dmap.sessionid";
NSString const * kDMAPupdateResponse = @"dmap.updateresponse";
NSString const * kDMAPserverRevision = @"dmap.serverrevision";
NSString const * kDMAPupdateType = @"dmap.updatetype";
NSString const * kDMAPdeletedId = @"dmap.deletedid";
NSString const * kDMAPcontentCodesResponse = @"dmap.contentcodesresponse";
NSString const * kDMAPcontentCodesNumber = @"dmap.contentcodesnumber";
NSString const * kDMAPcontentCodesName = @"dmap.contentcodesname";
NSString const * kDMAPcontentCodesType = @"dmap.contentcodestype";
NSString const * kDMAPeditCommandsSupported = @"dmap.editcommandssupported";


NSString const * kDAAPsupportsExtraData = @"daap.supportsextradata";
NSString const * kDAAPprotocolVersion = @"daap.protocolversion";
NSString const * kDAAPserverDatabases = @"daap.serverdatabases";
NSString const * kDAAPdatabaseBrowse = @"daap.databasebrowse";
NSString const * kDAAPdatabaseSongs = @"daap.databasesongs";
NSString const * kDAAPdatabasePlaylists = @"daap.databaseplaylists";
NSString const * kDAAPplayslistSongs = @"daap.playlistsongs";
NSString const * kDAAPresolve = @"daap.resolve";
NSString const * kDAAPresolveInfo = @"daap.resolveinfo";
NSString const * kDAAPbrowseAlbumListing = @"daap.browsealbumlisting";
NSString const * kDAAPbrowseArtistListing = @"daap.browseartistlisting";
NSString const * kDAAPbrowseComposerListing = @"daap.browsecomposerlisting";
NSString const * kDAAPbrowseGenreListing = @"daap.browsegenrelisting";
NSString const * kDAAPisPodcastPlaylist = @"com.apple.itunes.is-podcast-playlist";
NSString const * kDAAPsongAlbum = @"daap.songalbum";
NSString const * kDAAPsongArtist = @"daap.songartist";
NSString const * kDAAPsongBitRate = @"daap.songbitrate";
NSString const * kDAAPsongComment = @"daap.songcomment";
NSString const * kDAAPsongCompilation = @"daap.songcompilation";
NSString const * kDAAPsongComposer = @"daap.songcomposer";
NSString const * kDAAPsongDateAdded = @"daap.songdateadded";
NSString const * kDAAPsongDateModified = @"daap.songdatemodified";
NSString const * kDAAPsongDiscount = @"daap.songdisccount";
NSString const * kDAAPsongDiscNumber = @"daap.songdiscnumber";
NSString const * kDAAPsongEqPreset = @"daap.songeqpreset";
NSString const * kDAAPsongGenre = @"daap.songgenre";
NSString const * kDAAPsongDescription = @"daap.songdescription";
NSString const * kDAAPsongRelativeVolume = @"daap.songrelativevolume";
NSString const * kDAAPsongSampleRate = @"daap.songsamplerate";
NSString const * kDAAPsongSize = @"daap.songsize";
NSString const * kDAAPsongStartTime = @"daap.songstarttime";
NSString const * kDAAPsongStopTime = @"daap.songstoptime";
NSString const * kDAAPsongTime = @"daap.songtime";
NSString const * kDAAPsongTrackCount = @"daap.songtrackcount";
NSString const * kDAAPsongtrackNumber = @"daap.songtracknumber";
NSString const * kDAAPsongUserRating = @"daap.songuserrating";
NSString const * kDAAPsongYear = @"daap.songyear";
NSString const * kDAAPsongFormat = @"daap.songformat";
NSString const * kDAAPsongDisabled = @"daap.songdisabled";
NSString const * kDAAPsongDataKind = @"daap.songdatakind";
NSString const * kDAAPsongDataURL = @"daap.songdataurl";
NSString const * kDAAPsongBeatsPerMinute = @"daap.songbeatsperminute";
NSString const * kDAAPbasePlaylist = @"daap.baseplaylist";
NSString const * kDAAPsongGrouping = @"daap.songgrouping";
NSString const * kDAAPsongCodecType = @"daap.songcodectype";
NSString const * kDAAPsongCodecSubtype = @"daap.songcodecsubtype";
NSString const * kDAAPplaylistShuffleMode = @"daap.playlistshufflemode";
NSString const * kDAAPplaylistRepeatMode = @"daap.playlistrepeatmode";
NSString const * kDAAPsongCategory = @"daap.songcategory";
NSString const * kDAAPsongContentDescription = @"daap.songcontentdescription";
NSString const * kDAAPsongLongContentDescription = @"daap.songlongcontentdescription";
NSString const * kDAAPsongKeywords = @"daap.songkeywords";
NSString const * kDAAPsongContentRating = @"daap.songcontentrating";
NSString const * kDAAPsongGapless = @"daap.songgapless";
NSString const * kDAAPsongExtraData = @"daap.songextradata";
NSString const * kDAAPsongDateReleased = @"daap.songdatereleased";
NSString const * kDAAPsongDatePurchased = @"daap.songdatepurchased";
NSString const * kDAAPsongHasBeenPlayed = @"daap.songhasbeenplayed";
NSString const * kDAAPsortName = @"daap.sortname";
NSString const * kDAAPsortArtist = @"daap.sortartist";
NSString const * kDAAPsortAlbumArtist = @"daap.sortalbumartist";
NSString const * kDAAPsortAlbum = @"daap.sortalbum";
NSString const * kDAAPsortComposer = @"daap.sortcomposer";
NSString const * kDAAPsortSeriesName = @"daap.sortseriesname";
NSString const * kDAAPbookmarkable = @"daap.bookmarkable";
NSString const * kDAAPsongBookmark = @"daap.songbookmark";
NSString const * kDAAPsongPodcastURL = @"daap.songpodcasturl";
NSString const * kDAAPsongAlbumID = @"daap.songalbumid";
NSString const * kDAAPsongLongSize = @"daap.songlongsize";
NSString const * kDAAPsongAlbumArtist = @"daap.songalbumartist";

// iTunes specifics
NSString const * kITunesNormalizedVolume = @"com.apple.itunes.norm-volume";
NSString const * kITunesSmartPlaylist = @"com.apple.itunes.smart-playlist";
NSString const * kITunesMusicStoreSongId = @"com.apple.itunes.itms-songid";
NSString const * kITunesMusicStoreArtistId = @"com.apple.itunes.itms-artistid";
NSString const * kITunesMusicStorePlaylistId = @"com.apple.itunes.itms-playlistid";
NSString const * kITunesMusicStoreComposerId = @"com.apple.itunes.itms-composerid";
NSString const * kITunesMusicStoreGenreId = @"com.apple.itunes.itms-genreid";
NSString const * kITunesMusicStoreFrontId = @"com.apple.itunes.itms-storefrontid";
NSString const * kITunesIsPodcast = @"com.apple.itunes.is-podcast";
NSString const * kITunesHasVideo = @"com.apple.itunes.has-video";
NSString const * kITunesMediaKind = @"com.apple.itunes.mediakind";
NSString const * kITunesSeriesNames = @"com.apple.itunes.series-name";
NSString const * kITunesNetworkName = @"com.apple.itunes.network-name";
NSString const * kITunesEpisodeNumberStr = @"com.apple.itunes.episode-num-str";
NSString const * kITunesEpisodeSort = @"com.apple.itunes.episode-sort";
NSString const * kITunesSeasonNumber = @"com.apple.itunes.season-num";
NSString const * kITunesGaplessHeur = @"com.apple.itunes.gapless-heur";
NSString const * kITunesGaplessEncDR = @"com.apple.itunes.gapless-enc-dr";
NSString const * kITunesGaplessDuration = @"com.apple.itunes.gapless-dur";
NSString const * kITunesGaplessResy = @"com.apple.itunes.gapless-resy";
NSString const * kITunesGaplessEncDel = @"com.apple.itunes.gapless-enc-del";
NSString const * kITunesGaplessReqFPlay = @"com.apple.itunes.req-fplay";
NSString const * kITunesSpecialPlaylist = @"com.apple.itunes.special-playlist";
NSString const * kITunesContentRating = @"com.apple.itunes.content-rating";
NSString const * kITunesSavedGenius = @"com.apple.itunes.saved-genius";
NSString const * kITunesIsHDVideo = @"com.apple.itunes.is-hd-video";
NSString const * kITunesStorePersistentId = @"com.apple.itunes.store-pers-id";
NSString const * kITunesDRMUserId = @"com.apple.itunes.drm-user-id";
NSString const * kITunesNonDRMUserId = @"com.apple.itunes.non-drm-user-id";
NSString const * kITunesDRMKey1 = @"com.apple.itunes.drm-key1-id";
NSString const * kITunesDRMKey2 = @"com.apple.itunes.drm-key2-id";
NSString const * kITunesDRMVersions = @"com.apple.itunes.drm-versions";
NSString const * kITunesDRMPlatformId = @"com.apple.itunes.drm-platform-id";
NSString const * kITunesXId = @"com.apple.itunes.xid";
NSString const * kITunesExtendedMediaKind = @"com.apple.itunes.extended-media-kind";
NSString const * kITunesAdamIdsArray = @"com.apple.itunes.adam-ids-array";
NSString const * kITunesMusicSharingVersion = @"com.apple.itunes.music-sharing-version";

// jukebox specifics
NSString const * kITunesJukeboxVote = @"com.apple.itunes.jukebox-vote";
NSString const * kITunesJukeboxClientVote = @"com.apple.itunes.jukebox-client-vote";
NSString const * kITunesJukeboxScore = @"com.apple.itunes.jukebox-score";
NSString const * kITunesJukeboxCurrent = @"com.apple.itunes.jukebox-current";

@synthesize host = _host;
@synthesize port = _port;
@synthesize codes = _codes;
@synthesize sessionId;
@synthesize databaseId;

// designated initializer
- (id)initWithHost:(NSString *)host port:(NSString *)port andSessionId:(int)theSessionId{
    if ((self = [super init])) {
        self.host = host;
        self.port = port;
        self.sessionId = sessionId;
        self.codes = [NSDictionary dictionaryWithObjects:[NSArray arrayWithObjects:
                                                          @"miid",
                                                          @"minm",
                                                          @"mikd",
                                                          @"mper",
                                                          @"mcon",
                                                          @"mcti",
                                                          @"mpco",
                                                          @"mstt",
                                                          @"msts",
                                                          @"mimc",
                                                          @"mctc",
                                                          @"mrco",
                                                          @"mtco",
                                                          @"f?ch",
                                                          @"mlcl",
                                                          @"mlit",
                                                          @"mbcl",
                                                          @"mdcl",
                                                          @"msrv",
                                                          @"msau",
                                                          @"msas",
                                                          @"mslr",
                                                          @"mpro",
                                                          @"msal",
                                                          @"msup",
                                                          @"mspi",
                                                          @"msex",
                                                          @"msbr",
                                                          @"msqy",
                                                          @"msix",
                                                          @"msrs",
                                                          @"mstm",
                                                          @"msdc",
                                                          @"mstc",
                                                          @"msto",
                                                          @"mlog",
                                                          @"mlid",
                                                          @"mupd",
                                                          @"musr",
                                                          @"muty",
                                                          @"mudl",
                                                          @"msdc",
                                                          @"mccr",
                                                          @"mcnm",
                                                          @"mcna",
                                                          @"mcty",
                                                          @"meds",
                                                          @"ated",
                                                          @"apro",
                                                          @"avdb",
                                                          @"abro",
                                                          @"adbs",
                                                          @"aply",
                                                          @"apso",
                                                          @"arsv",
                                                          @"arif",
                                                          @"abal",
                                                          @"abar",
                                                          @"abcp",
                                                          @"abgn",
                                                          @"aePP",
                                                          @"asal",
                                                          @"asar",
                                                          @"asbr",
                                                          @"ascm",
                                                          @"asco",
                                                          @"ascp",
                                                          @"asda",
                                                          @"asdm",
                                                          @"asdc",
                                                          @"asdn",
                                                          @"aseq",
                                                          @"asgn",
                                                          @"asdt",
                                                          @"asrv",
                                                          @"assr",
                                                          @"assz",
                                                          @"asst",
                                                          @"assp",
                                                          @"astm",
                                                          @"astc",
                                                          @"astn",
                                                          @"asur",
                                                          @"asyr",
                                                          @"asfm",
                                                          @"asdb",
                                                          @"asdk",
                                                          @"asul",
                                                          @"asbt",
                                                          @"abpl",
                                                          @"agrp",
                                                          @"ascd",
                                                          @"ascs",
                                                          @"apsm",
                                                          @"aprm",
                                                          @"asct",
                                                          @"ascn",
                                                          @"aslc",
                                                          @"asky",
                                                          @"ascr",
                                                          @"asgp",
                                                          @"ased",
                                                          @"asdr",
                                                          @"asdp",
                                                          @"ashp",
                                                          @"assn",
                                                          @"assa",
                                                          @"assl",
                                                          @"assu",
                                                          @"assc",
                                                          @"asss",
                                                          @"asbk",
                                                          @"asbo",
                                                          @"aspu",
                                                          @"asai",
                                                          @"asls",
                                                          @"asaa",
                                                          @"aeNV",
                                                          @"aeSP",
                                                          @"aeSI",
                                                          @"aeAI",
                                                          @"aePI",
                                                          @"aeCI",
                                                          @"aeGI",
                                                          @"aeSF",
                                                          @"aePC",
                                                          @"aeHV",
                                                          @"aeMK",
                                                          @"aeSN",
                                                          @"aeNN",
                                                          @"aeEN",
                                                          @"aeES",
                                                          @"aeSU",
                                                          @"aeGH",
                                                          @"aeGD",
                                                          @"aeGU",
                                                          @"aeGR",
                                                          @"aeGE",
                                                          @"????",
                                                          @"aePS",
                                                          @"aeCR",
                                                          @"aeSG",
                                                          @"aeHD",
                                                          @"aeSE",
                                                          @"aeDR",
                                                          @"aeND",
                                                          @"aeK1",
                                                          @"aeK2",
                                                          @"aeDV",
                                                          @"aeDP",
                                                          @"aeXD",
                                                          @"aeMk",
                                                          @"aeAD",
                                                          @"aeSV",
                                                          @"ceJV",
                                                          @"ceJC",
                                                          @"ceJS",
                                                          @"ceJI",nil]
            forKeys:[NSArray arrayWithObjects:
                     kDMAPitemId,
                     kDMAPitemName,
                     kDMAPitemKind,
                     kDMAPpersistentId,
                     kDMAPcontainer,
                     kDMAPcontainerIdemId,
                     kDMAPparentContainerId,
                     kDMAPstatus,
                     kDMAPstatusString,
                     kDMAPitemCount,
                     kDMAPcontainerCount,
                     kDMAPreturnedCount,
                     kDMAPspecifiedTotalCount,
                     kDMAPhasChildContainers,
                     kDMAPlisting,
                     kDMAPlistingItem,
                     kDMAPbag,
                     kDMAPdictionary,
                     kDMAPserverInfoResponse,
                     kDMAPauthenticationMethod,
                     kDMAPauthenticationSchemes,
                     kDMAPloginRequired,
                     kDMAPprotocolVersion,
                     kDMAPsupportsAutolayout,
                     kDMAPsupportsUpdate,
                     kDMAPsupportsPersistentIds,
                     kDMAPsupportsExtensions,
                     kDMAPsupportsBrowse, 
                     kDMAPsupportsQuery,
                     kDMAPsupportsIndex,
                     kDMAPsupportsResolve,
                     kDMAPtimeoutInterval,
                     kDMAPdatabasesCount, 
                     kDMAPUTCTime,
                     kDMAPUTCOffset,
                     kDMAPloginResponse,
                     kDMAPsessionId,
                     kDMAPupdateResponse,
                     kDMAPserverRevision,
                     kDMAPupdateType,
                     kDMAPdeletedId,
                     kDMAPdatabasesCount,
                     kDMAPcontentCodesResponse,
                     kDMAPcontentCodesNumber,
                     kDMAPcontentCodesName,
                     kDMAPcontentCodesType,
                     kDMAPeditCommandsSupported,
                     kDAAPsupportsExtraData,
                     kDAAPprotocolVersion,
                     kDAAPserverDatabases,
                     kDAAPdatabaseBrowse,
                     kDAAPdatabaseSongs,
                     kDAAPdatabasePlaylists,
                     kDAAPplayslistSongs,
                     kDAAPresolve,
                     kDAAPresolveInfo,
                     kDAAPbrowseAlbumListing,
                     kDAAPbrowseArtistListing,
                     kDAAPbrowseComposerListing,
                     kDAAPbrowseGenreListing,
                     kDAAPisPodcastPlaylist,
                     kDAAPsongAlbum,
                     kDAAPsongArtist,
                     kDAAPsongBitRate,
                     kDAAPsongComment,
                     kDAAPsongCompilation,
                     kDAAPsongComposer,
                     kDAAPsongDateAdded,
                     kDAAPsongDateModified,
                     kDAAPsongDiscount,
                     kDAAPsongDiscNumber,
                     kDAAPsongEqPreset,
                     kDAAPsongGenre,
                     kDAAPsongDescription,
                     kDAAPsongRelativeVolume,
                     kDAAPsongSampleRate,
                     kDAAPsongSize,
                     kDAAPsongStartTime,
                     kDAAPsongStopTime,
                     kDAAPsongTime,
                     kDAAPsongTrackCount,
                     kDAAPsongtrackNumber,
                     kDAAPsongUserRating,
                     kDAAPsongYear,
                     kDAAPsongFormat,
                     kDAAPsongDisabled,
                     kDAAPsongDataKind,
                     kDAAPsongDataURL,
                     kDAAPsongBeatsPerMinute,
                     kDAAPbasePlaylist,
                     kDAAPsongGrouping,
                     kDAAPsongCodecType,
                     kDAAPsongCodecSubtype,
                     kDAAPplaylistShuffleMode,
                     kDAAPplaylistRepeatMode,
                     kDAAPsongCategory,
                     kDAAPsongContentDescription,
                     kDAAPsongLongContentDescription,
                     kDAAPsongKeywords,
                     kDAAPsongContentRating,
                     kDAAPsongGapless,
                     kDAAPsongExtraData,
                     kDAAPsongDateReleased,
                     kDAAPsongDatePurchased,
                     kDAAPsongHasBeenPlayed,
                     kDAAPsortName,
                     kDAAPsortArtist,
                     kDAAPsortAlbumArtist,
                     kDAAPsortAlbum,
                     kDAAPsortComposer,
                     kDAAPsortSeriesName,
                     kDAAPbookmarkable,
                     kDAAPsongBookmark,
                     kDAAPsongPodcastURL,
                     kDAAPsongAlbumID,
                     kDAAPsongLongSize,
                     kDAAPsongAlbumArtist,
                     kITunesNormalizedVolume,
                     kITunesSmartPlaylist,
                     kITunesMusicStoreSongId,
                     kITunesMusicStoreArtistId,
                     kITunesMusicStorePlaylistId,
                     kITunesMusicStoreComposerId,
                     kITunesMusicStoreGenreId,
                     kITunesMusicStoreFrontId,
                     kITunesIsPodcast,
                     kITunesHasVideo,
                     kITunesMediaKind,
                     kITunesSeriesNames,
                     kITunesNetworkName,
                     kITunesEpisodeNumberStr,
                     kITunesEpisodeSort,
                     kITunesSeasonNumber,
                     kITunesGaplessHeur,
                     kITunesGaplessEncDR,
                     kITunesGaplessDuration,
                     kITunesGaplessResy,
                     kITunesGaplessEncDel,
                     kITunesGaplessReqFPlay,
                     kITunesSpecialPlaylist,
                     kITunesContentRating,
                     kITunesSavedGenius,
                     kITunesIsHDVideo,
                     kITunesStorePersistentId,
                     kITunesDRMUserId,
                     kITunesNonDRMUserId,
                     kITunesDRMKey1,
                     kITunesDRMKey2,
                     kITunesDRMVersions,
                     kITunesDRMPlatformId,
                     kITunesXId,
                     kITunesExtendedMediaKind,
                     kITunesAdamIdsArray,
                     kITunesMusicSharingVersion,
                     kITunesJukeboxVote,
                     kITunesJukeboxClientVote,
                     kITunesJukeboxScore,
                     kITunesJukeboxCurrent, nil]];
    }
    return self;
}

// ---------------------------------
// DAAP commands
// ---------------------------------
- (NSURL *)createLoginRequestWithPairingGUID:(NSString *)GUID{
    NSDictionary *params = [NSDictionary dictionaryWithObject:[NSString stringWithFormat:@"0x%@",GUID] forKey:@"pairing-guid"];
    NSURL *url = [[self _createDAAPCommand:kDAAPLoginCommand] appendQuery:params];
    return url;

}
- (NSURL *)createLogoutRequest{
    return [self _createDAAPCommand:kDAAPLogoutCommand];
}
- (NSURL *)createServerInfoRequest{
    return [self _createDAAPCommand:kDAAPServerInfoCommand];
}

- (NSURL *)createContentCodesRequest{
    return [self _createDAAPCommand:kDAAPContentCodesCommand];
}

- (NSURL *)createDBRequest{
    NSDictionary *params = [NSDictionary dictionaryWithObject:[NSString stringWithFormat:@"%d", self.sessionId] forKey:kDAAPParamSessionId];
    NSURL *url = [[self _createDAAPCommand:kDAAPDatabasesCommand] appendQuery:params];
    return url;
}
// containers, groups and items are queried on the database
- (NSURL *)createContainerRequestWithMeta:(NSArray *)metas{
    NSDictionary *params = [NSDictionary dictionaryWithObjectsAndKeys:
                            [NSString stringWithFormat:@"%d", self.sessionId],kDAAPParamSessionId,
                            [metas componentsJoinedByString:@","],@"meta",
                            nil];

    return [[self _createDAAPContainerRequest:0] appendQuery:params];
}
- (NSURL *)createGroupRequestWithMeta:(NSArray *)metas{
    NSDictionary *params = [NSDictionary dictionaryWithObjectsAndKeys:
                            [NSString stringWithFormat:@"%d", self.sessionId],kDAAPParamSessionId,
                            [metas componentsJoinedByString:@","],@"meta",
                            nil];
    NSURL *baseURL = [self _createDAAPCommand:kDAAPDatabasesCommand];
    NSURL *finalURL = [[[baseURL URLByAppendingPathComponent:[NSString stringWithFormat:@"%d",databaseId]]  URLByAppendingPathComponent:@"groups"] appendQuery:params];
    return finalURL;
}
- (NSURL *)createItemsRequestWithMeta:(NSArray *)metas inContainer:(int)containerId{
    NSDictionary *params = [NSDictionary dictionaryWithObjectsAndKeys:
                            [NSString stringWithFormat:@"%d", self.sessionId],kDAAPParamSessionId,
                            [metas componentsJoinedByString:@","],@"meta",
                            nil];
    return [[[self _createDAAPContainerRequest:containerId] URLByAppendingPathComponent:@"items"] appendQuery:params];
}

- (NSURL *)createUpdateRequestWithRevisionNumber:(int)updateRevisionNumber{
    NSDictionary *params = [NSDictionary dictionaryWithObjectsAndKeys:
                            [NSString stringWithFormat:@"%d", self.sessionId],kDAAPParamSessionId,
                            [NSString stringWithFormat:@"%d", updateRevisionNumber],kDAAPParamRevisionNum,
                            nil];

    NSURL *url = [[self _createDAAPCommand:kDAAPUpdateCommand] appendQuery:params];
    return url;
}

- (NSURL *)createStatusRequestWithRevisionNumber:(int)statusRevisionNumber{
    NSDictionary *params = [NSDictionary dictionaryWithObjectsAndKeys:
                            [NSString stringWithFormat:@"%d", self.sessionId],kDAAPParamSessionId,
                            [NSString stringWithFormat:@"%d", statusRevisionNumber],kDAAPParamRevisionNum,
                            nil];
    
    NSURL *url = [[self _createDACPSubCommand:kDACPStatusSubCommand] appendQuery:params];
    return url;
}

// DACP commands
- (NSURL *)createQuery{
    return nil;
}

- (NSURL *)_createBaseURL{
    return [NSURL URLWithString:[NSString stringWithFormat:@"http://%@:%@",self.host, self.port]];
}

- (NSURL *)_createControlRequest{
    return [NSURL URLWithString:@"1" relativeToURL:
            [NSURL URLWithString:kDACPControlCommand relativeToURL:
             [self _createBaseURL]]];
}

- (NSURL *)_createDAAPCommand:(NSString const *)command{
    return [NSURL URLWithString:command relativeToURL:[self _createBaseURL]];
}

- (NSURL *)_createDACPSubCommand:(NSString const *)subCommand{
    return [NSURL URLWithString:subCommand relativeToURL:[self _createControlRequest]];
}
     
- (NSURL *)_createDAAPContainerRequest:(int) containerId{
    NSURL *baseURL = [self _createDAAPCommand:kDAAPDatabasesCommand];
    NSURL *finalURL = [[baseURL URLByAppendingPathComponent:[NSString stringWithFormat:@"%d",databaseId]] URLByAppendingPathComponent:kDAAPContainersSubCommand];
    if (containerId > 0) 
        return [finalURL URLByAppendingPathComponent:[NSString stringWithFormat:@"%d",containerId]];
    else return finalURL;
    
}
@end
