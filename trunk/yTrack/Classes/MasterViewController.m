//
//  MasterViewController.m
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

#import "MasterViewController.h"
#import "DAAPResponsemlog.h"
#import "DAAPResponseaply.h"
#import "DAAPResponseavdb.h"
#import "DAAPResponsemlit.h"
#import "SessionManager.h"


@implementation MasterViewController

@synthesize results;
@synthesize delegate;


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

    // Uncomment the following line to preserve selection between presentations.
    self.clearsSelectionOnViewWillAppear = NO;
 
    // Uncomment the following line to display an Edit button in the navigation bar for this view controller.
    // self.navigationItem.rightBarButtonItem = self.editButtonItem;
	
	initialState = YES;
}


- (void) viewDidAppear:(BOOL)animated{
	[super viewDidAppear:animated];
}

- (void)awakeFromNib{
	initialState = YES;
	[self.tableView selectRowAtIndexPath:[NSIndexPath indexPathForRow:0 inSection:0] animated:NO scrollPosition:UITableViewScrollPositionNone];
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation {
    // Override to allow orientations other than the default portrait orientation.
    return YES;
}


#pragma mark -
#pragma mark Table view data source

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
    // Return the number of sections.
    return 2;
}

- (NSString *)tableView:(UITableView *)tableView titleForHeaderInSection:(NSInteger)section{
	if (section == 0) return NSLocalizedString(@"library", @"Bibilothèque");
	else return NSLocalizedString(@"playlists", @"Listes");
}


- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
	if (section == 0) return 4;
	else return [self.results count];
    //return [self.results count];
	//return 1;
}


// Customize the appearance of table view cells.
- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    
    static NSString *CellIdentifier = @"ListCell";
    
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier];
    if (cell == nil) {
        cell = [[[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:CellIdentifier] autorelease];
    }
    
    // Configure the cell...
	//cell.textLabel.text = [(DAAPResponsemlit *)[self.results objectAtIndex:indexPath.row] minm];
	cell.textLabel.shadowColor = [UIColor grayColor];
	cell.textLabel.shadowOffset = CGSizeMake(0, 1);
	
	
	
	if (indexPath.section == 0){
		if (indexPath.row == 0) {
			cell.textLabel.text = NSLocalizedString(@"music", @"Musique");
			cell.imageView.highlightedImage = [UIImage imageNamed:@"iTunes-inv.png"];
			cell.imageView.image = [UIImage imageNamed:@"iTunes.png"];
			if (initialState) {
				[self.tableView selectRowAtIndexPath:[NSIndexPath indexPathForRow:0 inSection:0] animated:NO scrollPosition:UITableViewScrollPositionNone];
			}
		} else if (indexPath.row == 1) {
			cell.textLabel.text = NSLocalizedString(@"books", @"Livres audio");
			cell.imageView.highlightedImage = [UIImage imageNamed:@"audiobooks-inv.png"];
			cell.imageView.image = [UIImage imageNamed:@"audiobooks.png"];
		} else if (indexPath.row == 2) {
			cell.textLabel.text = NSLocalizedString(@"podcasts", @"Podcasts");
			cell.imageView.highlightedImage = [UIImage imageNamed:@"podcast-inv.png"];
			cell.imageView.image = [UIImage imageNamed:@"podcast.png"];
		} else if (indexPath.row == 3) {
			cell.textLabel.text = NSLocalizedString(@"videos", @"Videos");
			cell.imageView.highlightedImage = [UIImage imageNamed:@"podcast-inv.png"];
			cell.imageView.image = [UIImage imageNamed:@"podcast.png"];
		}
	} else {
		DAAPResponsemlit *mlit = (DAAPResponsemlit *)[self.results objectAtIndex:indexPath.row];
		cell.textLabel.text = mlit.name;
		if ([mlit.aeSP shortValue] == 1) {
			cell.imageView.highlightedImage = [UIImage imageNamed:@"smartPlaylistIcon-inv.png"];
			cell.imageView.image = [UIImage imageNamed:@"smartPlaylistIcon.png"];
		} else {
			if ([mlit.aePS shortValue] == kServerGeniusLibraryAEPS) {
				cell.imageView.highlightedImage = [UIImage imageNamed:@"genius-icon-inv.png"];
				cell.imageView.image = [UIImage imageNamed:@"genius-icon.png"];
			} else {
				cell.imageView.highlightedImage = [UIImage imageNamed:@"playlist-inv.png"];
				cell.imageView.image = [UIImage imageNamed:@"playlist.png"];
			}

		}
	}
	

    return cell;
}

#pragma mark -
#pragma mark Table view delegate

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
	if (initialState) {
		initialState = NO;
	}
	/*
	if (indexPath.row == 0) {
		[detailViewController changeToTrackView];
	} else if (indexPath.row == 1) {
		[detailViewController changeToBookView];
	}*/
	if (indexPath.section == 0) {
		if (indexPath.row == 0) {
			[self.delegate didSelectLibrary];
		} else if (indexPath.row == 1) {
			[detailViewController changeToBookView];
			[self.delegate didSelectBooksOrPodcasts];
		}
		else if (indexPath.row == 2) {
			[detailViewController changeToPodcastView];
			[self.delegate didSelectBooksOrPodcasts];
		} else if (indexPath.row == 3) {
			[detailViewController changeToVideoView];
			[self.delegate didSelectVideos];
		}
	} else if (indexPath.section == 1){
		DAAPResponsemlit *playlist = [self.results objectAtIndex:indexPath.row];
		[detailViewController changeToPlaylistView:[playlist.miid longValue] persistentId:[playlist.persistentId longLongValue]];
		[self.delegate didSelectPlaylist];
	}
}

- (void) didChangeLibrary{
	self.results = [CurrentServer getPlayLists];
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
    [super dealloc];
}


@end

