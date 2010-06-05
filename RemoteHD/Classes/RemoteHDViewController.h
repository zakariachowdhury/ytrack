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

@interface RemoteHDViewController : UIViewController <LibraryDelegate, DetailDelegate, FDServerDelegate>{
	IBOutlet UIToolbar *topToolbar;
	IBOutlet UIToolbar *bottomToolbar;
	IBOutlet UIView *loadingView;
	IBOutlet UIActivityIndicatorView *activityIndicator;
	
	IBOutlet MasterViewController *masterViewController;
	IBOutlet DetailViewController *detailViewController;
	LibrariesViewController *librariesViewController;
	
	IBOutlet AsyncImageView *nowPlaying;
	IBOutlet UIProgressView *progress;
	IBOutlet UILabel *track;
	IBOutlet UILabel *artist;
	IBOutlet UILabel *album;
	IBOutlet UIBarButtonItem *play;
	IBOutlet UIBarButtonItem *pause;
	IBOutlet UISlider *volumeSlider;
}

- (IBAction) buttonClicked:(id)sender;
- (IBAction) playClicked:(id)sender;
- (IBAction) pauseClicked:(id)sender;
- (IBAction) nextClicked:(id)sender;
- (IBAction) previousClicked:(id)sender;
- (IBAction) volumeChanged:(id)sender;
- (void) libraryAvailable;

@end

