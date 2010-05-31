//
//  DAAPResponsemlcl.m
//  BonjourWeb
//
//  Created by Fabrice Dewasmes on 19/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import "DAAPResponsemlcl.h"
#import "HexDumpUtility.h"
#import "DAAPResponsemlit.h"


@implementation DAAPResponsemlcl

@synthesize list;

- (void) setMlit:(DAAPResponsemlit *)mlit{
	if (list == nil) {
		self.list = [[NSMutableArray alloc] init];
	}
	[self.list addObject:mlit];
}

- (void) parse{
	NSLog(@"PARSING MLCL");
	[self parse:self.data];
	NSLog(@"END PARSING MLCL");
}

@end
