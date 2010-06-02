//
//  DAAPResponsemlit.h
//  BonjourWeb
//
//  Created by Fabrice Dewasmes on 19/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "DAAPResponse.h"

@interface DAAPResponsemlit : DAAPResponse {
	NSNumber *miid;
	NSNumber *mper;
	NSString *minm;
	NSNumber *mimc;
	NSNumber *mctc;
	NSNumber *meds;
	NSNumber *abpl;
	NSNumber *mpco;
	NSNumber *aeSP;
	NSNumber *aePS;
	NSNumber *asai;
	NSNumber *aeSI;
	NSNumber *astn;
	NSString *asal;
	NSString *asar;
	int index;
}

@property (nonatomic, retain) NSNumber *miid;
@property (nonatomic, retain) NSNumber *mper;
@property (nonatomic, copy) NSString *minm;
@property (nonatomic, retain) NSNumber *mimc;
@property (nonatomic, retain) NSNumber *mctc;
@property (nonatomic, retain) NSNumber *meds;
@property (nonatomic, retain) NSNumber *abpl;
@property (nonatomic, retain) NSNumber *mpco;
@property (nonatomic, retain) NSNumber *aeSP;
@property (nonatomic, retain) NSNumber *aePS;
@property (nonatomic, retain) NSNumber *asai;
@property (nonatomic, retain) NSNumber *aeSI;
@property (nonatomic, retain) NSNumber *astn;
@property (nonatomic, copy) NSString *asal;
@property (nonatomic, copy) NSString *asar;
@property (nonatomic) int index;

@end
