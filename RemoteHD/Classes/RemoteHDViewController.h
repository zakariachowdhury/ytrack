//
//  RemoteHDViewController.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 19/05/10.
//  Copyright __MyCompanyName__ 2010. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "LibrariesViewController.h"
#import "MasterViewController.h"
#import "DetailViewController.h"
#import "AsyncImageView.h"
#import "SessionManager.h"

@interface RemoteHDViewController : UIViewController <LibraryDelegate, DetailDelegate>{
	IBOutlet UIToolbar *topToolbar;
	IBOutlet UIToolbar *bottomToolbar;
	
	IBOutlet MasterViewController *masterViewController;
	IBOutlet DetailViewController *detailViewController;
	
	IBOutlet AsyncImageView *nowPlaying;
}

- (IBAction) buttonClicked:(id)sender;
- (IBAction) playClicked:(id)sender;
- (void) libraryAvailable;

@end

