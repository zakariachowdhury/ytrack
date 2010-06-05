//
//  DAAPResponsecasp.m
//  BonjourWeb
//
//  Created by Fabrice Dewasmes on 18/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import "DAAPResponsecasp.h"


@implementation DAAPResponsecasp

@synthesize mstt;
@synthesize speakers;

- (void) setMdcl:(DAAPResponsemdcl *)mdcl{
	if (speakers == nil) {
		NSMutableArray *temp = [[NSMutableArray alloc] init];
		self.speakers = temp;
		[temp release];
	}
	[self.speakers addObject:mdcl];	
}

- (void)dealloc {
    [self.mstt release];
	[self.speakers release];
    [super dealloc];
}

@end
