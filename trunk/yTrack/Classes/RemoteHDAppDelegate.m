//
//  RemoteHDAppDelegate.m
//  yTrack
//
//  Created by Fabrice Dewasmes on 19/05/10.
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

#import "RemoteHDAppDelegate.h"
#import "RemoteHDViewController.h"
#import "PreferencesManager.h"
#import "SynthesizeSingleton.h"
#import "DDLog.h"
#import "DDConsoleLogger.h"
#import "DDFileLogger.h"

@implementation RemoteHDAppDelegate

@synthesize window;
@synthesize viewController;



- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {  
	[DDLog addLogger:[DDConsoleLogger sharedInstance]];
	DDFileLogger *fileLogger = [[DDFileLogger alloc] init];
	fileLogger.rollingFrequency = 60 * 60 * 24; // 24 hour rolling
	fileLogger.logFileManager.maximumNumberOfLogFiles = 7;
	
	[DDLog addLogger:fileLogger];
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
