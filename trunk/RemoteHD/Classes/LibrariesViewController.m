    //
//  LibrariesViewController.m
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 20/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import "LibrariesViewController.h"
#import "PreferencesManager.h"
#import "SessionManager.h"
#import "DAAPRequestReply.h"
#import "HexDumpUtility.h"
#import "Library.h"
#import "FDServer.h"

#define kProgressIndicatorSize 20.0


@interface LibrariesViewController()
@property (nonatomic, retain, readwrite) NSMutableArray* services;
@property (nonatomic, retain, readwrite) NSNetServiceBrowser* netServiceBrowser;
@property (nonatomic, retain, readwrite) NSNetService* currentResolve;
@property (nonatomic, retain, readwrite) NSTimer* timer;
@property (nonatomic, assign, readwrite) BOOL needsActivityIndicator;
@property (nonatomic, assign, readwrite) BOOL initialWaitOver;
@property (nonatomic, copy, readwrite) NSString *currentServiceName;
@property (nonatomic, copy, readwrite) NSString *currentGUID;
@property (nonatomic, retain, readwrite) NSMutableArray *availableServices;

- (void)stopCurrentResolve;
- (void)initialWaitOver:(NSTimer*)timer;
@end

@implementation LibrariesViewController

@synthesize delegate;
@synthesize table;

@synthesize currentResolve = _currentResolve;
@synthesize netServiceBrowser = _netServiceBrowser;
@synthesize services = _services;
@synthesize needsActivityIndicator = _needsActivityIndicator;
@dynamic timer;
@synthesize initialWaitOver = _initialWaitOver;
@synthesize currentServiceName = _currentServiceName;
@synthesize currentGUID = _currentGUID;
@synthesize availableServices = _availableServices;


- (NSString *)searchingForServicesString {
	return _searchingForServicesString;
}

// Holds the string that's displayed in the table view during service discovery.
- (void)setSearchingForServicesString:(NSString *)searchingForServicesString {
	if (_searchingForServicesString != searchingForServicesString) {
		[_searchingForServicesString release];
		_searchingForServicesString = [searchingForServicesString copy];
		
        // If there are no services, reload the table to ensure that searchingForServicesString appears.
		if ([self.services count] == 0) {
			[self.table reloadData];
		}
	}
}

- (NSTimer *)timer {
	return _timer;
}

// When this is called, invalidate the existing timer before releasing it.
- (void)setTimer:(NSTimer *)newTimer {
	[_timer invalidate];
	[newTimer retain];
	[_timer release];
	_timer = newTimer;
}


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
// Implement viewDidLoad to do additional setup after loading the view, typically from a nib.*/
- (void)viewDidLoad {
    [super viewDidLoad];
	_services = [[NSMutableArray alloc] init];
	self.availableServices = [[NSMutableArray alloc] init];
}

- (void)viewWillAppear:(BOOL)animated{
	if ([[[PreferencesManager sharedPreferencesManager] getAllLibraries] count] > 0) {
		[self searchForServicesOfType:@"_touch-able._tcp" inDomain:@"local"];
	}
}


- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation {
    // Overriden to allow any orientation.
    return YES;
}


#pragma mark -
#pragma mark Table view data source

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
    // Return the number of sections.
    return 1;
}


- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    // If there are no services and searchingForServicesString is set, show one row to tell the user.
	NSUInteger count = [[[PreferencesManager sharedPreferencesManager] getAllLibraries] count];
		
	return count + 1;
}


