//
//  PreferencesManager.h
//  yTrack
//
//  Created by Fabrice Dewasmes on 23/05/10.
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

#import <Foundation/Foundation.h>
#import "FDServer.h"

#define kPrefLibrarykey @"libraries"
#define kPrefLastUsedLibrary @"lastUsedLib"
#define kPrefLastSelectedSegControl @"segControl"

#define kPrefLastSelectedSegControlTrack @"track"
#define kPrefLastSelectedSegControlArtist @"artist"
#define kPrefLastSelectedSegControlAlbum @"album"
#define kPrefVolumeControlEnabled @"volumeControl"

#define kPrefVersion @"version"

@interface PreferencesManager : NSObject {
	NSMutableDictionary *preferences;
	NSString *prefPath;
	
}

@property (nonatomic, retain) NSMutableDictionary *preferences;
@property (nonatomic, copy) NSString *prefPath;


+ (id) sharedPreferencesManager;

- (void) loadPreferencesFromFile;
- (NSArray *) getAllStoredServers;
- (FDServer *) lastUsedServer;
- (void) persistPreferences;
- (void) addServer:(FDServer *) newServer;
- (void) deleteServerAtIndex:(int)index;
- (void) setVolumeControl:(BOOL)volumeControlEnabled;
- (BOOL) volumeControl;
- (void) saveViewState:(NSString *)state withKey:(NSString *)key;
- (NSString *) getViewStateForKey:(NSString *)key;
- (void) checkAndMigrate;


@end
