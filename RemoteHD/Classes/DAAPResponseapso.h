//
//  DAAPResponseapso.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 25/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "DAAPResponse.h"

@interface DAAPResponseapso : DAAPResponse {
	NSArray *res;
}

@property (nonatomic, retain) NSArray *res;

@end
