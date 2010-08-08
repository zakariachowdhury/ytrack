//
//  RemoteHDAppDelegate.m
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 19/05/10.
//  fabrice.dewasmes@gmail.com
//  Copyright Fabrice Dewasmes 2010. All rights reserved.
//

#import "RemoteHDAppDelegate.h"
#import "RemoteHDViewController.h"
#import "PreferencesManager.h"
#import "SynthesizeSingleton.h"

@implementation RemoteHDAppDelegate

@synthesize window;
@synthesize viewController;



- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {    
	// Override point for customization after app launch  
	UIDevice *device = [UIDevice currentDevice];
	[device beginGeneratingDeviceOrientationNotifications];
    [window addSubview:viewController.view];
    [window makeKeyAndVisible];

	return YES;
}

- (void)applicationWillTerminate:(UIApplication *)application{
	[[PreferencesManager sharedPreferencesManager] persistPreferences];
}


- (void)dealloc {
    [viewController release];
    [window release];
    [super dealloc];
}


@end
