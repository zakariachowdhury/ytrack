//
//  DAAPResponseabar.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 23/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>


@interface DAAPResponseabar : NSObject {
	NSNumber *mstt;
	NSString *mlit;
}

@property (nonatomic, retain) NSNumber *mstt;
@property (nonatomic, copy) NSString *mlit;

@end
