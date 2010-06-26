//
//  DAAPResponsemlcl.m
//  BonjourWeb
//
//  Created by Fabrice Dewasmes on 19/05/10.
//  Copyright 2010 Fabrice Dewasmes. All rights reserved.
//

#import "DAAPResponsemlcl.h"
#import "HexDumpUtility.h"
#import "DAAPResponsemlit.h"


@implementation DAAPResponsemlcl

@synthesize list;
@synthesize indexedList;

- (void) setMlit:(DAAPResponsemlit *)mlit{
	if (list == nil) {
		NSMutableArray *temp = [[NSMutableArray alloc] init];
		self.list = temp;
		[temp release];
	}
	[self.list addObject:mlit];
	int position = [self.list count] - 1;
	mlit.index = position;
	NSString * firstLetter = [[mlit.minm substringToIndex:1] uppercaseString];
	if (indexedList == nil) {
		NSMutableDictionary *temp = [[NSMutableDictionary alloc] init];
		self.indexedList = temp;
		[temp release];
	}
	if ([firstLetter intValue] != 0) {
		firstLetter = @"#";
	}
	NSMutableArray *charTable = [indexedList objectForKey:firstLetter];
	if (charTable == nil) {
		charTable = [[NSMutableArray alloc] init];
		[indexedList setObject:charTable forKey:firstLetter];
		[charTable release];
	} else {
		[charTable addObject:mlit];
	}

}

- (void) parse{
	[self parse:self.data];
}

- (void)dealloc {
    [self.list release];
	[self.indexedList release];
    [super dealloc];
}

@end
