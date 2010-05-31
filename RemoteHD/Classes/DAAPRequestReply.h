//
//  DAAPRequestReply.h
//  BonjourWeb
//
//  Created by Fabrice Dewasmes on 15/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "DAAPResponse.h"

#define kRequestContentCodes @"http://%@:%@/content-codes"
#define kRequestLogin @"http://%@:%@/login?pairing-guid=0x%@"
#define kRequestServerInfo @"http://%@:%@/server-info"
#define kRequestDatabases @"http://%@:%@/databases?session-id=%d"
#define kRequestControl @"http://%@:%@/crtl-int"
#define kRequestPlayStatusUpdate @"http://%@:%@/ctrl-int/1/playstatusupdate?revision-number=1&session-id=%d"
#define kRequestPropertyVolume @"http://%@:%@/ctrl-int/1/getproperty?properties=dmcp.volume&session-id=%d"
#define kRequestPlayLists @"http://%@:%@/databases/%d/containers?session-id=%d&meta=dmap.itemname,dmap.itemcount,dmap.itemid,dmap.persistentid,daap.baseplaylist,com.apple.itunes.special-playlist,com.apple.itunes.smart-playlist,com.apple.itunes.saved-genius,dmap.parentcontainerid,dmap.editcommandssupported,com.apple.itunes.jukeboxcurrent,daap.songcontentdescription"
#define kRequestGetSpeakers @"http://%@:%@/ctrl-int/1/getspeakers?session-id=%d"
#define kRequestAlbumList @"http://%@:%@/databases/%d/containers/8015/items?session-id=%d&meta=dmap.itemname,dmap.itemid,daap.songartist,daap.songalbum,dmap.containeritemid,daap.songuserrating,daap.songtime&type=music&sort=album&query='daap.songalbumid:12420311323912340483'"
#define kRequestUpdate @"http://%@:%@/update?session-id=%d&revision-number=%d"
#define kRequestSetSpeakers @"http://%@%:@/ctrl-int/1/setspeakers?speaker-id=0,0x%qX&session-id=%d"
#define kRequestAllTracks @"http://%@:%@/databases/%d/containers/%d/items?session-id=%d&meta=dmap.itemname,dmap.itemid,daap.songartist,daap.songalbum,dmap.containeritemid&type=music&sort=name&include-sort-headers=1&query=('com.apple.itunes.mediakind:1','com.apple.itunes.mediakind:32')"
#define kRequestPlaySongInLibrary @"http://%@:%@/ctrl-int/1/cue?command=play&query=('com.apple.itunes.mediakind:1','com.apple.itunes.mediakind:32')&index=%d&sort=name&session-id=%d"
#define kRequestStopPlaying @"http://%@:%@/ctrl-int/1/cue?command=clear&session-id=%d"
#define kRequestNowPlayingArtwork @"http://%@:%@/ctrl-int/1/nowplayingartwork?mw=211&mh=211&session-id=%d"

@interface DAAPRequestReply : NSObject {

}

+ (NSString *) parseString:(NSData *) data;

+ (DAAPResponse *) searchAndParseResponse:(NSURL *) url;
+ (void) parseSearchResponse:(NSData *) data handle:(int)handle resp:(NSMutableDictionary *)dict;

+ (void) request:(NSURL *) url ;

+ (NSString *) parseCommandName:(NSData *) data atPosition:(int)position;
+ (DAAPResponse *) onTheFlyRequestAndParseResponse:(NSURL *) url ;

@end
