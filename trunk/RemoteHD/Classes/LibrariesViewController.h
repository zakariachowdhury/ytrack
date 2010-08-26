//
//  LibrariesViewController.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 20/05/10.
//  Copyright 2010 Fabrice Dewasmes. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "PinCodeController.h"
#import "DAAPRequestReply.h"
#import "FDServer.h"

@protocol LibraryDelegate

- (void)didFinishEditingLibraries;

@end


@interface LibrariesViewController : UIViewController <UITableViewDelegate, UITableViewDataSource, PincodeDelegate, DAAPRequestDelegate, FDServerDelegate>{
	id<LibraryDelegate> delegate;
	IBOutlet UITableView *table;
	IBOutlet UIBarButtonItem *editButton;
	IBOutlet UIBarButtonItem *doneButton;
@private 
	NSString* _searchingForServicesString;
	NSArray *_speakers;
	NSMutableArray* _services;
	NSNetServiceBrowser* _netServiceBrowser;
	NSNetService* _currentResolve;
	NSTimer* _timer;
	BOOL _needsActivityIndicator;
	BOOL _initialWaitOver;
	NSString *_currentServiceName;
	NSString *_selectedServiceName;
	NSString *_currentGUID;
	NSMutableArray *_availableServices;
}

@property (nonatomic, assign) id<LibraryDelegate> delegate;
@property (nonatomic, retain) UITableView *table;
@property (nonatomic, copy) NSString* searchingForServicesString;

- (IBAction) doneButtonPressed:(id)sender;
- (IBAction) editButtonPressed:(id)sender;

- (BOOL)searchForServicesOfType:(NSString *)type inDomain:(NSString *)domain;

@end
