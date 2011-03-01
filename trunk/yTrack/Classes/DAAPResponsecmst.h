//
//  DAAPResponsecmst.h
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

#import <Foundation/Foundation.h>
#import "DAAPResponse.h"

@interface DAAPResponsecmst : DAAPResponse {
	NSNumber *mstt;
	NSNumber *cmsr;
	NSNumber *caps;
	NSNumber *cash;
	NSNumber *carp;
	NSNumber *cavc;
	NSNumber *caas;
	NSNumber *caar;
	NSNumber *canp;
	NSString *cann;
	NSString *cana;
	NSString *canl;
	NSString *cang;
	NSNumber *asai;
	NSNumber *cmmk;
	NSNumber *ceGS;
	NSNumber *cant;
	NSNumber *cast;
}

@property (nonatomic, retain) NSNumber *mstt;
@property (nonatomic, retain) NSNumber *cmsr;
@property (nonatomic, retain) NSNumber *caps;
@property (nonatomic, retain) NSNumber *cash;
@property (nonatomic, retain) NSNumber *carp;
@property (nonatomic, retain) NSNumber *cavc;
@property (nonatomic, retain) NSNumber *caas;
@property (nonatomic, retain) NSNumber *caar;
@property (nonatomic, retain) NSNumber *canp;
@property (nonatomic, copy) NSString *cann;
@property (nonatomic, copy) NSString *cana;
@property (nonatomic, copy) NSString *canl;
@property (nonatomic, copy) NSString *cang;
@property (nonatomic, retain) NSNumber *asai;
@property (nonatomic, retain) NSNumber *cmmk;
@property (nonatomic, retain, setter=setCegs) NSNumber *ceGS;
@property (nonatomic, retain) NSNumber *cant;
@property (nonatomic, retain) NSNumber *cast;

@end
