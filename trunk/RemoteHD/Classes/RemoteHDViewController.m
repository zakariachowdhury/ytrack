//
//  RemoteHDViewController.m
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 19/05/10.
//  fabrice.dewasmes@gmail.com
//  Copyright Fabrice Dewasmes 2010. All rights reserved.
//

#import "RemoteHDViewController.h"
#import "DAAPRequestReply.h"
#import "DAAPResponsemlog.h"
#import "DAAPResponsemsrv.h"
#import "DAAPResponsemdcl.h"
#import "PreferencesManager.h"
#import "DAAPResponsemlit.h"
#import "SpeakersViewController.h"

@interface RemoteHDViewController(PrivateMethods)

- (void) _updateVolume;
- (void) _displayNoLib;
- (NSString *) _computePrintableTime:(int)milliseconds;
- (void) _updateTime:(NSTimer *)timer;
- (void) _statusUpdate:(NSNotification *)notification;
- (void) _libraryAvailable;
@end


@implementation RemoteHDViewController
@synthesize navigationController;
@synthesize popOver;
@synthesize timer;


// Implement viewDidLoad to do additional setup after loading the view, typically from a nib.
- (void)viewDidLoad {
    [super viewDidLoad];
	
	// i18n
	loadingMessageLabel.text = NSLocalizedString(@"loading",@"Chargement en cours...");
	[segmentedControl setTitle:NSLocalizedString(@"Tracks",@"Morceaux") forSegmentAtIndex:0];
	[segmentedControl setTitle:NSLocalizedString(@"Artists",@"Albums") forSegmentAtIndex:1];
	[segmentedControl setTitle:NSLocalizedString(@"Albums",@"Artistes") forSegmentAtIndex:2];
	[settingsButton setTitle:NSLocalizedString(@"settings",@"Réglages")];
	nowPlayingLabel.text = NSLocalizedString(@"nowPlaying",@"A l'écoute");
	
	// init navigation controller
	navigationController.navigationBarHidden = YES;
	navigationController.view.frame = CGRectMake(244, 70, 524, 890);
	navigationController.delegate = self;
	[self.view addSubview:navigationController.view];
	
	// init 'hiding views'
	[self.view bringSubviewToFront:loadingView];
	[self.view bringSubviewToFront:nolibView];
	
	// register observers for notifications
	[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(_libraryAvailable) name:kNotificationConnected object:nil];
	[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(_displayNoLib) name:kNotificationConnectionLost object:nil];
	[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(_statusUpdate:) name:kNotificationStatusUpdate object:nil];
	
	// load preferences file and try to connect to the last used server
	[[PreferencesManager sharedPreferencesManager] loadPreferencesFromFile];
	[[SessionManager sharedSessionManager] openLastUsedServer];
	
	// customize sliders
	volumeSlider.backgroundColor = [UIColor clearColor];	
	UIImage *stetchLeftTrack = [[UIImage imageNamed:@"slider1.png"]
								stretchableImageWithLeftCapWidth:19.0 topCapHeight:0.0];
	UIImage *stetchRightTrack = [[UIImage imageNamed:@"slider2.png"]
								 stretchableImageWithLeftCapWidth:19.0 topCapHeight:0.0];
	[volumeSlider setThumbImage: [UIImage imageNamed:@"sliderPin.png"] forState:UIControlStateNormal];
	[volumeSlider setThumbImage: [UIImage imageNamed:@"sliderPin.png"] forState:UIControlStateSelected];
	[volumeSlider setThumbImage: [UIImage imageNamed:@"sliderPin.png"] forState:UIControlStateHighlighted];
	[volumeSlider setMinimumTrackImage:stetchLeftTrack forState:UIControlStateNormal];
	[volumeSlider setMaximumTrackImage:stetchRightTrack forState:UIControlStateNormal];
	
	progress.backgroundColor = [UIColor clearColor];	
	UIImage *stetchLeftTrack2 = [[UIImage imageNamed:@"timeslider1.png"]
								stretchableImageWithLeftCapWidth:6.0 topCapHeight:0.0];
	UIImage *stetchRightTrack2 = [[UIImage imageNamed:@"timeslider2.png"]
								 stretchableImageWithLeftCapWidth:6.0 topCapHeight:0.0];
	[progress setThumbImage: [UIImage imageNamed:@"timeSliderPin.png"] forState:UIControlStateNormal];
	[progress setThumbImage: [UIImage imageNamed:@"timeSliderPin.png"] forState:UIControlStateSelected];
	[progress setThumbImage: [UIImage imageNamed:@"timeSliderPin.png"] forState:UIControlStateHighlighted];
	[progress setMinimumTrackImage:stetchLeftTrack2 forState:UIControlStateNormal];
	[progress setMaximumTrackImage:stetchRightTrack2 forState:UIControlStateNormal];

	// hide most part of the UI if we cannot connect to last used server
	if ([[SessionManager sharedSessionManager] currentServer] == nil) {
		[self _displayNoLib];
	}
	
	// init the editing playing time state
	_editingPlayingTime = NO;
}


