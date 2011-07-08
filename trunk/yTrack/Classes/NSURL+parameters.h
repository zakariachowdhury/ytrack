//
//  NSURL+parameters.h
//  yTrack
//
//  Created by Fabrice Dewasmes on 01/07/11.
//  Copyright 2011 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>


@interface NSURL(parameters) 
-(NSURL*) appendQuery:(NSDictionary *)parameters;
-(NSString*)urlEscape:(NSString *)unencodedString ;
@end
