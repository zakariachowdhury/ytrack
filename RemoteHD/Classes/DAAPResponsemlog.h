//
//  DAAPResponsemlog.h
//  BonjourWeb
//
//  Created by Fabrice Dewasmes on 18/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>


@interface DAAPResponsemlog : NSObject {
	NSNumber *mstt;
	NSNumber *mlid;

}

@property (nonatomic,retain) NSNumber *mstt;
@property (nonatomic,retain) NSNumber *mlid;

@end
