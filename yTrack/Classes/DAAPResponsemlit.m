//
//  DAAPResponsemlit.m
//  yTrack
//
//  Created by Fabrice Dewasmes on 19/05/10.
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
@synthesize astm;
@synthesize assp;
@synthesize asal;
@synthesize asar;
@synthesize asaa;
@synthesize mshc;
@synthesize mshi;
@synthesize mshn;
@synthesize mcti;

- (void) parse{
	[self parse:self.data];
}

- (void)dealloc {
	[self.miid release];
	[self.mper release];
	[self.mimc release];
	[self.mctc release];
	[self.meds release];
	[self.abpl release];
	[self.mpco release];
	[self.aeSP release];
	[self.aePS release];
	[self.asai release];
	[self.aeSI release];
	[self.astn release];
	[self.astm release];
	[self.assp release];
    [self.minm release];
	[self.asal release];
	[self.asar release];
	[self.asaa release];
	[self.mshc release];
	[self.mshi release];
	[self.mshn release];
	[self.mcti release];
    [super dealloc];
}

@end
