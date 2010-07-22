//
//  DAAPResponseDelegate.h
//  BonjourWeb
//
//  Created by Fabrice Dewasmes on 18/05/10.
//  Copyright 2010 Fabrice Dewasmes. All rights reserved.
//

#import <UIKit/UIKit.h>


@protocol DAAPResponseDelegate
- (void) didFinishRawParsing:(NSDictionary *)dict;
@end
