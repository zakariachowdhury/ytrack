//
//  DAAPResponseapso.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 25/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "DAAPResponse.h"
#import "DAAPResponsemlcl.h"

@interface DAAPResponseapso : DAAPResponse {
	NSNumber *mstt;
	NSArray *res;
	DAAPResponsemlcl *mlcl;
}

@property (nonatomic, retain) NSNumber *mstt;
@property (nonatomic, assign) NSArray *res;
@property (nonatomic, retain) DAAPResponsemlcl *mlcl;

@end
