//
//  DAAPQuery.m
//  yTrack
//
//  Created by Fabrice Dewasmes on 01/07/11.
//  Copyright 2011 __MyCompanyName__. All rights reserved.
//

#import "DAAPQuery.h"

@interface DAAPQuery()

@property (nonatomic, retain) NSDictionary *parameters;

-(NSString*)urlEscape:(NSString *)unencodedString;

@end

@implementation DAAPQuery
@synthesize parameters = _parameters;

- (void) addParameter:(NSString *)parameter value:(NSString *)value{
    if (!self.parameters) {
        self.parameters = [NSDictionary dictionaryWithObject:value forKey:parameter];
    } else {
        [self.parameters setValue:value forKey:parameter];
    }
}
- (NSURL *) appendQueryToURL:(NSURL *)baseURL{
    NSMutableString *urlWithQuerystring = [[[NSMutableString alloc] initWithString:[baseURL absoluteString]] autorelease];
	// Convert the params into a query string
	if (self.parameters) {
		for(id key in self.parameters) {
			NSString *sKey = [key description];
			NSString *sVal = [[self.parameters objectForKey:key] description];
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
                                                                      (CFStringRef)@"!*'\"();:@&=+$,/?%#[]% ",
                                                                      kCFStringEncodingUTF8);
	return [s autorelease]; // Due to the 'create rule' we own the above and must autorelease it
}

@end
