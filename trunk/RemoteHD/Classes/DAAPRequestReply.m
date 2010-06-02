//
//  DAAPRequestReply.m
//  BonjourWeb
//
//  Created by Fabrice Dewasmes on 15/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import "DAAPRequestReply.h"
#import "HexDumpUtility.h"


@implementation DAAPRequestReply

@synthesize delegate;

+ (DAAPResponse *) searchAndParseResponse:(NSURL *) url {
	NSMutableDictionary *dict = [[[NSMutableDictionary alloc] init] autorelease]; 
	NSURLResponse * resp;
	NSError *error;
	NSMutableURLRequest * urlRequest = [NSMutableURLRequest requestWithURL:url];
	[urlRequest setValue:@"1" forHTTPHeaderField:@"Viewer-Only-Client"];
	NSData *data = [NSURLConnection sendSynchronousRequest:urlRequest returningResponse:&resp error:&error];
	[HexDumpUtility printHexDumpToConsole:data];
	[self parseSearchResponse:data handle:[data length] resp:dict];
	NSDictionary * retValue = [NSDictionary dictionaryWithDictionary:dict];
	NSString *clazz;
	for (id key in retValue) {
		NSLog(@"%@",key);
		clazz = [NSString stringWithFormat:@"DAAPResponse%@",key];
	}
	DAAPResponse *response = (DAAPResponse *)[[NSClassFromString(clazz) alloc] init];
	[response didFinishRawParsing:retValue];
	return response;
}

+ (NSString *) parseCommandName:(NSData *) data atPosition:(int)position{
	UInt8 *command;
	[data getBytes:&command range:NSMakeRange(position,4)];
	NSString * str = [[[NSString alloc] initWithBytes:&command length:4 encoding:NSISOLatin1StringEncoding] autorelease];
	return str;
}



- (void) asyncRequestAndParse:(NSURL *)url{
	if(url == nil) 
		url = [NSURL URLWithString:@"error"];
	
    if (connection!=nil) { [connection release]; }
    if (data!=nil) { [data release]; }
    NSMutableURLRequest* request = [NSMutableURLRequest requestWithURL:url
														   cachePolicy:NSURLRequestUseProtocolCachePolicy
													   timeoutInterval:60.0];
	[request setValue:@"1" forHTTPHeaderField:@"Viewer-Only-Client"];
    connection = [[NSURLConnection alloc]
				  initWithRequest:request delegate:self];
}

- (void)connection:(NSURLConnection *)connection didFailWithError:(NSError *)error {
	NSLog(@"AsyncDAAPRequest - %@", [error localizedDescription]);
}

- (void)connection:(NSURLConnection *)theConnection
	didReceiveData:(NSData *)incrementalData {
    if (data==nil) {
		data =
		[[NSMutableData alloc] initWithCapacity:2048];
    }
    [data appendData:incrementalData];
}

- (void)connectionDidFinishLoading:(NSURLConnection*)theConnection {
	
    [connection release];
    connection=nil;
		
	//[HexDumpUtility printHexDumpToConsole:data];
	
	NSString *command = [DAAPRequestReply parseCommandName:data atPosition:0];
	NSString *clazz = [NSString stringWithFormat:@"DAAPResponse%@",command];
	
	id response = [[NSClassFromString(clazz) alloc] initWithData:data];
	[response performSelector:@selector(parse)];
	
    [data release];
    data=nil;
	
	if([delegate respondsToSelector:@selector(didFinishLoading:)])
		[delegate didFinishLoading:response];
	[response release];
}

//method used to cancel the connection when don't need anymore the AsyncImageView object
- (void)cancelConnection {
	[connection cancel];
}


+ (id) onTheFlyRequestAndParseResponse:(NSURL *) url {
	NSURLResponse * resp;
	NSError *error;
	NSMutableURLRequest * urlRequest = [NSMutableURLRequest requestWithURL:url];
	[urlRequest setValue:@"1" forHTTPHeaderField:@"Viewer-Only-Client"];
	NSLog(@"requesting %@",url);
	NSData *data = [NSURLConnection sendSynchronousRequest:urlRequest returningResponse:&resp error:&error];
	NSLog(@"END requesting %@",url);
	//[HexDumpUtility printHexDumpToConsole:data];
	NSLog(@"parsing %@",url);
	NSString *command = [self parseCommandName:data atPosition:0];
	NSString *clazz = [NSString stringWithFormat:@"DAAPResponse%@",command];
	
	id response = [[[NSClassFromString(clazz) alloc] initWithData:data] autorelease];
	[response performSelector:@selector(parse)];
	NSLog(@"END Parsing %@",url);
	return response;
}


+ (void) request:(NSURL *) url {
	NSURLResponse * resp;
	NSError *error;
	NSMutableURLRequest * urlRequest = [NSMutableURLRequest requestWithURL:url];
	[urlRequest setValue:@"1" forHTTPHeaderField:@"Viewer-Only-Client"];
	[NSURLConnection sendSynchronousRequest:urlRequest returningResponse:&resp error:&error];
	
}



