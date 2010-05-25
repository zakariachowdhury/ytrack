//
//  PreferencesManager.m
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 23/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import "PreferencesManager.h"
#import "SynthesizeSingleton.h"


@implementation PreferencesManager

@synthesize preferences;
@synthesize prefPath;


SYNTHESIZE_SINGLETON_FOR_CLASS(PreferencesManager)

- (BOOL)writeApplicationData:(NSData *)data toFile:(NSString *)fileName {
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    NSString *documentsDirectory = [paths objectAtIndex:0];
    if (!documentsDirectory) {
        NSLog(@"Documents directory not found!");
        return NO;
    }
    NSString *appFile = [documentsDirectory stringByAppendingPathComponent:fileName];
    return ([data writeToFile:appFile atomically:YES]);
}

- (BOOL)writeApplicationPlist:(id)plist toFile:(NSString *)fileName {
    NSString *error;
    NSData *pData = [NSPropertyListSerialization dataFromPropertyList:plist format:NSPropertyListBinaryFormat_v1_0 errorDescription:&error];
    if (!pData) {
        NSLog(@"%@", error);
        return NO;
    }
    return ([self writeApplicationData:pData toFile:(NSString *)fileName]);
}


- (void) loadPreferencesFromFile{
	NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
	NSString *documentsPath = [paths objectAtIndex:0];
	NSString * prefDocPath = [documentsPath stringByAppendingString:@"/prefs.plist"];
	self.preferences = [NSMutableDictionary dictionaryWithContentsOfFile:prefDocPath]; 
	if (self.preferences == nil) {
		self.preferences = [[NSMutableDictionary alloc] init];
	}
	
	self.prefPath = prefDocPath;
	
}

- (void) persistPreferences{
	[self writeApplicationPlist:self.preferences toFile:@"prefs.plist"];
}

- (NSArray *) getAllLibraries {
	if ([self.preferences objectForKey:kPrefLibrarykey] == nil){
		NSMutableArray *libraries = [[NSMutableArray alloc] init];
		[self.preferences setObject:libraries forKey:kPrefLibrarykey];
	}
	
	return [NSArray arrayWithArray:[self.preferences objectForKey:kPrefLibrarykey]];
	
}
- (NSDictionary *) getLastUsedLibrary{
	return nil;
}
- (void) addLibrary:(NSDictionary *) lib{
	NSMutableArray *libraries = [self.preferences objectForKey:kPrefLibrarykey];
	if (libraries == nil){
		libraries = [[NSMutableArray alloc] init];
	}
	
	[libraries addObject:lib];
	[self.preferences setObject:libraries forKey:kPrefLibrarykey];
	
}

@end
