//
//  DetailViewController.m
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 19/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import "DetailViewController.h"
#import "SessionManager.h"
#import "DAAPResponseadbs.h"
#import "DAAPResponsemlit.h"
#import "DAAPResponsemlog.h"
#import "DAAPResponseabro.h"
#import "DAAPResponseavdb.h"
#import "DAAPResponsemlcl.h"
#import "AlbumsOfArtistController.h"

@implementation DetailViewController

@synthesize results;
@synthesize indexList;
@synthesize delegate;
@synthesize currentTrack;
@synthesize currentAlbum;
@synthesize currentArtist;
@synthesize artistDatasource;
@synthesize tracksDatasource;
@synthesize albumsDatasource;
@synthesize booksDatasource;


#pragma mark -
#pragma mark Initialization

/*
- (id)initWithStyle:(UITableViewStyle)style {
    // Override initWithStyle: if you create the controller programmatically and want to perform customization that is not appropriate for viewDidLoad.
    if ((self = [super initWithStyle:style])) {
    }
    return self;
}
*/


#pragma mark -
#pragma mark View lifecycle


- (void)viewDidLoad {
    [super viewDidLoad];
	self.title = NSLocalizedString(@"BackLabel",@"Retour");
    self.clearsSelectionOnViewWillAppear = NO;
	
	results = [[NSMutableArray alloc] init];
	
	[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(statusUpdate:) name:kNotificationStatusUpdate object:nil];
}

- (void) viewWillAppear:(BOOL)animated{
	
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation {
    return YES;
}

#pragma mark -
#pragma mark Table view delegate

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
	DAAPResponsemlit *mlit = (DAAPResponsemlit *)[self.indexList objectAtIndex:indexPath.section];
	long offset = [mlit.mshi longValue];
	long i = offset + indexPath.row;
	[[[SessionManager sharedSessionManager] currentServer] playSongInLibrary:i];
    [delegate didSelectItem];
}

// Used to update nowPlaying in the table
- (void) statusUpdate:(NSNotification *)notification{
	DAAPResponsecmst *cmst = (DAAPResponsecmst *)[notification.userInfo objectForKey:@"cmst"];
	self.currentTrack = cmst.cann;
	self.currentArtist = cmst.cana;
	self.currentAlbum = cmst.canl;

	[self.tableView reloadData];
}


- (void) display{
	NSLog(@"requesting ALL TRACKS");
	[self changeToTrackView];
}

#pragma mark -
#pragma mark DAAPRequestDelegate methods

- (void) didFinishLoading:(DAAPResponse *)response{
	self.results = [[(DAAPResponseapso *)response mlcl] list];
	self.indexList = [[(DAAPResponseapso *)response mshl] indexList];
	
	[self.tableView reloadData];
	[self.delegate didFinishLoading];
}

- (void) didFinishLoading{
	[self.delegate didFinishLoading];
}

- (void) refreshTableView{
	[self.tableView reloadData];
}

- (void) updateImage:(UIImage *)image forIndexPath:(NSIndexPath *)indexPath{
	[[[self.tableView cellForRowAtIndexPath:indexPath] imageView] setImage:image];
}

- (void) changeToTrackView{
	[self.navigationController popToRootViewControllerAnimated:NO];
	if (self.tracksDatasource == nil) {
		TracksDatasource *d = [[TracksDatasource alloc] init];
		self.tracksDatasource = d;
		self.tracksDatasource.navigationController = self.navigationController;
		self.tracksDatasource.delegate = self;
		[[[SessionManager sharedSessionManager] currentServer] getAllTracks:self.tracksDatasource];
		[d release];
		self.tableView.dataSource = self.tracksDatasource;
		self.tableView.delegate = self.tracksDatasource;
	} else {
		self.tableView.dataSource = self.tracksDatasource;
		self.tableView.delegate = self.tracksDatasource;
		[self.tableView reloadData];
		[self.delegate didFinishLoading];
	}
}

- (void) changeToArtistView{
	//TODO change to async data loading
	[self.navigationController popToRootViewControllerAnimated:NO];
	if (self.artistDatasource == nil) {
		ArtistDatasource *d = [[ArtistDatasource alloc] init];
		self.artistDatasource = d;
		self.artistDatasource.navigationController = self.navigationController;
		[d release];
	}
	self.tableView.dataSource = self.artistDatasource;
	self.tableView.delegate = self.artistDatasource;
	 
	[self.tableView reloadData];

}

- (void) changeToAlbumView{
	[self.navigationController popToRootViewControllerAnimated:NO];
	if (self.albumsDatasource == nil) {
		AlbumsDatasource *d = [[AlbumsDatasource alloc] init];
		self.albumsDatasource = d;
		self.albumsDatasource.navigationController = self.navigationController;
		self.albumsDatasource.delegate = self;
		[[[SessionManager sharedSessionManager] currentServer] getAllAlbums:self.albumsDatasource];
		[d release];
		self.tableView.dataSource = self.albumsDatasource;
		self.tableView.delegate = self.albumsDatasource;
		
	} else {
		self.tableView.dataSource = self.albumsDatasource;
		self.tableView.delegate = self.albumsDatasource;
		[self.tableView reloadData];
	}	
}

- (void) changeToBookView{
	[self.navigationController popToRootViewControllerAnimated:NO];
	if (self.booksDatasource == nil) {
		BooksDatasource *d = [[BooksDatasource alloc] init];
		self.booksDatasource = d;
		self.booksDatasource.navigationController = self.navigationController;
		self.booksDatasource.delegate = self;
		[d release];
	}
	self.tableView.dataSource = self.booksDatasource;
	self.tableView.delegate = self.booksDatasource;
	
	[[[SessionManager sharedSessionManager] currentServer] getAllBooks:self.booksDatasource];
	
}
	 

#pragma mark -
#pragma mark Memory management

- (void)didReceiveMemoryWarning {
    // Releases the view if it doesn't have a superview.
    [super didReceiveMemoryWarning];
    
    // Relinquish ownership any cached data, images, etc that aren't in use.
}

- (void)viewDidUnload {
    // Relinquish ownership of anything that can be recreated in viewDidLoad or on demand.
    // For example: self.myOutlet = nil;
}


- (void)dealloc {
	[results release];
	[indexList release];
	[currentTrack release];
	[currentAlbum release];
	[currentArtist release];
	[artistDatasource release];
	[tracksDatasource release];
	[booksDatasource release];
    [super dealloc];
}


@end

