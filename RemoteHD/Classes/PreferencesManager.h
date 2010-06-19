//
//  PreferencesManager.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 23/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "FDServer.h"

#define kPrefLibrarykey @"libraries"
#define kPrefLastUsedLibrary @"lastUsedLib"

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



@end
