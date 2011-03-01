//
//  DAAPResponseServerInfo.m
//  yTrack
//
//  Created by Fabrice Dewasmes on 18/05/10.
//  Copyright 2010 Fabrice Dewasmes. All rights reserved.
//  
//  This file is part of yTrack.
//  
//  yTrack is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//  
//  yTrack is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//  
//  You should have received a copy of the GNU General Public License
//  along with yTrack.  If not, see <http://www.gnu.org/licenses/>.
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

- (void)dealloc {
	[self.mstt release];
	[self.mpro release];
	[self.apro release];
	[self.aeSV release];
	[self.aeFP release];
	[self.ated release];
	[self.msed release];
	[self.msml release];
	[self.ceWM release];
	[self.ceVO release];
	[self.minm release];
	[self.mslr release];
    [self.mstm release];
	[self.msal release];
	[self.msas release];
	[self.msup release];
	[self.mspi release];
	[self.msex release];
	[self.msbr release];
	[self.msqy release];
	[self.msix release];
	[self.msrs release];
	[self.msdc release];
	[self.mstc release];
	[self.msto release];
    [super dealloc];
}

@end
