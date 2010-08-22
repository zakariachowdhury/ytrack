    //
//  NowPlayingDetailViewController.m
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 03/08/10.
//  Copyright 2010 Fabrice Dewasmes. All rights reserved.
//

#import "NowPlayingDetailViewController.h"
#import "SessionManager.h"
#import "FDServer.h"

@interface NowPlayingDetailViewController(PrivateMethods)

- (void) _statusUpdate:(NSNotification *)notification;
- (void) _didChangeOrientation;
- (void) _repositionToLandscape;
- (void) _repositionToPortrait;

@end


@implementation NowPlayingDetailViewController

@synthesize track;
@synthesize album;
@synthesize artist;
@synthesize coverArt;
@synthesize delegate;
@synthesize albumId;

/*
 // The designated initializer.  Override if you create the controller programmatically and want to perform customization that is not appropriate for viewDidLoad.
- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil {
    if ((self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil])) {
        // Custom initialization
    }
    return self;
}
*/

/*
// Implement loadView to create a view hierarchy programmatically, without using a nib.
- (void)loadView {
}
*/

- (void) viewWillAppear:(BOOL)animated{
	//ensure that screen layout conforms to device orientation
	[self _didChangeOrientation];
}


// Implement viewDidLoad to do additional setup after loading the view, typically from a nib.
- (void)viewDidLoad {
    [super viewDidLoad];
	coverArt.displayShadow = NO;
	fullScreen = NO;
	isDisplayingCover = YES;
	//[self _didChangeOrientation];
	self.track.text = CurrentServer.currentTrack;
	self.album.text = CurrentServer.currentAlbum;
	self.artist.text = CurrentServer.currentArtist;
	[CurrentServer getTracksForAlbum:CurrentServer.currentAlbumId delegate:listController];
	NSString *string = [NSString stringWithFormat:kRequestNowPlayingArtworkBig,CurrentServer.host,CurrentServer.port,CurrentServer.sessionId];
	
	coverArt.isDefaultCoverBig = YES;
	[coverArt loadImageFromURL:[NSURL URLWithString:string]];
	[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(_statusUpdate:) name:kNotificationStatusUpdate object:nil];
//	[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(doneButtonPressed:) name:kNotificationConnectionLost object:nil];
	[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(_didChangeOrientation) name:UIDeviceOrientationDidChangeNotification object:nil];
}



- (IBAction) playClicked:(id)sender{
	FDServer *server = CurrentServer;
	[server playPause];
}

- (IBAction) pauseClicked:(id)sender{
	FDServer *server = CurrentServer;
	[server playPause];
}

- (IBAction) nextClicked:(id)sender{
	FDServer *server = CurrentServer;
	[server playNextItem];
}

- (IBAction) previousClicked:(id)sender{
	FDServer *server = CurrentServer;
	[server playPreviousItem];
}

- (IBAction) listButtonClicked:(id)sender{
	[UIView beginAnimations:@"Change view" context:NULL];
	[UIView setAnimationTransition:UIViewAnimationTransitionFlipFromRight forView:containerView cache:NO];
	[UIView setAnimationDuration:0.6];
	UIDeviceOrientation o = [[UIDevice currentDevice] orientation];
	
	if (isDisplayingCover) {
		
		[coverArt removeFromSuperview];
		
		if (o == UIDeviceOrientationLandscapeLeft || o == UIDeviceOrientationLandscapeRight) {
			NSLog(@"landscape"); 
			listController.tableView.frame = CGRectMake(0, 125, 768, 529);
		} else if (o == UIDeviceOrientationPortrait || o == UIDeviceOrientationPortraitUpsideDown) {
			NSLog(@"portrait");
			listController.tableView.frame = CGRectMake(0, 0, 768, 768);
		}
		[containerView addSubview:[listController view]];
		
		isDisplayingCover = NO;
	} else {
		[listController.view removeFromSuperview];
		[containerView addSubview:coverArt];
		[[coverButton superview] bringSubviewToFront:coverButton];
		isDisplayingCover = YES;
	}

//	if (device.orientation == UIDeviceOrientationLandscapeLeft || device.orientation == UIDeviceOrientationLandscapeRight) {
//		[UIView setAnimationTransition:UIViewAnimationTransitionFlipFromRight forView:self.view cache:NO];
//	} else if (device.orientation == UIDeviceOrientationPortrait || device.orientation == UIDeviceOrientationPortraitUpsideDown) {
	//	[UIView setAnimationTransition:UIViewAnimationTransitionFlipFromRight forView:containerView cache:NO];
//	}
	
	[UIView commitAnimations];		
}

- (IBAction) shuffleClicked:(id)sender{
	[CurrentServer toggleShuffle];
}
- (IBAction) repeatClicked:(id)sender{
	[CurrentServer toggleRepeatState];
}


- (void) _repositionToLandscape{
	containerView.frame = CGRectMake(128, 0, 768, 768);
	listController.tableView.frame = CGRectMake(0, 125, 768, 529);
	bottomBackground.alpha = 1.0;
	backButton.frame = CGRectMake(158, backButton.frame.origin.y, backButton.frame.size.width, backButton.frame.size.height);
	listButton.frame = CGRectMake(824, listButton.frame.origin.y, listButton.frame.size.width, listButton.frame.size.height);
	nextButton.frame = CGRectMake(820, nextButton.frame.origin.y, nextButton.frame.size.width, nextButton.frame.size.height);
	previousButton.frame = CGRectMake(706, previousButton.frame.origin.y, previousButton.frame.size.width, previousButton.frame.size.height);
	playButton.frame = CGRectMake(779, playButton.frame.origin.y, playButton.frame.size.width, playButton.frame.size.height);
	pauseButton.frame = CGRectMake(779, pauseButton.frame.origin.y, pauseButton.frame.size.width, pauseButton.frame.size.height);
}

