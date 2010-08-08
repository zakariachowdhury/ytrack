//
//  MasterViewController.m
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 19/05/10.
//  fabrice.dewasmes@gmail.com
//  Copyright Fabrice Dewasmes 2010. All rights reserved.
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
	
	previouslySelected = [NSIndexPath indexPathForRow:0 inSection:0];
}


- (void) viewDidAppear:(BOOL)animated{
	[super viewDidAppear:animated];
	[self.tableView selectRowAtIndexPath:[NSIndexPath indexPathForRow:0 inSection:0] animated:NO scrollPosition:UITableViewScrollPositionTop];
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
	if (section == 0) return @"library";
	else return @"playlists";
}


- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
	if (section == 0) return 3;
	else return [[[[SessionManager sharedSessionManager] currentServer] getPlayLists] count];
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
	if (indexPath.section == 0){
		if (indexPath.row == 0) {
			cell.textLabel.text = NSLocalizedString(@"music", @"Musique");
			
			if (cell.selected){
			cell.imageView.image = [UIImage imageNamed:@"iTunes-inv.png"];
			cell.textLabel.shadowColor = [UIColor grayColor];
			cell.textLabel.shadowOffset = CGSizeMake(0, 1);
			} else {
			 cell.imageView.image = [UIImage imageNamed:@"iTunes.png"];
			 cell.textLabel.shadowColor = [UIColor whiteColor];
			 cell.textLabel.shadowOffset = CGSizeMake(0, 1);
			 }
		} else if (indexPath.row == 1) {
			cell.textLabel.text = @"Books";
			
			if (cell.selected){
				cell.imageView.image = [UIImage imageNamed:@"iTunes-inv.png"];
				cell.textLabel.shadowColor = [UIColor grayColor];
				cell.textLabel.shadowOffset = CGSizeMake(0, 1);
			} else {
				cell.imageView.image = [UIImage imageNamed:@"iTunes.png"];
				cell.textLabel.shadowColor = [UIColor whiteColor];
				cell.textLabel.shadowOffset = CGSizeMake(0, 1);
			}
		} else if (indexPath.row == 2) {
			cell.textLabel.text = @"Podcasts";
			
			if (cell.selected){
				cell.imageView.image = [UIImage imageNamed:@"iTunes-inv.png"];
				cell.textLabel.shadowColor = [UIColor grayColor];
				cell.textLabel.shadowOffset = CGSizeMake(0, 1);
			} else {
				cell.imageView.image = [UIImage imageNamed:@"iTunes.png"];
				cell.textLabel.shadowColor = [UIColor whiteColor];
				cell.textLabel.shadowOffset = CGSizeMake(0, 1);
			}
		}
	} else {
		FDServer *server = [[SessionManager sharedSessionManager] currentServer];
		NSArray *pls = [server getPlayLists];
		DAAPResponsemlit *mlit = (DAAPResponsemlit *)[pls objectAtIndex:indexPath.row];
		cell.textLabel.text = mlit.name;
		cell.imageView.image = [UIImage imageNamed:@"playlist.png"];
	}

    [self.tableView selectRowAtIndexPath:[NSIndexPath indexPathForRow:0 inSection:0] animated:NO scrollPosition:UITableViewScrollPositionTop];

    return cell;
}

#pragma mark -
#pragma mark Table view delegate

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
	UITableViewCell * cell = [self.tableView cellForRowAtIndexPath:indexPath];
	if (indexPath.section ==0)
		cell.imageView.image = [UIImage imageNamed:@"iTunes-inv.png"];
	else {
		cell.imageView.image = [UIImage imageNamed:@"playlist-inv.png"];
	}
	//cell.imageView.image = [UIImage imageNamed:@"iTunes-inv.png"];
	
	UITableViewCell *previousCell = [self.tableView cellForRowAtIndexPath:previouslySelected];
	if (previouslySelected.section ==0)
		previousCell.imageView.image = [UIImage imageNamed:@"iTunes.png"];
	else {
		previousCell.imageView.image = [UIImage imageNamed:@"playlist.png"];
	}

	
	cell.textLabel.shadowColor = [UIColor grayColor];
	cell.textLabel.shadowOffset = CGSizeMake(0, 1);
	previouslySelected = indexPath;
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
		}
		else if (indexPath.row == 2) {
			[detailViewController changeToPodcastView];
			
		}
	} else if (indexPath.section == 1){
		FDServer *server = [[SessionManager sharedSessionManager] currentServer];
		DAAPResponsemlit *playlist = [[server getPlayLists] objectAtIndex:indexPath.row];
		[detailViewController changeToPlaylistView:[playlist.miid longValue] persistentId:[playlist.persistentId longLongValue]];
		[self.delegate didSelectPlaylist];
	}
}

- (void) didChangeLibrary{
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
    [super dealloc];
}


@end

