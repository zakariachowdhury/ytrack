//
//  DAAPRequestReply.m
//  BonjourWeb
//
//  Created by Fabrice Dewasmes on 15/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import "DAAPRequestReply.h"
#import "HexDumpUtility.h"
#import "SessionManager.h"
#import "DAAPResponseerror.h"


@implementation DAAPRequestReply

@synthesize delegate;


- (void) asyncRequestAndParse:(NSURL *)url{
	NSLog(@"async requesting %@",url);
	if(url == nil) 
		url = [NSURL URLWithString:@"error"];
	lastUrl = url;
    
    NSMutableURLRequest* request = [NSMutableURLRequest requestWithURL:url
														   cachePolicy:NSURLRequestReloadIgnoringLocalAndRemoteCacheData
													   timeoutInterval:43200];
	[request setValue:@"1" forHTTPHeaderField:@"Viewer-Only-Client"];
	NSURLConnection *conn =[[NSURLConnection alloc]
							initWithRequest:request delegate:self];
    self.connection = conn;
	[conn release];
}

- (void)connection:(NSURLConnection *)theConnection didFailWithError:(NSError *)error {
	assert(theConnection == self.connection);
	NSLog(@"AsyncDAAPRequestReply - %@, %d, %@", [error localizedDescription], error.code, error.domain);
	[self.connection cancel];
	self.connection = nil;
	if (error.code == NSURLErrorCannotConnectToHost) {
		if([delegate respondsToSelector:@selector(cantConnect)])
			[delegate cantConnect];
	} else if (error.code == NSURLErrorTimedOut) {
		if([delegate respondsToSelector:@selector(connectionTimedOut)])
			[delegate connectionTimedOut];
	}
}

- (void)connection:(NSURLConnection *)theConnection
	didReceiveData:(NSData *)incrementalData {
	NSLog(@"%@",lastUrl);
	NSLog(@"%@",theConnection);
	assert(theConnection == self.connection);
    if (self.data==nil) {
		NSMutableData *temp = [[NSMutableData alloc] initWithCapacity:2048];
		self.data = temp;
		[temp release];
    }
    [self.data appendData:incrementalData];
}

- (void)connectionDidFinishLoading:(NSURLConnection*)theConnection {
	assert(theConnection == self.connection);
	[HexDumpUtility printHexDumpToConsole:data];
	
	NSString *command = [DAAPRequestReply parseCommandName:data atPosition:0];
	NSString *clazz = [NSString stringWithFormat:@"DAAPResponse%@",command];
	
	id response = [[NSClassFromString(clazz) alloc] initWithData:data];
	[response performSelector:@selector(parse)];
	
    self.data = nil;
	self.connection = nil;
	if (delegate != nil) {
		if([delegate respondsToSelector:@selector(didFinishLoading:)])
			[delegate didFinishLoading:response];
	}
	
	[response release];
}


+ (DAAPResponse *) onTheFlyRequestAndParseResponse:(NSURL *) url {
	NSURLResponse * resp;
	NSError *error;
	NSMutableURLRequest * urlRequest = [NSMutableURLRequest requestWithURL:url];
	[urlRequest setValue:@"1" forHTTPHeaderField:@"Viewer-Only-Client"];
	NSData *dat = [NSURLConnection sendSynchronousRequest:urlRequest returningResponse:&resp error:&error];
	//[HexDumpUtility printHexDumpToConsole:dat];

	NSString *command = [self parseCommandName:dat atPosition:0];
	if (command == nil) {
		return [[DAAPResponseerror alloc] initWithData:dat];
	}
	NSString *clazz = [NSString stringWithFormat:@"DAAPResponse%@",command];
	
	
	DAAPResponse *response = [[[NSClassFromString(clazz) alloc] initWithData:dat] autorelease];
	[response performSelector:@selector(parse)];
	return response;
}

+ (UIImage *) imageFromUrl:(NSURL *) url {
	NSURLResponse * resp;
	NSError *error;
	NSMutableURLRequest * urlRequest = [NSMutableURLRequest requestWithURL:url];
	[urlRequest setValue:@"1" forHTTPHeaderField:@"Viewer-Only-Client"];
	NSLog(@"sync requesting image from %@",url);
	NSData *dat = [NSURLConnection sendSynchronousRequest:urlRequest returningResponse:&resp error:&error];
	NSLog(@"END requesting image from %@",url);
	
	UIImage * image = [[[UIImage alloc] initWithData:dat] autorelease];
	return image;
}


