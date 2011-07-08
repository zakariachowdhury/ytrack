//
//  DAAPQuery.h
//  yTrack
//
//  Created by Fabrice Dewasmes on 01/07/11.
//  Copyright 2011 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>


@interface DAAPQuery : NSObject {
@private
    NSDictionary *_parameters;
}

- (void) addParameter:(NSString *)parameter value:(NSString *)value;
- (NSURL *) appendQueryToURL:(NSURL *)baseURL;


@end
