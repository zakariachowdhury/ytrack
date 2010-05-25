//
//  PreferencesManager.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 23/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>

#define kPrefLibrarykey @"libraries"

@interface PreferencesManager : NSObject {
	NSMutableDictionary *preferences;
	NSString *prefPath;
	
}

@property (nonatomic, retain) NSMutableDictionary *preferences;
@property (nonatomic, copy) NSString *prefPath;


+ (id) sharedPreferencesManager;

- (void) loadPreferencesFromFile;
- (NSArray *) getAllLibraries;
- (NSDictionary *) getLastUsedLibrary;
- (void) persistPreferences;
- (void) addLibrary:(NSDictionary *) lib;



@end
