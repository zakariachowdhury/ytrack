//
//  DetailViewController.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 19/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "DAAPRequestReply.h"

@protocol DetailDelegate

- (void) didSelectItem;

@end


@interface DetailViewController : UITableViewController {
	NSArray *results;
	NSMutableArray *arrayOfCharacters;
	NSMutableArray *objectsForCharacter;
	id<DetailDelegate> delegate;
}

@property (nonatomic, retain) NSArray *results;
@property (nonatomic, retain) id<DetailDelegate> delegate;

- (void) display;

@end
