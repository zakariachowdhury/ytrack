//
//  DAAPResponsemlcl.h
//  BonjourWeb
//
//  Created by Fabrice Dewasmes on 19/05/10.
//  Copyright 2010 Fabrice Dewasmes. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "DAAPResponse.h"


@interface DAAPResponsemlcl : DAAPResponse {
	NSMutableArray *list;
	NSMutableDictionary *indexedList;
}

@property (nonatomic, retain) NSMutableArray *list;
@property (nonatomic, retain) NSMutableDictionary *indexedList;

@end
