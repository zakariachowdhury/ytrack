//
//  RemoteHDViewController.h
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

#import <UIKit/UIKit.h>
#import "LibrariesViewController.h"
#import "MasterViewController.h"
#import "DetailViewController.h"
#import "AsyncImageView.h"
#import "SessionManager.h"
#import "NowPlayingDetailViewController.h"

@interface RemoteHDViewController : UIViewController <LibraryDelegate, DetailDelegate, UINavigationControllerDelegate, UIPopoverControllerDelegate, DAAPRequestDelegate, MasterViewDelegate, NowPlayingDelegate>{
	IBOutlet UIToolbar *topToolbar;
	IBOutlet UIToolbar *bottomToolbar;
	IBOutlet UIView *loadingView;
	IBOutlet UIView *nolibView;
	IBOutlet UIView *testView;
	IBOutlet UILabel *noLibViewMessage;
	IBOutlet UILabel *loadingMessageLabel;
	IBOutlet UIActivityIndicatorView *activityIndicator;
	IBOutlet UISegmentedControl *segmentedControl;
	IBOutlet UILabel *nowPlayingLabel;
	IBOutlet UIBarButtonItem *settingsButton;
	
	IBOutlet MasterViewController *masterViewController;
	IBOutlet DetailViewController *detailViewController;
	LibrariesViewController *librariesViewController;
	
	IBOutlet AsyncImageView *nowPlaying;
	IBOutlet UISlider *progress;
	IBOutlet UILabel *track;
	IBOutlet UILabel *artist;
	IBOutlet UILabel *album;
	IBOutlet UIButton *play;
	IBOutlet UIButton *pause;
	IBOutlet UISlider *volumeSlider;
	IBOutlet UILabel *donePlayingTime;
	IBOutlet UILabel *remainingPlayingTime;
	UINavigationController *navigationController;
	UIPopoverController *popOver;
	NowPlayingDetailViewController *nowPlayingDetail;
	BOOL nowPlayingDetailShown;
	BOOL librariesShown;
	
@private 
	BOOL _editingPlayingTime;
}

@property (nonatomic, retain) IBOutlet UINavigationController *navigationController;
@property (nonatomic, retain) UIPopoverController *popOver;
@property (nonatomic, retain) NowPlayingDetailViewController *nowPlayingDetail;

- (IBAction) buttonClicked:(id)sender;
- (IBAction) playClicked:(id)sender;
- (IBAction) pauseClicked:(id)sender;
- (IBAction) nextClicked:(id)sender;
- (IBAction) previousClicked:(id)sender;
- (IBAction) volumeChanged:(id)sender;
- (IBAction) playingTimeChanged:(id)sender;
- (IBAction) startingPlaytimeEdit:(id)sender;
- (IBAction) buttonSelected:(id)sender;
- (IBAction) speakerSelectorClicked:(id)sender;
- (IBAction) showNowPlayingDetail:(id)sender;

@end

