//
//  DAAPResponsemccr.m
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 25/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import "DAAPResponsemccr.h"


@implementation DAAPResponsemccr

@synthesize mstt;
@synthesize tags;

- (void) didFinishRawParsing:(NSDictionary *)dict{
	NSMutableArray *temp = [[NSMutableArray alloc] init];
	NSDictionary * results = [dict objectForKey:@"mccr"];
	for (id key in results) {
		if ([key hasPrefix:@"mdcl"]) {
			[temp addObject:[results objectForKey:key]];
		}
	}
	NSArray *immutableArray = [NSArray arrayWithArray:temp];
	self.tags = immutableArray;
	[temp release];
}

- (void)dealloc {
	[self.mstt release];
    [self.tags release];
    [super dealloc];
}

@end
