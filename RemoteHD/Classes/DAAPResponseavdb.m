//
//  DAAPResponseavdb.m
//  BonjourWeb
//
//  Created by Fabrice Dewasmes on 19/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import "DAAPResponseavdb.h"
#import "DAAPResponsemlit.h"


@implementation DAAPResponseavdb

@synthesize mstt;
@synthesize muty;
@synthesize mtco;
@synthesize mrco;
@synthesize mlcl;
@synthesize res;

- (void) didFinishRawParsing:(NSDictionary *)dict{
	NSMutableArray *temp = [[NSMutableArray alloc] init];
	NSDictionary * results = [[dict objectForKey:@"avdb"] objectForKey:@"mlcl"];
	for (id key in results) {
		if ([key hasPrefix:@"mlit"]) {
			DAAPResponsemlit * db = [[DAAPResponsemlit alloc] init];
			NSDictionary *rawDB = (NSDictionary *)[results objectForKey:key];
			[db didFinishRawParsing:rawDB];
			[temp addObject:db];
		}
	}
	self.res = [NSArray arrayWithArray:temp];
}

@end
