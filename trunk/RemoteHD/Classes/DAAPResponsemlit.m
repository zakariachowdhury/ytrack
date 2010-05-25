//
//  DAAPResponsemlit.m
//  BonjourWeb
//
//  Created by Fabrice Dewasmes on 19/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import "DAAPResponsemlit.h"


@implementation DAAPResponsemlit

@synthesize miid;
@synthesize mper;
@synthesize minm;
@synthesize mimc;
@synthesize mctc;
@synthesize meds;
@synthesize abpl;
@synthesize mpco;
@synthesize aeSP;
@synthesize aePS;
@synthesize asai;
@synthesize aeSI;
@synthesize astn;

- (void) didFinishRawParsing:(NSDictionary *)dict{
	self.miid = [dict objectForKey:@"miid"];
	self.mper = [dict objectForKey:@"mper"];
	self.minm = [dict objectForKey:@"minm"];
	self.asai = [dict objectForKey:@"asai"];
	self.aeSI = [dict objectForKey:@"aeSI"];
	self.astn = [dict objectForKey:@"astn"];
}

@end
