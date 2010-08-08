    //
//  LibrariesViewController.m
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 20/05/10.
//  Copyright 2010 Fabrice Dewasmes. All rights reserved.
//

#import "LibrariesViewController.h"
#import "PreferencesManager.h"
#import "SessionManager.h"
#import "DAAPRequestReply.h"
#import "HexDumpUtility.h"
#import "FDServer.h"
#import "DAAPResponsemdcl.h"
#import "RemoteSpeaker.h"

#define kProgressIndicatorSize 20.0
#define kLocalizedEdit     NSLocalizedString(@"Edit","Modifier")
#define kLocalizedDone    NSLocalizedString(@"Done","OK")


@interface LibrariesViewController()
@property (nonatomic, retain, readwrite) NSArray* speakers;
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
- (void)didChangeSpeakerValue:(id)sender;
@end

@implementation LibrariesViewController

@synthesize delegate;
@synthesize table;

@synthesize currentResolve = _currentResolve;
@synthesize netServiceBrowser = _netServiceBrowser;
@synthesize speakers = _speakers;
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
	editButton.possibleTitles = [NSSet setWithObjects:kLocalizedEdit, kLocalizedDone, nil];
	editButton.title = kLocalizedEdit;
}

- (void)viewWillAppear:(BOOL)animated{
	if ([[[SessionManager sharedSessionManager] getServers] count] > 0) {
		[self searchForServicesOfType:@"_touch-able._tcp" inDomain:@"local"];
		FDServer *server = [[SessionManager sharedSessionManager] currentServer];
		self.speakers = [server getSpeakers];
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
	if ((self.speakers != nil) && ([self.speakers count] > 1)){
		return 2;
	}
    return 1;
}


- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    // If there are no services and searchingForServicesString is set, show one row to tell the user.
	if (section == 0) {
		NSUInteger count = [[[SessionManager sharedSessionManager] getServers] count];
		return count + 1;
	} 
	return [self.speakers count];
}


// Customize the appearance of table view cells.
- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    
    static NSString *CellIdentifier = @"LibraryCell";
    
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier];
    if (cell == nil) {
        cell = [[[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:CellIdentifier] autorelease];
    }
	if (indexPath.section == 1) {
		RemoteSpeaker * sp = (RemoteSpeaker *)[self.speakers objectAtIndex:indexPath.row];
		cell.textLabel.text = sp.speakerName;
		UISwitch *sw = [[UISwitch alloc] init];
		if (sp.on) {
			sw.on = YES;
		} else {
			sw.on = NO;
		}
		sw.tag = 10+indexPath.row;
		[sw addTarget:self action:@selector(didChangeSpeakerValue:) forControlEvents:UIControlEventValueChanged];
		cell.accessoryView = sw;
		[sw release];
    } else if (indexPath.section == 0) {
		if (indexPath.row == [[[SessionManager sharedSessionManager] getServers] count]){
			cell.textLabel.text = NSLocalizedString(@"addLibrary",@"Ajouter une bibliothèque");
			cell.accessoryType = UITableViewCellAccessoryDisclosureIndicator;
		} else {
			// Set up the text for the cell
			FDServer *server = [[[SessionManager sharedSessionManager] getServers] objectAtIndex:indexPath.row];
			
			NSData *obj = [server.TXT objectForKey:@"CtlN"];
			NSString * libraryName = [DAAPRequestReply parseString:obj];
			NSString *serviceName = server.servicename;
			
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
			FDServer *currentServer = [[SessionManager sharedSessionManager] currentServer];
			if ([serviceName isEqualToString:currentServer.servicename]) {
				cell.accessoryType = UITableViewCellAccessoryCheckmark;
				cell.textLabel.textColor = [UIColor blackColor];
			}
			
		}
	}
    
    return cell;
}

- (void)didChangeSpeakerValue:(id)sender{
	NSMutableArray *spList = [[NSMutableArray alloc] init];
	for (RemoteSpeaker *sp in self.speakers){
		if (sp.on) {
			[spList addObject:sp.spId];
		}
	}
	UISwitch *sw = (UISwitch *)sender;
	int rowNum = sw.tag - 10;
	NSNumber * num = [[self.speakers objectAtIndex:rowNum] spId];
	if (sw.on) {
		[spList addObject:num];
	}
	else {
		[spList removeObjectIdenticalTo:num];
	}
	[[[SessionManager sharedSessionManager] currentServer] setSpeakers:spList];
	self.speakers = [[[SessionManager sharedSessionManager] currentServer] getSpeakers];
	[self.table reloadData];
}


