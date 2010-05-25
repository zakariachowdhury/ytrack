//
//  DAAPResponse.h
//  BonjourWeb
//
//  Created by Fabrice Dewasmes on 18/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "DAAPResponseDelegate.h"


@interface DAAPResponse : NSObject <DAAPResponseDelegate>{
	NSString * commandName;
}

@property (copy, nonatomic) NSString *commandName;

@end
