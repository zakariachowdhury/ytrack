//
//  DAAPResponsemdcl.m
//  BonjourWeb
//
//  Created by Fabrice Dewasmes on 18/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import "DAAPResponsemdcl.h"


@implementation DAAPResponsemdcl

@synthesize caia;
@synthesize minm;
@synthesize msma;

- (void) parse{
	NSLog(@"PARSING MDCL");
	[self parse:self.data];
	NSLog(@"END PARSING MDCL");
}

- (void)dealloc {
	[self.caia release];
	[self.minm release];
	[self.msma release];
	[super dealloc];
}

@end
