//
//  DAAPResponseaply.m
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 23/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import "DAAPResponseaply.h"
#import "DAAPResponsemlit.h"


@implementation DAAPResponseaply

@synthesize mstt;
@synthesize muty;
@synthesize mtco;
@synthesize mrco;
@synthesize playLists;

- (void) didFinishRawParsing:(NSDictionary *)dict{
	NSDictionary *pls = [[dict objectForKey:@"aply"] objectForKey:@"mlcl"];
	NSMutableArray *temp = [[NSMutableArray alloc] init];
	for (id key in pls) {
		DAAPResponsemlit * playlist = [[DAAPResponsemlit alloc] init];
		NSDictionary *rawPL = (NSDictionary *)[pls objectForKey:key];
		[playlist didFinishRawParsing:rawPL];
		[temp addObject:playlist];
	}
	playLists = [NSArray arrayWithArray:temp];
}

@end
