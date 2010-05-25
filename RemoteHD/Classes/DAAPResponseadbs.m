//
//  DAAPResponseadbs.m
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 23/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import "DAAPResponseadbs.h"
#import "DAAPResponsemlit.h"


@implementation DAAPResponseadbs
@synthesize mstt;
@synthesize muty;
@synthesize mtco;
@synthesize mrco;
@synthesize res;

- (void) didFinishRawParsing:(NSDictionary *)dict{
	NSMutableArray *temp = [[NSMutableArray alloc] init];
	NSDictionary * results = [[dict objectForKey:@"adbs"] objectForKey:@"mlcl"];
	for (id key in results) {
		if ([key hasPrefix:@"mlit"]) {
			DAAPResponsemlit * song = [[DAAPResponsemlit alloc] init];
			NSDictionary *rawSong = (NSDictionary *)[results objectForKey:key];
			[song didFinishRawParsing:rawSong];
			[temp addObject:song];
		}
	}
	self.res = [NSArray arrayWithArray:temp];
}

@end
