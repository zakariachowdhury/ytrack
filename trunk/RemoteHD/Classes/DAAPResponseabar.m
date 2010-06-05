//
//  DAAPResponseabar.m
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 23/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import "DAAPResponseabar.h"


@implementation DAAPResponseabar

@synthesize mstt;
@synthesize mlit;

- (void)dealloc {
	[self.mstt release];
    [self.mlit release];
    [super dealloc];
}

@end
