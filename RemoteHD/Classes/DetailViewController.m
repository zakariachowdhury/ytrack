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

@implementation DetailViewController

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
	
	results = [[NSMutableArray alloc] init];
	arrayOfCharacters = [[NSMutableArray alloc]init];
	objectsForCharacter = [[NSMutableArray alloc]init];
	
	
 
    // Uncomment the following line to display an Edit button in the navigation bar for this view controller.
    // self.navigationItem.rightBarButtonItem = self.editButtonItem;
}


/*
- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
}
*/
/*
- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
}
*/
/*
- (void)viewWillDisappear:(BOOL)animated {
    [super viewWillDisappear:animated];
}
*/
/*
- (void)viewDidDisappear:(BOOL)animated {
    [super viewDidDisappear:animated];
}
*/


- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation {
    // Override to allow orientations other than the default portrait orientation.
    return YES;
}


#pragma mark -
#pragma mark Table view data source

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
	return [arrayOfCharacters count];
}


- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    // Return the number of rows in the section.
	
	/*NSString *letter = [arrayOfCharacters objectAtIndex:section];
	NSPredicate *letterPredicate;
	if (![letter isEqualToString:@"#"]) {
		letterPredicate = [NSPredicate predicateWithFormat:@"minm beginswith[c] %@",letter];
	}
	else {
		letterPredicate = [NSPredicate predicateWithFormat:@"minm MATCHES '\\\\d.*'"];
	}
	NSArray *beginWithLetter = [self.results filteredArrayUsingPredicate:letterPredicate];
	return [beginWithLetter count];*/
	return [[objectsForCharacter objectAtIndex:section] count];
//    return [self.results count];
}

- (NSArray *)sectionIndexTitlesForTableView:(UITableView *)tableView {
	return arrayOfCharacters;
}

- (NSInteger)tableView:(UITableView *)tableView sectionForSectionIndexTitle:(NSString *)title atIndex:(NSInteger)index {
	NSInteger count = 0;
	for(NSString *character in arrayOfCharacters)
	{
		if([character isEqualToString:title])
			return count;
		count ++;
	}
	return 0;// in case of some eror donot crash d application
	
}

- (NSString *)tableView:(UITableView *)tableView titleForHeaderInSection:(NSInteger)section {
	if([arrayOfCharacters count]==0)
		return @"";
	return [arrayOfCharacters objectAtIndex:section];
}

// Customize the appearance of table view cells.
- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    
    static NSString *CellIdentifier = @"Cell";
    
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier];
    if (cell == nil) {
        cell = [[[UITableViewCell alloc] initWithStyle:UITableViewCellStyleSubtitle reuseIdentifier:CellIdentifier] autorelease];
    }
    
	
	NSArray *beginWithLetter = [objectsForCharacter objectAtIndex:indexPath.section];
	
	//cell.textLabel.text = [results objectAtIndex:indexPath.row];
	cell.textLabel.text = [(DAAPResponsemlit *)[beginWithLetter objectAtIndex:indexPath.row] minm];
	NSString *album = [(DAAPResponsemlit *)[beginWithLetter objectAtIndex:indexPath.row] asal];
	NSString *artist = [(DAAPResponsemlit *)[beginWithLetter objectAtIndex:indexPath.row] asar];
	cell.detailTextLabel.text = [NSString stringWithFormat:@"%@ - %@",album, artist];
    
    return cell;
}


/*
// Override to support conditional editing of the table view.
- (BOOL)tableView:(UITableView *)tableView canEditRowAtIndexPath:(NSIndexPath *)indexPath {
    // Return NO if you do not want the specified item to be editable.
    return YES;
}
*/


/*
// Override to support editing the table view.
- (void)tableView:(UITableView *)tableView commitEditingStyle:(UITableViewCellEditingStyle)editingStyle forRowAtIndexPath:(NSIndexPath *)indexPath {
    
    if (editingStyle == UITableViewCellEditingStyleDelete) {
        // Delete the row from the data source
        [tableView deleteRowsAtIndexPaths:[NSArray arrayWithObject:indexPath] withRowAnimation:YES];
    }   
    else if (editingStyle == UITableViewCellEditingStyleInsert) {
        // Create a new instance of the appropriate class, insert it into the array, and add a new row to the table view
    }   
}
*/


/*
// Override to support rearranging the table view.
- (void)tableView:(UITableView *)tableView moveRowAtIndexPath:(NSIndexPath *)fromIndexPath toIndexPath:(NSIndexPath *)toIndexPath {
}
*/


/*
// Override to support conditional rearranging of the table view.
- (BOOL)tableView:(UITableView *)tableView canMoveRowAtIndexPath:(NSIndexPath *)indexPath {
    // Return NO if you do not want the item to be re-orderable.
    return YES;
}
*/


#pragma mark -
#pragma mark Table view delegate

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
	//DAAPResponsemlit *song = (DAAPResponsemlit *)[self.results objectAtIndex:indexPath.row];
	DAAPResponsemlit *mlit = (DAAPResponsemlit *)[[objectsForCharacter objectAtIndex:indexPath.section] objectAtIndex:indexPath.row];
	int i = [results indexOfObject:mlit];
	[[[SessionManager sharedSessionManager] currentServer] playSongInLibrary:i];
    [delegate didSelectItem];
}

- (void) setupcharArray{
	[arrayOfCharacters removeAllObjects];
	[objectsForCharacter removeAllObjects];
	NSArray *letters = [NSArray arrayWithArray:
							 [@"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z|#"
							  componentsSeparatedByString:@"|"]];
	for (NSString *letter in letters) {
		NSPredicate *letterPredicate;
		if (![letter isEqualToString:@"#"]) {
			letterPredicate = [NSPredicate predicateWithFormat:@"minm beginswith[c] %@",letter];
		}
		else {
			letterPredicate = [NSPredicate predicateWithFormat:@"minm MATCHES '\\\\d.*'"];
		}

		NSArray *beginWithLetter = [self.results filteredArrayUsingPredicate:letterPredicate];
		
		if([beginWithLetter count] >0)
		{
			[arrayOfCharacters addObject:letter];
			[objectsForCharacter addObject:beginWithLetter];
		}
	}
}


- (void) display{
	NSLog(@"requesting ALL TRACKS");
	self.results = [[[SessionManager sharedSessionManager] currentServer] getAllTracks];
	NSLog(@"END requesting ALL TRACKS");
	[self setupcharArray];
	NSLog(@"END setup char array");
	[self.tableView reloadData];
	NSLog(@"end table reaload");
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
	[arrayOfCharacters release];
    [super dealloc];
}


@end

