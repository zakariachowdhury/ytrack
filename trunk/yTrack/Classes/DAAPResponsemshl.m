//
//  DAAPResponsemshl.m
//  yTrack
//
//  Created by Fabrice Dewasmes on 09/06/10.
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

#import "DAAPResponsemshl.h"
#import "DAAPResponsemlit.h"

@implementation DAAPResponsemshl

@synthesize indexList;

- (void) setMlit:(DAAPResponsemlit *)mlit{
	if (indexList == nil) {
		NSMutableArray *temp = [[NSMutableArray alloc] init];
		self.indexList = temp;
		[temp release];
	}
	[self.indexList addObject:mlit];
}

- (void) parse{
	[self parse:self.data];
}

- (void)dealloc {
	[self.indexList release];
    [super dealloc];
}


@end
