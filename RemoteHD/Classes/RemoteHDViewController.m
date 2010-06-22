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

@interface RemoteHDViewController()

- (void) _updateVolume;
- (void) _displayNoLib;
- (NSString *) _computePrintableTime:(int)milliseconds;
- (void) _updateTime:(NSTimer *)timer;
@end


@implementation RemoteHDViewController
@synthesize navigationController;
@synthesize popOver;
@synthesize timer;

- (void) _displayNoLib{
	nolibView.alpha = 1.0;
}

- (void) libraryAvailable {
	NSLog(@"------ library available -------");
	nolibView.alpha = 0.0;
	loadingView.alpha = 1.0;
	loadingView.hidden = NO;
	[activityIndicator startAnimating];
	[masterViewController display];
	[detailViewController display];
	FDServer *server = [[SessionManager sharedSessionManager] currentServer];
	NSString *string = [NSString stringWithFormat:kRequestNowPlayingArtwork,server.host,server.port,server.sessionId];
	[nowPlaying loadImageFromURL:[NSURL URLWithString:string]];
	[self _updateVolume];
}

// Implement viewDidLoad to do additional setup after loading the view, typically from a nib.
- (void)viewDidLoad {
    [super viewDidLoad];
	navigationController.navigationBarHidden = YES;
	navigationController.view.frame = CGRectMake(244, 70, 524, 890);
	navigationController.delegate = self;
	[self.view addSubview:navigationController.view];
	[self.view bringSubviewToFront:loadingView];
	[self.view bringSubviewToFront:nolibView];
	[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(libraryAvailable) name:@"connected" object:nil];
	[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(_displayNoLib) name:@"connectionLost" object:nil];
	[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(statusUp:) name:@"statusUpdate" object:nil];
	[[PreferencesManager sharedPreferencesManager] loadPreferencesFromFile];
	[[SessionManager sharedSessionManager] openLastUsedServer];
	volumeSlider.backgroundColor = [UIColor clearColor];	
	UIImage *stetchLeftTrack = [[UIImage imageNamed:@"slider1.png"]
								stretchableImageWithLeftCapWidth:15.0 topCapHeight:0.0];
	UIImage *stetchRightTrack = [[UIImage imageNamed:@"slider2.png"]
								 stretchableImageWithLeftCapWidth:15.0 topCapHeight:0.0];
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
	[progress setMinimumTrackImage:stetchLeftTrack2 forState:UIControlStateSelected];
	[progress setMinimumTrackImage:stetchLeftTrack2 forState:UIControlStateHighlighted];
	[progress setMaximumTrackImage:stetchRightTrack2 forState:UIControlStateNormal];
	[progress setMaximumTrackImage:stetchRightTrack2 forState:UIControlStateSelected];
	[progress setMaximumTrackImage:stetchRightTrack2 forState:UIControlStateHighlighted];
	if ([[SessionManager sharedSessionManager] currentServer] == nil) {
		[self _displayNoLib];
	}
}

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

- (IBAction) volumeChanged:(id)sender{
	FDServer *server = [[SessionManager sharedSessionManager] currentServer];
	[server setVolume:volumeSlider.value];
	[self _updateVolume];
}