- (NSString *)tableView:(UITableView *)tableView titleForHeaderInSection:(NSInteger)section{
	if (section == 0) {
		return NSLocalizedString(@"iTunesLibraries",@"Bibliothèques de musique");
	} 
	return NSLocalizedString(@"remoteSpeakers",@"Haut parleurs");
}

- (BOOL)tableView:(UITableView *)tableView canEditRowAtIndexPath:(NSIndexPath *)indexPath {
	if (indexPath.section == 1) {
		return NO;
	} else if (indexPath.section == 0) {
		if (indexPath.row == [[[SessionManager sharedSessionManager] getServers] count]){
			return NO;
		} else {
			return YES;
		}

	}
	return NO;
}

- (void)tableView:(UITableView *)tableView commitEditingStyle:(UITableViewCellEditingStyle)editingStyle forRowAtIndexPath:(NSIndexPath *)indexPath {
	 if (editingStyle == UITableViewCellEditingStyleDelete) {
		 FDServer *server = [[[SessionManager sharedSessionManager] getServers] objectAtIndex:indexPath.row];
		 [[SessionManager sharedSessionManager] deleteServerWithPairingGUID:server.pairingGUID];
		 [tableView deleteRowsAtIndexPaths:[NSArray arrayWithObject:indexPath] withRowAnimation:YES];
	 } else if (editingStyle == UITableViewCellEditingStyleInsert) {
		 // Do nothing
	 }  
	if ([[[SessionManager sharedSessionManager] getServers] count] == 0) {
		doneButton.enabled = YES;
		editButton.title = kLocalizedEdit;
		editButton.style = UIBarButtonItemStyleBordered;
		[self.table setEditing:NO animated:YES];
	}
}

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
	if (indexPath.row == [[[SessionManager sharedSessionManager] getServers] count]) {
		[self.netServiceBrowser stop];
		PinCodeController *pincodeController = [[PinCodeController alloc] initWithNibName:@"PinCodeController" bundle:nil];
		pincodeController.modalPresentationStyle = UIModalPresentationFullScreen;
		pincodeController.modalTransitionStyle = UIModalTransitionStyleCrossDissolve;
		pincodeController.delegate = self;
		[self presentModalViewController:pincodeController animated:YES];
	} 
	// user selected a previously paired library, try to resolve service in case the host has changed
	else {
		FDServer *selectedServer = [[[SessionManager sharedSessionManager] getServers] objectAtIndex:indexPath.row];
		self.currentServiceName = selectedServer.servicename;
		self.currentGUID = selectedServer.pairingGUID;
		NSNetService *service = [[NSNetService alloc] initWithDomain:@"local" type:@"_touch-able._tcp" name:selectedServer.servicename];
		[service setTXTRecordData: [NSNetService dataFromTXTRecordDictionary:selectedServer.TXT]];
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

- (IBAction) editButtonPressed:(id)sender{
	if ([[[SessionManager sharedSessionManager] getServers] count] == 0) {
		doneButton.enabled = YES;
		editButton.title = kLocalizedEdit;
		editButton.style = UIBarButtonItemStyleBordered;
		[self.table setEditing:NO animated:NO];
		return;
	}
	if (!self.table.editing){
		editButton.title = kLocalizedDone;
		editButton.style = UIBarButtonItemStyleDone;
		doneButton.enabled = NO;
		[self.table setEditing:YES animated:YES];
	} else {
		doneButton.enabled = YES;
		editButton.title = kLocalizedEdit;
		editButton.style = UIBarButtonItemStyleBordered;
		[self.table setEditing:NO animated:YES];
	}

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
	if ([self.availableServices indexOfObject:service.name] != NSNotFound) {
		[self.availableServices removeObject:service.name];
	}
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
	NSString *portStr;
	if (port != 0 && port != 80) {
		portStr = [NSString  stringWithFormat:@"%d",port];
	} else {
		portStr = @"";
	}

	NSDictionary* TXTDict = [NSNetService dictionaryFromTXTRecordData:[service TXTRecordData]];
	
	[self stopCurrentResolve];

	if (![service.name isEqualToString:[[[SessionManager sharedSessionManager] currentServer] servicename]]) {
		[[[SessionManager sharedSessionManager] currentServer] logout];
		FDServer *server = [[FDServer alloc] initWithHost:host port:portStr pairingGUID:self.currentGUID serviceName:self.currentServiceName TXT:TXTDict];
		FDServer * serv = [[SessionManager sharedSessionManager] foundNewServer:server];
		if ([serv open]){
			self.speakers = [serv getSpeakers];
		}
		
		[server release];
	}
	
	
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
