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
@synthesize artistDatasource;


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

    self.clearsSelectionOnViewWillAppear = NO;
	
	results = [[NSMutableArray alloc] init];
	
	[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(statusUp:) name:@"statusUpdate" object:nil];
}

- (void) viewWillAppear:(BOOL)animated{
	
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation {
    return YES;
}


#pragma mark -
#pragma mark Table view data source

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
	return [self.indexList count];
}


- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    // Return the number of rows in the section.
	//NSString *letter = [arrayOfCharacters objectAtIndex:section];
	//return [[indexedResults objectForKey:letter] count];
	long res = [[(DAAPResponsemlit *)[self.indexList objectAtIndex:section] mshn] longValue];
	
	return res;
}

- (NSArray *)sectionIndexTitlesForTableView:(UITableView *)tableView {
	NSMutableArray *chars = [[[NSMutableArray alloc] init] autorelease];
	for (DAAPResponsemlit *mlit in self.indexList) {
		[chars addObject:[mlit mshc]];
	}
	//return arrayOfCharacters;
	return chars;
}

- (NSInteger)tableView:(UITableView *)tableView sectionForSectionIndexTitle:(NSString *)title atIndex:(NSInteger)index {
	/*NSInteger count = 0;
	for(NSString *character in arrayOfCharacters)
	{
		if([character isEqualToString:title])
			return count;
		count ++;
	}
	return 0;// in case of some eror donot crash d application*/
	NSInteger count = 0;
	for(DAAPResponsemlit *mlit in self.indexList)
	{
		if([mlit.mshc isEqualToString:title])
			return count;
		count ++;
	}
	return 0;
	
}

- (NSString *)tableView:(UITableView *)tableView titleForHeaderInSection:(NSInteger)section {
	/*if([arrayOfCharacters count]==0)
		return @"";
	return [arrayOfCharacters objectAtIndex:section];*/
	return [(DAAPResponsemlit *)[self.indexList objectAtIndex:section] mshc];
}

// Customize the appearance of table view cells.
- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    
    static NSString *CellIdentifier = @"Cell";
    
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier];
    if (cell == nil) {
        cell = [[[UITableViewCell alloc] initWithStyle:UITableViewCellStyleSubtitle reuseIdentifier:CellIdentifier] autorelease];
    }
    
	long offset = [[(DAAPResponsemlit *)[self.indexList objectAtIndex:indexPath.section] mshi] longValue];
	DAAPResponsemlit *track = [self.results objectAtIndex:(offset + indexPath.row)];
	
	cell.textLabel.text = track.minm;
	NSString *album = track.asal;
	NSString *artist = track.asar;
	cell.detailTextLabel.text = [NSString stringWithFormat:@"%@ - %@",album, artist];
	if ([cell.textLabel.text isEqualToString:self.currentTrack]) {
		//NSLog(@"%@-%@",cell.textLabel.text,self.currentTrack);
		cell.textLabel.textColor = [UIColor blueColor];
	} else {
		//NSLog(@"%@-%@",cell.textLabel.text,self.currentTrack);
		cell.textLabel.textColor = [UIColor blackColor];
	}
    
    return cell;
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
- (void) statusUp:(NSNotification *)notification{
	DAAPResponsecmst *cmst = (DAAPResponsecmst *)[notification.userInfo objectForKey:@"cmst"];
	self.currentTrack = cmst.cann;

	/*[NSIndexPath indexPathForRow:<#(NSUInteger)row#> inSection:<#(NSUInteger)section#>
	[self.tableView scrollToRowAtIndexPath:[reloadTracks objectAtIndex:0] atScrollPosition:UITableViewScrollPositionMiddle animated:YES];*/

	[self.tableView reloadData];
}


- (void) display{
	NSLog(@"requesting ALL TRACKS");
	[[[SessionManager sharedSessionManager] currentServer] getAllTracks:self];
}

#pragma mark -
#pragma mark DAAPRequestDelegate methods

- (void) didFinishLoading:(DAAPResponse *)response{
	self.results = [[(DAAPResponseapso *)response mlcl] list];
	self.indexList = [[(DAAPResponseapso *)response mshl] indexList];
	[self.tableView reloadData];
	[self.delegate didFinishLoading];
}

- (void) changeToTrackView{
	self.tableView.dataSource = self;
	self.tableView.delegate = self;
	
	[self.tableView reloadData];
}

- (void) changeToArtistView{
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
	DAAPResponseagal * resp = [[[SessionManager sharedSessionManager] currentServer] getAllAlbums];
	AlbumsOfArtistController * c = [[AlbumsOfArtistController alloc] init];
	c.agal = resp;
	[self.navigationController setNavigationBarHidden:NO animated:NO];
	[c setTitle:@"Albums"];
	[self.navigationController pushViewController:c animated:YES];
	[c release];
	
	[self.tableView reloadData];
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
	[artistDatasource release];
    [super dealloc];
}


@end

