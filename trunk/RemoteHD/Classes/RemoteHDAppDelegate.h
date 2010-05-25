//
//  RemoteHDAppDelegate.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 19/05/10.
//  Copyright __MyCompanyName__ 2010. All rights reserved.
//

#import <UIKit/UIKit.h>


@class RemoteHDViewController;

@interface RemoteHDAppDelegate : NSObject <UIApplicationDelegate> {
    UIWindow *window;
    RemoteHDViewController *viewController;
}

@property (nonatomic, retain) IBOutlet UIWindow *window;
@property (nonatomic, retain) IBOutlet RemoteHDViewController *viewController;


@end

