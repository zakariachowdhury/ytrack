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
	if (self.preferences != nil) {
		[self.preferences release];
	}
	NSMutableDictionary *temp = [NSMutableDictionary dictionaryWithContentsOfFile:prefDocPath];
	self.preferences = temp; 
	if (self.preferences == nil) {
		NSMutableDictionary *temp = [[NSMutableDictionary alloc] init];
		self.preferences = temp;
		[temp release];
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
		[libraries release];
	}
	NSMutableArray *libs = [[NSMutableArray alloc] init];
	for (NSDictionary *lib in [self.preferences objectForKey:kPrefLibrarykey]) {
		Library *newLib = [[Library alloc] initWithDictionary:lib];
		[libs addObject:newLib];
		[newLib release];
	}
	NSArray *immutableArray= [NSArray arrayWithArray:libs];
	[libs release];
	return immutableArray;
	
}
- (Library *) getLastUsedLibrary{
	return [self.preferences objectForKey:kPrefLibrarykey];
}
- (void) addLibrary:(Library *) newLib{
	NSMutableArray *libraries = [self.preferences objectForKey:kPrefLibrarykey];
	if (libraries == nil){
		NSMutableArray *newlibraries = [[NSMutableArray alloc] init];
		[self.preferences setObject:libraries forKey:kPrefLibrarykey];
		[newlibraries release];
	}
	int foundIndex = -1;
	for (int i = 0; i<[libraries count];i++) {
		NSString *libServiceName = [[libraries objectAtIndex:i] objectForKey:@"servicename"];
		NSString *newlibServiceName = newLib.servicename;
		if ([newlibServiceName isEqualToString:libServiceName]) {
			foundIndex = i;
			break;
		}
	}
	if (foundIndex >=0) {
		[libraries removeObjectAtIndex:foundIndex];
	}
	
	[libraries addObject:[newLib getAsDictionary]];
	[self.preferences setObject:[newLib getAsDictionary] forKey:kPrefLastUsedLibrary];
}

- (void)dealloc {
    [self.preferences release];
    [super dealloc];
}


@end
