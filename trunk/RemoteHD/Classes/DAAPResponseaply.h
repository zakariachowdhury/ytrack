//
//  DAAPResponseaply.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 23/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "DAAPResponse.h"

@interface DAAPResponseaply : DAAPResponse {
	NSNumber *mstt;
	NSNumber *muty;
	NSNumber *mtco;
	NSNumber *mrco;
	NSArray *playLists;
}

@property (nonatomic, retain) NSNumber *mstt;
@property (nonatomic, retain) NSNumber *muty;
@property (nonatomic, retain) NSNumber *mtco;
@property (nonatomic, retain) NSNumber *mrco;
@property (nonatomic, readonly) NSArray *playLists;

@end
