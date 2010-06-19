//
//  RemoteSpeaker.h
//  BonjourWeb
//
//  Created by Fabrice Dewasmes on 18/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>


@interface RemoteSpeaker : NSObject {
	NSString *speakerName;
	BOOL on;
	NSNumber *spId;
}

@property (nonatomic, copy) NSString *speakerName;
@property (nonatomic) BOOL on;
@property (nonatomic, retain) NSNumber *spId;

@end