+ (void) request:(NSURL *) url {
	NSLog(@"sync requesting one way %@",url);
	NSURLResponse * resp;
	NSError *error;
	NSMutableURLRequest * urlRequest = [NSMutableURLRequest requestWithURL:url];
	[urlRequest setValue:@"1" forHTTPHeaderField:@"Viewer-Only-Client"];
	[NSURLConnection sendSynchronousRequest:urlRequest returningResponse:&resp error:&error];
}

+ (void) parseSearchResponse:(NSData *) theData handle:(int)handle resp:(NSMutableDictionary *)dict{
	//DAAPResponse *response = [dict lastObject];
	int progress = 0;
	while (handle > 0) {
		NSString *command = [self parseCommandName:theData atPosition:progress];
		
		int length = [self parseLength:theData atPosition:progress+4];
		NSLog(@"command (%d) : %@",length,command);
		
		handle -= 8 + length;
		NSPredicate *branches = [NSPredicate
								 predicateWithFormat:@"SELF MATCHES %@", @"cmst|mlog|agal|mlcl|mshl|abro|abar|apso|caci|avdb|cmgt|aply|adbs|msrv|casp|mdcl"];
		
		
		NSPredicate *strings = [NSPredicate
								predicateWithFormat:@"SELF MATCHES %@", @"minm|cann|cana|cang|canl|asaa|asal|asar|ceWM|asdt|msts|mcna|ascm|asfm"];
		
		if ([command isEqualToString:@"mlit"]) {
			NSData *block = [theData subdataWithRange:NSMakeRange(progress+8, length)];
			NSString *str = [self parseString:block];
			NSString *cmdKey = [NSString stringWithFormat:@"%@[%06d]",command,progress];
			NSLog(@"%@ : %@",cmdKey,str);
			if (str != nil)
				[dict setObject:str forKey:cmdKey];
			else {
				NSLog(@"----------");
				[HexDumpUtility printHexDumpToConsole:block];
			}

		}
		else if ([branches evaluateWithObject:(NSString *)command] == YES) {
			NSData *block = [theData subdataWithRange:NSMakeRange(progress+8, length)];
			NSMutableDictionary *subDict = [[NSMutableDictionary alloc] init];
			if ([dict objectForKey:command] != nil) {
				NSString *cmdKey = [NSString stringWithFormat:@"%@[%06d]",command,progress];
				[dict setObject:subDict forKey:cmdKey];
			}else
				[dict setObject:subDict forKey:command];
			[self parseSearchResponse:block handle:length resp:subDict];
			
		} else if([strings evaluateWithObject:(NSString *)command] == YES){
			NSData *block = [theData subdataWithRange:NSMakeRange(progress+8, length)];
			NSString *str = [self parseString:block];
			NSLog(@"string : %@",str);
			if (str != nil)
				[dict setObject:str forKey:command];
		} else if (length == 1 || length == 2 || length == 4 || length == 8) {
			int pos = progress + 8;
			NSData * val = [theData subdataWithRange:NSMakeRange(pos, length)];
			
			switch (length) {
				case 1:
					[dict setObject:[NSNumber numberWithBool:[self parseBoolean:val]] forKey:command];
					break;
				case 2:
					[dict setObject:[NSNumber numberWithShort:[self parseShort:val]] forKey:command];
					break;
				case 4:
					[dict setObject:[NSNumber numberWithLong:[self parseLong:val]] forKey:command];
					break;
				case 8:
					[dict setObject:[NSNumber numberWithLongLong:[self parseLongLong:val]] forKey:command];
					break;
					
				default:
					break;
			}
		} 
		progress += 8 + length;
	}
}

+ (DAAPResponse *) searchAndParseResponse:(NSURL *) url {
	NSMutableDictionary *dict = [[[NSMutableDictionary alloc] init] autorelease]; 
	NSURLResponse * resp;
	NSError *error;
	NSMutableURLRequest * urlRequest = [NSMutableURLRequest requestWithURL:url];
	[urlRequest setValue:@"1" forHTTPHeaderField:@"Viewer-Only-Client"];
	NSData *dat = [NSURLConnection sendSynchronousRequest:urlRequest returningResponse:&resp error:&error];
	[HexDumpUtility printHexDumpToConsole:dat];
	[self parseSearchResponse:dat handle:[dat length] resp:dict];
	NSDictionary * retValue = [NSDictionary dictionaryWithDictionary:dict];
	NSString *clazz;
	for (id key in retValue) {
		NSLog(@"%@",key);
		clazz = [NSString stringWithFormat:@"DAAPResponse%@",key];
	}
	DAAPResponse *response = (DAAPResponse *)[[[NSClassFromString(clazz) alloc] init] autorelease];
	[response didFinishRawParsing:retValue];
	return response;
}

- (void)dealloc {
    [connection cancel];
    [connection release];
    [data release];
    [super dealloc];
}


@end
