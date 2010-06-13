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

@interface RemoteHDViewController()

- (void) _updateVolume;

@end


@implementation RemoteHDViewController
@synthesize navigationController;


- (void) libraryAvailable {
	NSLog(@"------ library available -------");
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
	navigationController.view.frame = CGRectMake(243, 44, 525, 916);
	[self.view addSubview:navigationController.view];
	[self.view bringSubviewToFront:loadingView];
	[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(libraryAvailable) name:@"connected" object:nil];
	[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(statusUp:) name:@"statusUpdate" object:nil];
	[[PreferencesManager sharedPreferencesManager] loadPreferencesFromFile];
	[[SessionManager sharedSessionManager] openLastUsedServer];
	
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

- (void) statusUpdate:(DAAPResponsecmst *)cmst{
	int doneTime = [cmst.cast intValue]-[cmst.cant intValue];
	int totalTime = [cmst.cast intValue];
	float pro = (float)doneTime/(float)totalTime;
	progress.progress = pro;
	BOOL trackChanged = (![track.text isEqualToString:cmst.cann] || ![artist.text isEqualToString:cmst.cana] || ![album.text isEqualToString:cmst.canl]);

	track.text = cmst.cann;
	artist.text = cmst.cana;
	album.text = cmst.canl;
	if ([cmst.caps shortValue] == 4) {
		play.enabled = NO;
		pause.enabled = YES;
	} else if ([cmst.caps shortValue] == 3) {
		play.enabled = YES;
		pause.enabled = NO;
	} 
	if (trackChanged) {
		FDServer *server = [[SessionManager sharedSessionManager] currentServer];
		NSString *string = [NSString stringWithFormat:kRequestNowPlayingArtwork,server.host,server.port,server.sessionId];
		[nowPlaying loadImageFromURL:[NSURL URLWithString:string]];
	}
}

- (void) statusUp:(NSNotification *)notification{
	DAAPResponsecmst *cmst = (DAAPResponsecmst *)[notification.userInfo objectForKey:@"cmst"];
	int doneTime = [cmst.cast intValue]-[cmst.cant intValue];
	int totalTime = [cmst.cast intValue];
	float pro = (float)doneTime/(float)totalTime;
	progress.progress = pro;
	BOOL trackChanged = (![track.text isEqualToString:cmst.cann] || ![artist.text isEqualToString:cmst.cana] || ![album.text isEqualToString:cmst.canl]);
	
	track.text = cmst.cann;
	artist.text = cmst.cana;
	album.text = cmst.canl;
	if ([cmst.caps shortValue] == 4) {
		play.enabled = NO;
		pause.enabled = YES;
	} else if ([cmst.caps shortValue] == 3) {
		play.enabled = YES;
		pause.enabled = NO;
	} 
	if (trackChanged) {
		FDServer *server = [[SessionManager sharedSessionManager] currentServer];
		NSString *string = [NSString stringWithFormat:kRequestNowPlayingArtwork,server.host,server.port,server.sessionId];
		[nowPlaying loadImageFromURL:[NSURL URLWithString:string]];
	}
}


- (void) didFinishEditingLibraries {
	[self dismissModalViewControllerAnimated:YES];
	loadingView.alpha = 1.0;
	loadingView.hidden = NO;
	[activityIndicator startAnimating];
	[masterViewController display];
	[detailViewController display];
	FDServer *server = [[SessionManager sharedSessionManager] currentServer];
	//TODO monitoring should be started after connect and not by main controller
	//[server monitorPlayStatus:self];
	/*NSString *string = [NSString stringWithFormat:kRequestNowPlayingArtwork,server.host,server.port,server.sessionId];
	[nowPlaying loadImageFromURL:[NSURL URLWithString:string]];*/
	[self _updateVolume];
}

- (void) _updateVolume{
	FDServer *server = [[SessionManager sharedSessionManager] currentServer];
	long v = [server getVolume];
	volumeSlider.value = v;
}

- (void) didSelectItem{	
}

- (void) didFinishLoading{
	loadingView.alpha = 0.0;
	loadingView.hidden = YES;
	[activityIndicator stopAnimating];
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
    [super dealloc];
}

@end