+ (NSString *) parseString:(NSData *) data{
	NSString * str = [[[NSString alloc] initWithBytes:[data bytes] length:[data length] encoding:NSUTF8StringEncoding] autorelease];
	//[HexDumpUtility printHexDumpToConsole:data];
	return str;
}

+ (void) getBytes:(Byte *)buffer fromData:(NSData *)data length:(int)length{
	//[HexDumpUtility printHexDumpToConsole:data];
	Byte value[length];
	[data getBytes:&value range:NSMakeRange(0, length)];
	
	for (int i = 0; i < length ; i ++) {
		buffer[i] = value[length - i - 1];
	}
	
}
+ (BOOL) parseBoolean:(NSData *) data{
	Byte res[1];
	[self getBytes:res fromData:data length:1];
	NSValue *hop = [NSValue value:res withObjCType:@encode(BOOL)];
	BOOL test;
	[hop getValue:&test];
/*	if (test) NSLog(@"TRUE");
	else NSLog(@"FALSE");*/
	return test;
}


+ (short) parseShort:(NSData *) data{
	Byte res[2];
	[self getBytes:res fromData:data length:2];
	NSValue *hop = [NSValue value:res withObjCType:@encode(short)];
	short test;
	[hop getValue:&test];
//	NSLog(@"%d",test);
	return test;
}

+ (long) parseLong:(NSData *) data {
	Byte res[4];
	[self getBytes:res fromData:data length:4];
	NSValue *hop = [NSValue value:res withObjCType:@encode(long)];
	long test;
	[hop getValue:&test];
//	NSLog(@"%d",test);
	return test;
}

+ (long long) parseLongLong:(NSData *)data{
	Byte res[8];
	[self getBytes:res fromData:data length:8];
	NSValue *hop = [NSValue value:res withObjCType:@encode(long long)];
	long long test;
	[hop getValue:&test];
//	NSLog(@"%qX",test);
	return test;
}

+ (int) parseLength:(NSData *) data atPosition:(int)pos{
	Byte value[4];
	Byte finalValue[4];
	int test;
	int length = 4;
	[data getBytes:&value range:NSMakeRange(pos, length)];
	
	// we have to revert endianness
	for (int i = 0; i < length ; i ++) {
		finalValue[i] = value[length - i - 1];
	}
	
	NSValue *hop = [NSValue value:&finalValue withObjCType:@encode(int)];
	[hop getValue:&test];
	
	return test;
}


+ (void) parseSearchResponse:(NSData *) data handle:(int)handle resp:(NSMutableDictionary *)dict{
	//DAAPResponse *response = [dict lastObject];
	int progress = 0;
	while (handle > 0) {
		NSString *command = [self parseCommandName:data atPosition:progress];
		
		int length = [self parseLength:data atPosition:progress+4];
		NSLog(@"command (%d) : %@",length,command);
		
		handle -= 8 + length;
		NSPredicate *branches = [NSPredicate
								 predicateWithFormat:@"SELF MATCHES %@", @"cmst|mlog|agal|mlcl|mshl|abro|abar|apso|caci|avdb|cmgt|aply|adbs|msrv|casp|mdcl"];
		
		
		NSPredicate *strings = [NSPredicate
								predicateWithFormat:@"SELF MATCHES %@", @"minm|cann|cana|cang|canl|asaa|asal|asar|ceWM|asdt|msts|mcna|ascm|asfm"];
		
		if ([command isEqualToString:@"mlit"]) {
			NSData *block = [data subdataWithRange:NSMakeRange(progress+8, length)];
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
			NSData *block = [data subdataWithRange:NSMakeRange(progress+8, length)];
			NSMutableDictionary *subDict = [[NSMutableDictionary alloc] init];
			if ([dict objectForKey:command] != nil) {
				NSString *cmdKey = [NSString stringWithFormat:@"%@[%06d]",command,progress];
				[dict setObject:subDict forKey:cmdKey];
			}else
				[dict setObject:subDict forKey:command];
			[self parseSearchResponse:block handle:length resp:subDict];
			
		} else if([strings evaluateWithObject:(NSString *)command] == YES){
			NSData *block = [data subdataWithRange:NSMakeRange(progress+8, length)];
			NSString *str = [self parseString:block];
			NSLog(@"string : %@",str);
			if (str != nil)
				[dict setObject:str forKey:command];
		} else if (length == 1 || length == 2 || length == 4 || length == 8) {
			int pos = progress + 8;
			NSData * val = [data subdataWithRange:NSMakeRange(pos, length)];
			
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

- (void)dealloc {
    [connection cancel];
    [connection release];
    [data release];
	[delegate release];
    [super dealloc];
}


@end