- (IBAction) buttonSelected:(id)sender{
	NSLog(@"value Changed !");
	UISegmentedControl *control = (UISegmentedControl *)sender;
	
	switch (control.selectedSegmentIndex) {
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
	if (self.popOver.popoverVisible) return;
	[self.popOver presentPopoverFromBarButtonItem:sender
								   permittedArrowDirections:UIPopoverArrowDirectionAny animated:YES];
}

- (void)navigationController:(UINavigationController *)theNavigationController didShowViewController:(UIViewController *)viewController animated:(BOOL)animated{
	if ([self.navigationController.viewControllers objectAtIndex:0] == self.navigationController.visibleViewController) {
		[self.navigationController setNavigationBarHidden:YES animated:NO];
	}
}

- (void) statusUpdate:(DAAPResponsecmst *)cmst{
	
	doneTime = [cmst.cast intValue]-[cmst.cant intValue];
	totalTime = [cmst.cast intValue];
	progress.maximumValue = totalTime;
	progress.minimumValue = 0;
	progress.value = doneTime;
//	float pro = (float)doneTime/(float)totalTime;
//	progress.progress = pro;
	BOOL trackChanged = (![track.text isEqualToString:cmst.cann] || ![artist.text isEqualToString:cmst.cana] || ![album.text isEqualToString:cmst.canl]);

	track.text = cmst.cann;
	artist.text = cmst.cana;
	album.text = cmst.canl;
	if ([cmst.caps shortValue] == 4) {
		play.alpha = 0.0;
		pause.alpha = 1.0;
	} else if ([cmst.caps shortValue] == 3) {
		play.alpha = 1.0;
		pause.alpha = 0.0;
	} 
	if (trackChanged) {
		FDServer *server = [[SessionManager sharedSessionManager] currentServer];
		NSString *string = [NSString stringWithFormat:kRequestNowPlayingArtwork,server.host,server.port,server.sessionId];
		[nowPlaying loadImageFromURL:[NSURL URLWithString:string]];
	}
}

- (void) statusUp:(NSNotification *)notification{
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
	if ([cmst.caps shortValue] == 4) {
		playing = YES;
		play.alpha = 0.0;
		pause.alpha = 1.0;
	} else if ([cmst.caps shortValue] == 3) {
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


- (void) didFinishEditingLibraries {
	[self dismissModalViewControllerAnimated:YES];
	if ([[SessionManager sharedSessionManager] currentServer] != nil ) {
		loadingView.alpha = 1.0;
		loadingView.hidden = NO;
		[activityIndicator startAnimating];
		[masterViewController display];
		[detailViewController display];
		[self _updateVolume];
	} else {
		[self _displayNoLib];
	}

}

- (void) _updateVolume{
	FDServer *server = [[SessionManager sharedSessionManager] currentServer];
	long v = [server getVolume];
	volumeSlider.value = v;
}

- (NSString *) _computePrintableTime:(int)milliseconds{
	int timeSec = milliseconds / 1000;
	
	int totalDays = timeSec / 86400;
    int totalHours = (timeSec / 3600) - (totalDays * 24);
    int totalMinutes = (timeSec / 60) - (totalDays * 24 * 60) - (totalHours * 60);
    int totalSeconds = timeSec % 60;
	return [NSString stringWithFormat:@"%d:%02d",totalMinutes,totalSeconds];
}

- (void) _updateTime:(NSTimer *)timer{
	if (playing) {
		doneTime += 1000;
		progress.maximumValue = totalTime;
		progress.minimumValue = 0;
		progress.value = doneTime;
		int remainingTime = totalTime - doneTime;
		donePlayingTime.text = [self _computePrintableTime:doneTime];
		remainingPlayingTime.text = [NSString stringWithFormat:@"-%@",[self _computePrintableTime:remainingTime]];
	}
}

- (void) didSelectItem{	
}

- (void) didFinishLoading{
	loadingView.alpha = 0.0;
	loadingView.hidden = YES;
	[activityIndicator stopAnimating];
}

- (void)popoverControllerDidDismissPopover:(UIPopoverController *)popoverController{
	//[self.popOver release];
}

// Override to allow orientations other than the default portrait orientation.
- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation {
    return YES;
}

- (void)didReceiveMemoryWarning {
	// Releases the view if it doesn't have a superview.
    [super didReceiveMemoryWarning];
	
	// Release any cached data, images, etc that aren't in use.
}

- (void)viewDidUnload {
	// Release any retained subviews of the main view.
	// e.g. self.myOutlet = nil;
}


- (void)dealloc {
	[self.popOver release];
    [super dealloc];
}

@end
