//
//  DAAPResponsecasp.m
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

#import "DAAPResponsecasp.h"
#import "RemoteSpeaker.h"


@implementation DAAPResponsecasp

@synthesize mstt;
@synthesize speakers;

- (void) setMdcl:(DAAPResponsemdcl *)mdcl{
	if (speakers == nil) {
		NSMutableArray *temp = [[NSMutableArray alloc] init];
		self.speakers = temp;
		[temp release];
	}
	RemoteSpeaker *sp = [[RemoteSpeaker alloc] init];
	sp.speakerName = mdcl.name;
	if ([mdcl.caia shortValue] == 1) {
		sp.on = YES;
	} else {
		sp.on = NO;
	}
	sp.spId = mdcl.msma;
    sp.volume = [mdcl.cmvo longValue];
	[self.speakers addObject:sp];
	[sp release];
}

- (void)dealloc {
    [self.mstt release];
	[self.speakers release];
    [super dealloc];
}

@end
