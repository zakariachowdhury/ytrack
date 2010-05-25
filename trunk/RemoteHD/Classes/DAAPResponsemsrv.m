//
//  DAAPResponseServerInfo.m
//  BonjourWeb
//
//  Created by Fabrice Dewasmes on 18/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import "DAAPResponsemsrv.h"


@implementation DAAPResponsemsrv

@synthesize mstt;
@synthesize mpro;
@synthesize apro;
@synthesize aeSV;
@synthesize aeFP;
@synthesize ated;
@synthesize msed;
@synthesize msml;
@synthesize ceWM;
@synthesize ceVO;
@synthesize minm;
@synthesize mslr;
@synthesize mstm;
@synthesize msal;
@synthesize msas;
@synthesize msup;
@synthesize mspi;
@synthesize msex;
@synthesize msbr;
@synthesize msqy;
@synthesize msix;
@synthesize msrs;
@synthesize msdc;
@synthesize mstc;
@synthesize msto;

- (void) didFinishRawParsing:(NSDictionary *)dict{
	
	NSDictionary * results = [dict objectForKey:@"msrv"];
	for (id key in results) {
		NSLog(@"%@",key);
	}
	
}

@end
