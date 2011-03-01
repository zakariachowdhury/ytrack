//
//  DAAPResponsecmst.m
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

#import "DAAPResponsecmst.h"


@implementation DAAPResponsecmst
@synthesize mstt;
@synthesize cmsr;
@synthesize caps;
@synthesize cash;
@synthesize carp;
@synthesize cavc;
@synthesize caas;
@synthesize caar;
@synthesize canp;
@synthesize cann;
@synthesize cana;
@synthesize canl;
@synthesize cang;
@synthesize asai;
@synthesize cmmk;
@synthesize ceGS;
@synthesize cant;
@synthesize cast;

- (void)dealloc {
	[self.mstt release];
	[self.cmsr release];
	[self.caps release];
	[self.cash release];
	[self.carp release];
	[self.cavc release];
	[self.caas release];
	[self.caar release];
	[self.canp release];
	[self.cann release];
	[self.cana release];
	[self.canl release];
    [self.cang release];
	[self.asai release];
	[self.cmmk release];
	[self.ceGS release];
	[self.cant release];
	[self.cast release];
    [super dealloc];
}

@end
