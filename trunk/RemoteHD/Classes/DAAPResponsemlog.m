//
//  DAAPResponsemlog.m
//  BonjourWeb
//
//  Created by Fabrice Dewasmes on 18/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import "DAAPResponsemlog.h"


@implementation DAAPResponsemlog

@synthesize mstt;
@synthesize mlid;

- (void) didFinishRawParsing:(NSDictionary *)dict{
	self.mlid = [[dict objectForKey:@"mlog"] objectForKey:@"mlid"];
	self.mstt = [[dict objectForKey:@"mlog"] objectForKey:@"mstt"];
}

@end
