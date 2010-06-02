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
- (void) didFinishLoading;

@end


@interface DetailViewController : UITableViewController <DAAPRequestDelegate> {
	NSArray *results;
	NSDictionary *indexedResults;
	NSMutableArray *arrayOfCharacters;
	id<DetailDelegate> delegate;
}

@property (nonatomic, retain) NSArray *results;
@property (nonatomic, retain) NSDictionary *indexedResults;
@property (nonatomic, assign) id<DetailDelegate> delegate;

- (void) display;
- (void) didFinishLoading:(DAAPResponse *)response;

@end