- (void) _repositionToPortrait{
	containerView.frame = CGRectMake(0, 125, 768, 768);
	listController.tableView.frame = CGRectMake(0, 0, 768, 768);
	bottomBackground.alpha = 0.0;
	backButton.frame = CGRectMake(30, backButton.frame.origin.y, backButton.frame.size.width, backButton.frame.size.height);
	listButton.frame = CGRectMake(696, listButton.frame.origin.y, listButton.frame.size.width, listButton.frame.size.height);
	nextButton.frame = CGRectMake(689, nextButton.frame.origin.y, nextButton.frame.size.width, nextButton.frame.size.height);
	previousButton.frame = CGRectMake(570, previousButton.frame.origin.y, previousButton.frame.size.width, previousButton.frame.size.height);
	playButton.frame = CGRectMake(643, playButton.frame.origin.y, playButton.frame.size.width, playButton.frame.size.height);
	pauseButton.frame = CGRectMake(643, pauseButton.frame.origin.y, pauseButton.frame.size.width, pauseButton.frame.size.height);
}

-(void) _didChangeOrientation{
	UIDeviceOrientation o = [[UIDevice currentDevice] orientation];
	if (o == UIDeviceOrientationLandscapeLeft || o == UIDeviceOrientationLandscapeRight) {
		NSLog(@"landscape"); 
		[self _repositionToLandscape];
	} else if (o == UIDeviceOrientationPortrait || o == UIDeviceOrientationPortraitUpsideDown) {
		NSLog(@"portrait");
		[self _repositionToPortrait];
	} else {
		if (self.view.bounds.size.width == 1024.0) {
			[self _repositionToLandscape];
		} else {
			[self _repositionToPortrait];
		}
	}

}

- (void) _statusUpdate:(NSNotification *)notification{
	DAAPResponsecmst *cmst = (DAAPResponsecmst *)[notification.userInfo objectForKey:@"cmst"];
	BOOL trackChanged = NO;
	if (cmst.asai && [self.albumId longLongValue] != [cmst.asai longLongValue]){
		trackChanged = YES;
		self.albumId = cmst.asai;
	}
	//BOOL trackChanged = (![track.text isEqualToString:cmst.cann] || ![artist.text isEqualToString:cmst.cana] || ![album.text isEqualToString:cmst.canl]);
	
	track.text = cmst.cann;
	artist.text = cmst.cana;
	album.text = cmst.canl;

	if (CurrentServer.playing) {
		playButton.alpha = 0.0;
		pauseButton.alpha = 1.0;
	} else {
		playButton.alpha = 1.0;
		pauseButton.alpha = 0.0;
	} 
	if (trackChanged) {
		[CurrentServer getTracksForAlbum:cmst.asai delegate:listController];
		FDServer *server = CurrentServer;
		NSString *string = [NSString stringWithFormat:kRequestNowPlayingArtworkBig,server.host,server.port,server.sessionId];
		[coverArt loadImageFromURL:[NSURL URLWithString:string]];
	}	
}

- (IBAction) doneButtonPressed:(id)sender{
	[delegate didFinishWithNowPlaying];
}

- (IBAction) didTouchCover:(id)sender{
	NSLog(@"touched");
	[UIView beginAnimations:@"fullscreen" context:NULL];
	if (!fullScreen) {
		NSLog(@"full");
		bottomBackground.alpha = 0.0;
		topBackground.alpha = 0.0;
		backButton.alpha = 0.0;
		listButton.alpha = 0.0;
		playButton.alpha = 0.0;
		pauseButton.alpha = 0.0;
		previousButton.alpha = 0.0;
		nextButton.alpha = 0.0;
		track.alpha = 0.0;
		album.alpha = 0.0;
		artist.alpha = 0.0;
		topSeparator.alpha = 0.0;
		fullScreen = YES;
	} else {
		bottomBackground.alpha = 1.0;
		topBackground.alpha = 1.0;
		backButton.alpha = 1.0;
		listButton.alpha = 1.0;
		playButton.alpha = 1.0;
		pauseButton.alpha = 1.0;
		previousButton.alpha = 1.0;
		nextButton.alpha = 1.0;
		track.alpha = 1.0;
		album.alpha = 1.0;
		artist.alpha = 1.0;
		topSeparator.alpha = 1.0;
		fullScreen = NO;
	}

	
	[UIView commitAnimations];
	
}

// Override to allow orientations other than the default portrait orientation.
- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation {
    // Return YES for supported orientations
    //return (interfaceOrientation == UIInterfaceOrientationPortrait);
	return YES;
}


- (void)didReceiveMemoryWarning {
    // Releases the view if it doesn't have a superview.
    [super didReceiveMemoryWarning];
    
    // Release any cached data, images, etc that aren't in use.
}

- (void)viewDidUnload {
    [super viewDidUnload];
    // Release any retained subviews of the main view.
    // e.g. self.myOutlet = nil;
}


- (void)dealloc {
	[track release];
	[album release];
	[artist release];
	[coverArt release];
	[albumId release];
    [super dealloc];
}


@end
