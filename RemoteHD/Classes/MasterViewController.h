//
//  MasterViewController.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 19/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "DAAPRequestReply.h"


@interface MasterViewController : UITableViewController {
	NSArray *results;
}

@property (nonatomic, retain) NSArray *results;

- (void) display;

@end