// Customize the appearance of table view cells.
- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    
    static NSString *CellIdentifier = @"Cell";
    
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier];
    if (cell == nil) {
        cell = [[[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:CellIdentifier] autorelease];
    }
    
    if (indexPath.row == [[[PreferencesManager sharedPreferencesManager] getAllLibraries] count]){
		cell.textLabel.text = @"Ajouter une bibliothèque";
		cell.accessoryType = UITableViewCellAccessoryDisclosureIndicator;
	} else {
		// Set up the text for the cell
		Library *lib = [[[PreferencesManager sharedPreferencesManager] getAllLibraries] objectAtIndex:indexPath.row];
		
		NSData *obj = [lib.TXT objectForKey:@"CtlN"];
		NSString * libraryName = [DAAPRequestReply parseString:obj];
		NSString *serviceName = lib.servicename;
		
		cell.textLabel.text = libraryName;
		cell.textLabel.textColor = [UIColor grayColor];
		if ([self.availableServices indexOfObject:serviceName] != NSNotFound) {
			cell.textLabel.textColor = [UIColor blackColor];
		}
		
		
		cell.accessoryType =  UITableViewCellAccessoryDisclosureIndicator;
		
		// Note that the underlying array could have changed, and we want to show the activity indicator on the correct cell
		if (self.needsActivityIndicator && self.currentResolve.name == serviceName) {
			if (!cell.accessoryView) {
				CGRect frame = CGRectMake(0.0, 0.0, kProgressIndicatorSize, kProgressIndicatorSize);
				UIActivityIndicatorView* spinner = [[UIActivityIndicatorView alloc] initWithFrame:frame];
				[spinner startAnimating];
				spinner.activityIndicatorViewStyle = UIActivityIndicatorViewStyleGray;
				[spinner sizeToFit];
				spinner.autoresizingMask = (UIViewAutoresizingFlexibleLeftMargin |
											UIViewAutoresizingFlexibleRightMargin |
											UIViewAutoresizingFlexibleTopMargin |
											UIViewAutoresizingFlexibleBottomMargin);
				cell.accessoryView = spinner;
				[spinner release];
			}
		} else if (cell.accessoryView) {
			cell.accessoryView = nil;
		}		
		Library *hey = [[SessionManager sharedSessionManager] currentLibrary];;
		if ([serviceName isEqualToString:hey.servicename]) {
			cell.accessoryType = UITableViewCellAccessoryCheckmark;
		}
		
	}

    
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

// If necessary, sets up state to show an activity indicator to let the user know that a resolve is occuring.
- (void)showWaiting:(NSTimer*)timer {
	if (timer == self.timer) {
		NSNetService* service = (NSNetService*)[self.timer userInfo];
		if (self.currentResolve == service) {
			self.needsActivityIndicator = YES;
			
			NSIndexPath* indexPath = [NSIndexPath indexPathForRow:[self.services indexOfObject:self.currentResolve] inSection:0];
			if (indexPath.row != NSNotFound) {
				[self.table reloadRowsAtIndexPaths:[NSArray	arrayWithObject:indexPath] withRowAnimation:UITableViewRowAnimationNone];
				// Deselect the row since the activity indicator shows the user something is happening.
				[self.table deselectRowAtIndexPath:indexPath animated:YES];
			}
		}
	}
}
#pragma mark -
#pragma mark Table view delegate

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
	[self.currentResolve stop];
	
	// user selected add library
	if (indexPath.row == [[[PreferencesManager sharedPreferencesManager] getAllLibraries] count]) {
		[self.netServiceBrowser stop];
		PinCodeController *pincodeController = [[PinCodeController alloc] initWithNibName:@"PinCodeController" bundle:nil];
		pincodeController.modalPresentationStyle = UIModalPresentationFullScreen;
		pincodeController.modalTransitionStyle = UIModalTransitionStyleCrossDissolve;
		pincodeController.delegate = self;
		[self presentModalViewController:pincodeController animated:YES];
	} 
	// user selected a previously paired library, try to resolve service in case the host has changed
	else {
		Library *selectedLib = [[[PreferencesManager sharedPreferencesManager] getAllLibraries] objectAtIndex:indexPath.row];
		self.currentServiceName = selectedLib.servicename;
		self.currentGUID = selectedLib.pairingGUID;
		NSNetService *service = [[NSNetService alloc] initWithDomain:@"local" type:@"_touch-able._tcp" name:selectedLib.servicename];
		[service setTXTRecordData: [NSNetService dataFromTXTRecordDictionary:selectedLib.TXT]];
		self.currentResolve = service;
		[self.currentResolve setDelegate:self];
		
		// Attempt to resolve the service. A value of 0.0 sets an unlimited time to resolve it. The user can
		// choose to cancel the resolve by selecting another service in the table view.
		[self.currentResolve resolveWithTimeout:0.0];
		[self.services addObject:service];
		self.timer = [NSTimer scheduledTimerWithTimeInterval:0.2 target:self selector:@selector(showWaiting:) userInfo:self.currentResolve repeats:NO];
	}

}

#pragma mark -
#pragma mark actions
- (IBAction) doneButtonPressed:(id)sender{
	[delegate didFinishEditingLibraries];
}