#pragma mark -
#pragma mark Actions

- (IBAction) buttonClicked:(id)sender{
	if (librariesViewController == nil) {
		librariesViewController = [[LibrariesViewController alloc ] initWithNibName:@"LibrariesViewController" bundle:nil];
		librariesViewController.modalPresentationStyle = UIModalPresentationFormSheet;
		[librariesViewController setModalTransitionStyle:UIModalTransitionStyleFlipHorizontal];
		[librariesViewController setDelegate:self];
	}
	
	[self presentModalViewController:librariesViewController animated:YES]; 
}

- (IBAction) playClicked:(id)sender{
	FDServer *server = [[SessionManager sharedSessionManager] currentServer];
	[server playPause];
}

- (IBAction) pauseClicked:(id)sender{
	FDServer *server = [[SessionManager sharedSessionManager] currentServer];
	[server playPause];
}

- (IBAction) nextClicked:(id)sender{
	FDServer *server = [[SessionManager sharedSessionManager] currentServer];
	[server playNextItem];
}

- (IBAction) previousClicked:(id)sender{
	FDServer *server = [[SessionManager sharedSessionManager] currentServer];
	[server playPreviousItem];
}

// user did change volume
- (IBAction) volumeChanged:(id)sender{
	FDServer *server = [[SessionManager sharedSessionManager] currentServer];
	[server setVolume:volumeSlider.value];
	[self _updateVolume];
}

// called when user start changing the playing time slider
// used to avoid the timer to try top update slide state while user is editing value
- (IBAction) startingPlaytimeEdit:(id)sender{
	_editingPlayingTime = YES;
}

- (IBAction) playingTimeChanged:(id)sender{
	FDServer *server = [[SessionManager sharedSessionManager] currentServer];
	[server changePlayingTime:progress.value];
	doneTime = progress.value;
	_editingPlayingTime = NO;
}

- (IBAction) buttonSelected:(id)sender{
	NSLog(@"value Changed !");
	
	switch (segmentedControl.selectedSegmentIndex) {
		case 0:
			[detailViewController changeToTrackView];
			break;
		case 1:
			[detailViewController changeToArtistView];
			break;
		case 2:
			[detailViewController changeToAlbumView];
			break;
		default:
			break;
	}
}

- (IBAction)speakerSelectorClicked:(id)sender
{
	if (self.popOver == nil){
		SpeakersViewController* content = [[SpeakersViewController alloc] init];
		UIPopoverController* aPopover = [[UIPopoverController alloc]
									 initWithContentViewController:content];
		aPopover.delegate = self;
		aPopover.popoverContentSize = CGSizeMake(250, 150);
		[content release];
	
		// Store the popover in a custom property for later use.
		self.popOver = aPopover;
		[aPopover release];
	}
	if (self.popOver.popoverVisible) {
		[self.popOver dismissPopoverAnimated:YES];
		return;
	}
	[self.popOver presentPopoverFromBarButtonItem:sender
								   permittedArrowDirections:UIPopoverArrowDirectionAny animated:YES];
}

- (void)navigationController:(UINavigationController *)theNavigationController didShowViewController:(UIViewController *)viewController animated:(BOOL)animated{
	if ([self.navigationController.viewControllers objectAtIndex:0] == self.navigationController.visibleViewController) {
		[self.navigationController setNavigationBarHidden:YES animated:NO];
	}
}

#pragma mark -
#pragma mark LibraryDelegate methods

- (void) didFinishEditingLibraries {
	[self dismissModalViewControllerAnimated:YES];
	if ([[SessionManager sharedSessionManager] currentServer] != nil ) {
		[self startLoading];
		//[detailViewController display];
		[self buttonSelected:nil];
		[self _updateVolume];
	} else {
		[self _displayNoLib];
	}

}

#pragma mark -
#pragma mark DetailDelegate methods

- (void) didSelectItem{	
}

- (void) didFinishLoading{
	loadingView.alpha = 0.0;
	loadingView.hidden = YES;
	[activityIndicator stopAnimating];
}

- (void) startLoading{
	loadingView.alpha = 1.0;
	loadingView.hidden = NO;
	[activityIndicator startAnimating];
}

#pragma mark -
#pragma mark private methods

- (void) _updateVolume{
	FDServer *server = [[SessionManager sharedSessionManager] currentServer];
	long v = [server getVolume];
	volumeSlider.value = v;
}


