//
//  NowPlayingDetailViewController.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 03/08/10.
//  Copyright 2010 Fabrice Dewasmes. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "AsyncImageView.h"
#import "NowPlayingListController.h"

#define kNowPlayingDetailViewNibName @"NowPlayingView"

@protocol NowPlayingDelegate

- (void)didFinishWithNowPlaying;

@end

@interface NowPlayingDetailViewController : UIViewController {
	IBOutlet UILabel *track;
	IBOutlet UILabel *album;
	IBOutlet UILabel *artist;
	NSNumber *albumId;
	IBOutlet UIImageView *topSeparator;
	IBOutlet UIImageView *bottomBackground;
	IBOutlet UIImageView *topBackground;
	IBOutlet AsyncImageView *coverArt;
	IBOutlet UIButton *coverButton;
	IBOutlet UIButton *playButton;
	IBOutlet UIButton *pauseButton;
	IBOutlet UIButton *nextButton;
	IBOutlet UIButton *previousButton;
	IBOutlet UIButton *backButton;
	IBOutlet UIButton *listButton;
	IBOutlet UIView *containerView;
	id<NowPlayingDelegate> delegate;
	BOOL fullScreen;
	IBOutlet NowPlayingListController *listController;
	BOOL isDisplayingCover;
}

@property (nonatomic, retain) UILabel *track;
@property (nonatomic, retain) UILabel *album;
@property (nonatomic, retain) UILabel *artist;
@property (nonatomic, retain) NSNumber *albumId;
@property (nonatomic, retain) AsyncImageView *coverArt;
@property (nonatomic, assign) id<NowPlayingDelegate>delegate;

- (IBAction) playClicked:(id)sender;
- (IBAction) pauseClicked:(id)sender;
- (IBAction) nextClicked:(id)sender;
- (IBAction) previousClicked:(id)sender;
- (IBAction) listButtonClicked:(id)sender;
- (IBAction) doneButtonPressed:(id)sender;
- (IBAction) didTouchCover:(id)sender;
- (IBAction) shuffleClicked:(id)sender;
- (IBAction) repeatClicked:(id)sender;

@end