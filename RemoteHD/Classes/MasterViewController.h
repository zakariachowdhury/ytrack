//
//  MasterViewController.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 19/05/10.
//  fabrice.dewasmes@gmail.com
//  Copyright Fabrice Dewasmes 2010. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "DAAPRequestReply.h"
#import "DetailViewController.h"


@interface MasterViewController : UITableViewController {
	NSArray *results;
	IBOutlet DetailViewController *detailViewController;
}

@property (nonatomic, retain) NSArray *results;

- (void) display;

@end
