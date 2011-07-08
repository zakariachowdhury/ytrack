//
//  NSURL+parameters.m
//  yTrack
//
//  Created by Fabrice Dewasmes on 01/07/11.
//  Copyright 2011 __MyCompanyName__. All rights reserved.
//

#import "NSURL+parameters.h"


@implementation NSURL(parameters)

- (NSURL *) appendQuery:(NSDictionary *)parameters{
    NSMutableString *urlWithQuerystring = [[[NSMutableString alloc] initWithString:[self absoluteString]] autorelease];
	// Convert the params into a query string
	if (parameters) {
		for(id key in parameters) {
			NSString *sKey = [key description];
			NSString *sVal = [[parameters objectForKey:key] description];
			// Do we need to add ?k=v or &k=v ?
			if ([urlWithQuerystring rangeOfString:@"?"].location==NSNotFound) {
				[urlWithQuerystring appendFormat:@"?%@=%@", [self urlEscape:sKey], [self urlEscape:sVal]];
			} else {
				[urlWithQuerystring appendFormat:@"&%@=%@", [self urlEscape:sKey], [self urlEscape:sVal]];
			}
		}
	}
	return [NSURL URLWithString:urlWithQuerystring];
}

-(NSString*)urlEscape:(NSString *)unencodedString {
	NSString *s = (NSString *)CFURLCreateStringByAddingPercentEscapes(NULL,
                                                                      (CFStringRef)unencodedString,
                                                                      NULL,
                                                                      (CFStringRef)@"!*'\"();:@&=+$/?%#[]% ",
                                                                      kCFStringEncodingUTF8);
	return [s autorelease]; // Due to the 'create rule' we own the above and must autorelease it
}

@end