- (void) _updateTime:(NSTimer *)timer{
	if (playing) {
		doneTime += 1000;
		if (!_editingPlayingTime) {
			progress.maximumValue = totalTime;
			progress.minimumValue = 0;
			progress.value = doneTime;
			
			int remainingTime = totalTime - doneTime;
			donePlayingTime.text = [self _computePrintableTime:doneTime];
			remainingPlayingTime.text = [NSString stringWithFormat:@"-%@",[self _computePrintableTime:remainingTime]];
		}
	} else {
		progress.maximumValue = totalTime;
		progress.minimumValue = 0;
		progress.value = doneTime;
		int remainingTime = totalTime - doneTime;
		donePlayingTime.text = [self _computePrintableTime:doneTime];
		remainingPlayingTime.text = [NSString stringWithFormat:@"-%@",[self _computePrintableTime:remainingTime]];
	}

}

- (NSString *) _computePrintableTime:(int)milliseconds{
	int timeSec = milliseconds / 1000;
	
	int totalDays = timeSec / 86400;
    int totalHours = (timeSec / 3600) - (totalDays * 24);
    int totalMinutes = (timeSec / 60) - (totalDays * 24 * 60) - (totalHours * 60);
    int totalSeconds = timeSec % 60;
	return [NSString stringWithFormat:@"%d:%02d",totalMinutes,totalSeconds];
}

#pragma mark notification handling methods

- (void) _statusUpdate:(NSNotification *)notification{
	DAAPResponsecmst *cmst = (DAAPResponsecmst *)[notification.userInfo objectForKey:@"cmst"];
	doneTime = [cmst.cast intValue]-[cmst.cant intValue];
	totalTime = [cmst.cast intValue];
	progress.maximumValue = totalTime;
	progress.minimumValue = 0;
	progress.value = doneTime;
	BOOL trackChanged = (![track.text isEqualToString:cmst.cann] || ![artist.text isEqualToString:cmst.cana] || ![album.text isEqualToString:cmst.canl]);
	
	track.text = cmst.cann;
	artist.text = cmst.cana;
	album.text = cmst.canl;
	NSLog(@"%d",[cmst.caps shortValue]);
	if ([cmst.caps shortValue] == 4) {
		playing = YES;
		play.alpha = 0.0;
		pause.alpha = 1.0;
	} else if ([cmst.caps shortValue] == 3 || [cmst.caps shortValue] == 2) {
		playing = NO;
		play.alpha = 1.0;
		pause.alpha = 0.0;
	} 
	if (trackChanged) {
		FDServer *server = [[SessionManager sharedSessionManager] currentServer];
		NSString *string = [NSString stringWithFormat:kRequestNowPlayingArtwork,server.host,server.port,server.sessionId];
		[nowPlaying loadImageFromURL:[NSURL URLWithString:string]];
	}
	
	donePlayingTime.text = [self _computePrintableTime:doneTime];
	[self.timer invalidate];
	//	[self.timer release];
	self.timer = [NSTimer scheduledTimerWithTimeInterval:1.0 target:self selector:@selector(_updateTime:) userInfo:nil repeats:YES];
}

- (void) _displayNoLib{
	[self.timer invalidate];
	donePlayingTime.text = @"00:00";
	remainingPlayingTime.text = @"00:00";
	progress.enabled = NO;
	volumeSlider.value = 0;
	volumeSlider.enabled = NO;
	NSString *notConnectedMessage = [[NSBundle mainBundle] localizedStringForKey:@"notConnected" 
																		  value:@"Vous n'êtes pas connecté" 
																		  table:@"Localizable"];
	noLibViewMessage.text = notConnectedMessage;
	nolibView.alpha = 1.0;
}

- (void) _libraryAvailable {
	nolibView.alpha = 0.0;
	progress.enabled = YES;
	volumeSlider.enabled = YES;
	[self startLoading];
	[detailViewController didChangeLibrary];
	[self buttonSelected:nil];
	FDServer *server = [[SessionManager sharedSessionManager] currentServer];
	NSString *string = [NSString stringWithFormat:kRequestNowPlayingArtwork,server.host,server.port,server.sessionId];
	[nowPlaying loadImageFromURL:[NSURL URLWithString:string]];
	[self _updateVolume];
}



- (void)popoverControllerDidDismissPopover:(UIPopoverController *)popoverController{
	//[self.popOver release];
}

// Override to allow orientations other than the default portrait orientation.
- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation {
    return YES;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
}

- (void)viewDidUnload {
}


- (void)dealloc {
	[self.timer invalidate];
	[self.popOver release];
    [super dealloc];
}

@end
