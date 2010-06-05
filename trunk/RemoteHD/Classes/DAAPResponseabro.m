//
//  DAAPResponseabro.m
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 23/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import "DAAPResponseabro.h"


@implementation DAAPResponseabro
@synthesize mstt;
@synthesize muty;
@synthesize mtco;
@synthesize mrco;
@synthesize res;

- (void) didFinishRawParsing:(NSDictionary *)dict{
	NSMutableArray *temp = [[NSMutableArray alloc] init];
	NSDictionary * results = [[dict objectForKey:@"abro"] objectForKey:@"abar"];
	for (id key in results) {
		if ([key hasPrefix:@"mlit"]) {
			[temp addObject:[results objectForKey:key]];
		}
		
	}
	self.res = [NSArray arrayWithArray:temp];
	[temp release];
}

- (void)dealloc {
	[self.mstt release];
	[self.muty release];
	[self.mtco release];
	[self.mrco release];
    [self.res release];
    [super dealloc];
}
@end
