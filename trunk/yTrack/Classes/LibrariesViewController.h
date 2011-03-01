//
//  LibrariesViewController.h
//  yTrack
//
//  Created by Fabrice Dewasmes on 20/05/10.
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

#import <UIKit/UIKit.h>
#import "PinCodeController.h"
#import "DAAPRequestReply.h"
#import "FDServer.h"

@protocol LibraryDelegate

- (void)didFinishEditingLibraries;

@end


@interface LibrariesViewController : UIViewController <UITableViewDelegate, UITableViewDataSource, PincodeDelegate, DAAPRequestDelegate, FDServerDelegate, NSNetServiceDelegate, NSNetServiceBrowserDelegate>{
	id<LibraryDelegate> delegate;
	IBOutlet UITableView *table;
	IBOutlet UIBarButtonItem *editButton;
	IBOutlet UIBarButtonItem *doneButton;
@private 
	NSArray *_speakers;
	NSNetServiceBrowser* _netServiceBrowser;
	NSNetService* _currentResolve;
	NSTimer* _timer;
	BOOL _needsActivityIndicator;
	NSString *_currentServiceName;
	NSString *_selectedServiceName;
	NSString *_currentGUID;
	NSMutableArray *_availableServices;
}

@property (nonatomic, assign) id<LibraryDelegate> delegate;
@property (nonatomic, retain) UITableView *table;

- (IBAction) doneButtonPressed:(id)sender;
- (IBAction) editButtonPressed:(id)sender;

- (BOOL)searchForServicesOfType:(NSString *)type inDomain:(NSString *)domain;

@end