- (void)didFinishWithPinCode:(NSString *)serviceName guid:(NSString *)guid{
	[self dismissModalViewControllerAnimated:YES];
	self.currentServiceName = serviceName;
	self.currentGUID = guid;
	[self searchForServicesOfType:@"_touch-able._tcp" inDomain:@"local"];
};
	 
// Creates an NSNetServiceBrowser that searches for services of a particular type in a particular domain.
// If a service is currently being resolved, stop resolving it and stop the service browser from
// discovering other services.
- (BOOL)searchForServicesOfType:(NSString *)type inDomain:(NSString *)domain {
	
	[self stopCurrentResolve];
	[self.netServiceBrowser stop];
	[self.services removeAllObjects];
	
	NSNetServiceBrowser *aNetServiceBrowser = [[NSNetServiceBrowser alloc] init];
	if(!aNetServiceBrowser) {
		// The NSNetServiceBrowser couldn't be allocated and initialized.
		return NO;
	}
	
	aNetServiceBrowser.delegate = self;
	self.netServiceBrowser = aNetServiceBrowser;
	[aNetServiceBrowser release];
	[self.netServiceBrowser searchForServicesOfType:type inDomain:domain];
	
	[self.table reloadData];
	return YES;
}
	 
	 
- (void)stopCurrentResolve {
	self.needsActivityIndicator = NO;
	self.timer = nil;
	
	[self.currentResolve stop];
	self.currentResolve = nil;
}




- (void)initialWaitOver:(NSTimer*)timer {
	self.initialWaitOver= YES;
	if (![self.services count])
		[self.table reloadData];
}


#pragma mark -
#pragma mark NSNetService callbacks

- (void)netServiceBrowser:(NSNetServiceBrowser*)netServiceBrowser didRemoveService:(NSNetService*)service moreComing:(BOOL)moreComing {
	// If a service went away, stop resolving it if it's currently being resolved,
	// remove it from the list and update the table view if no more events are queued.
	if (self.currentResolve && [service isEqual:self.currentResolve]) {
		[self stopCurrentResolve];
	}
	[self.services removeObject:service];
	if (!moreComing) {
		[self.table reloadData];
	}
}	


- (void)netServiceBrowser:(NSNetServiceBrowser*)netServiceBrowser didFindService:(NSNetService*)service moreComing:(BOOL)moreComing {
	
	if ([service.name isEqualToString:self.currentServiceName]) {
		// If a service came online, add it to the list and update the table view if no more events are queued.
		// Then set the current resolve to the service corresponding to the tapped cell
		self.currentResolve = service;
		[self.currentResolve setDelegate:self];
		
		// Attempt to resolve the service. A value of 0.0 sets an unlimited time to resolve it. The user can
		// choose to cancel the resolve by selecting another service in the table view.
		[self.currentResolve resolveWithTimeout:0.0];
		[self.services addObject:service];
	} else {
		
		if ([self.availableServices indexOfObject:service.name] == NSNotFound) {
			[self.availableServices addObject:service.name];
		}
	}

	
	if (!moreComing) {
		[self.table reloadData];
	}
}	


// This should never be called, since we resolve with a timeout of 0.0, which means indefinite
- (void)netService:(NSNetService *)sender didNotResolve:(NSDictionary *)errorDict {
	[self stopCurrentResolve];
	[self.table reloadData];
}

- (void)netServiceDidResolveAddress:(NSNetService *)service {
	assert(service == self.currentResolve);
	
	[service retain];
	
	NSString * host = [self.currentResolve hostName];
	// Note that [NSNetService port:] returns an NSInteger in host byte order
	NSInteger port = [service port];
	NSString* portStr = [[NSString alloc] initWithString:@""];
	if (port != 0 && port != 80) {
		portStr = [[NSString alloc] initWithFormat:@"%d",port];
	}
	NSDictionary* TXTDict = [[NSNetService dictionaryFromTXTRecordData:[service TXTRecordData]] retain];
	
	Library *lib = [[Library alloc] initWithServiceName:self.currentServiceName pairingGUID:self.currentGUID  host:host port:portStr TXT:TXTDict];
	
	[self stopCurrentResolve];
	
	[[PreferencesManager sharedPreferencesManager] addLibrary:lib];
	[[SessionManager sharedSessionManager] setCurrentLibrary:lib];
	[[SessionManager sharedSessionManager] open];
	
	[FDServer getServerInfoForHost:host atPort:portStr];
	
	[service release];
	[self.table reloadData];
}


#pragma mark -
#pragma mark Memory management

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
    [super dealloc];
}


@end
