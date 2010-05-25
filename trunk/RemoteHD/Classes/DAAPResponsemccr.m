//
//  DAAPResponsemccr.m
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 25/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import "DAAPResponsemccr.h"


@implementation DAAPResponsemccr

@synthesize tags;

- (void) didFinishRawParsing:(NSDictionary *)dict{
	NSMutableArray *temp = [[NSMutableArray alloc] init];
	NSDictionary * results = [dict objectForKey:@"mccr"];
	for (id key in results) {
		if ([key hasPrefix:@"mdcl"]) {
			[temp addObject:[results objectForKey:key]];
		}
	}
	self.tags = [NSArray arrayWithArray:temp];
}


@end
