//
//  DAAPResponseabro.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 23/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "DAAPResponse.h"


@interface DAAPResponseabro : DAAPResponse {
	
	NSNumber *mstt;
	NSNumber *muty;
	NSNumber *mtco;
	NSNumber *mrco;
	NSArray *res;
}

@property (nonatomic, assign) NSNumber *mstt;
@property (nonatomic, assign) NSNumber *muty;
@property (nonatomic, assign) NSNumber *mtco;
@property (nonatomic, assign) NSNumber *mrco;
@property (nonatomic, assign) NSArray *res;

@end
