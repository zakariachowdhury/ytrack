//
//  DAAPResponseapso.m
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 25/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import "DAAPResponseapso.h"
#import "DAAPResponsemlit.h"


@implementation DAAPResponseapso

@synthesize res;

- (void) didFinishRawParsing:(NSDictionary *)dict{
	NSMutableArray *temp = [[NSMutableArray alloc] init];
	NSDictionary * results = [[dict objectForKey:@"apso"] objectForKey:@"mlcl"];
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