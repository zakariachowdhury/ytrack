//
//  RemoteHDViewController.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 19/05/10.
//  fabrice.dewasmes@gmail.com
//  Copyright Fabrice Dewasmes 2010. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "LibrariesViewController.h"
#import "MasterViewController.h"
#import "DetailViewController.h"
#import "AsyncImageView.h"
#import "SessionManager.h"

@interface RemoteHDViewController : UIViewController <LibraryDelegate, DetailDelegate, FDServerDelegate, UINavigationControllerDelegate>{
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
	IBOutlet UIButton *play;
	IBOutlet UIButton *pause;
	IBOutlet UISlider *volumeSlider;
	UINavigationController *navigationController;
}

@property (nonatomic, retain) IBOutlet UINavigationController *navigationController;

- (IBAction) buttonClicked:(id)sender;
- (IBAction) playClicked:(id)sender;
- (IBAction) pauseClicked:(id)sender;
- (IBAction) nextClicked:(id)sender;
- (IBAction) previousClicked:(id)sender;
- (IBAction) volumeChanged:(id)sender;
- (IBAction) buttonSelected:(id)sender;
- (void) libraryAvailable;

@end
