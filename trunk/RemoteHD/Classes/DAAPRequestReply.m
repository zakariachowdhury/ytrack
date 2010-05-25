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

+ (DAAPResponse *) requestAndParseResponse:(NSURL *) url {
	NSMutableDictionary *dict = [[NSMutableDictionary alloc] init]; 
	NSURLResponse * resp;
	NSError *error;
	NSMutableURLRequest * urlRequest = [NSMutableURLRequest requestWithURL:url];
	[urlRequest setValue:@"1" forHTTPHeaderField:@"Viewer-Only-Client"];
	NSData *data = [NSURLConnection sendSynchronousRequest:urlRequest returningResponse:&resp error:&error];
	[HexDumpUtility printHexDumpToConsole:data];
	[self parseResponse:data handle:[data length] resp:dict];
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


+ (void) request:(NSURL *) url {
	NSURLResponse * resp;
	NSError *error;
	NSMutableURLRequest * urlRequest = [NSMutableURLRequest requestWithURL:url];
	[urlRequest setValue:@"1" forHTTPHeaderField:@"Viewer-Only-Client"];
	[NSURLConnection sendSynchronousRequest:urlRequest returningResponse:&resp error:&error];
	
}

+ (NSDictionary *) requestAndParseResponse:(NSURL *) url listener:(id<TagListener>)listener {
	NSMutableDictionary *dict = [[[NSMutableDictionary alloc] init] autorelease]; 
	NSURLResponse * resp;
	NSError *error;
	NSMutableURLRequest * urlRequest = [NSMutableURLRequest requestWithURL:url];
	[urlRequest setValue:@"1" forHTTPHeaderField:@"Viewer-Only-Client"];
	NSData *data = [NSURLConnection sendSynchronousRequest:urlRequest returningResponse:&resp error:&error];
	[HexDumpUtility printHexDumpToConsole:data];
	[self parseResponse:data handle:[data length] resp:dict listener:listener];
	NSDictionary * retValue = [NSDictionary dictionaryWithDictionary:dict];
	return retValue;
}

+ (NSArray *) smartRequestAndParseResponse:(NSURL *) url {
	NSMutableArray *dict = [[[NSMutableArray alloc] init] autorelease]; 
	NSURLResponse * resp;
	NSError *error;
	NSMutableURLRequest * urlRequest = [NSMutableURLRequest requestWithURL:url];
	[urlRequest setValue:@"1" forHTTPHeaderField:@"Viewer-Only-Client"];
	NSData *data = [NSURLConnection sendSynchronousRequest:urlRequest returningResponse:&resp error:&error];
	[HexDumpUtility printHexDumpToConsole:data];
	[self smartParseResponse:data handle:[data length] resp:dict];
	NSArray * retValue = [NSArray arrayWithArray:dict];
	return retValue;
}

+ (NSString *) parseCommandName:(NSData *) data atPosition:(int)position{
	UInt8 *command;
	[data getBytes:&command range:NSMakeRange(position,4)];
	NSString * str = [[[NSString alloc] initWithBytes:&command length:4 encoding:NSISOLatin1StringEncoding] autorelease];
	return str;
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

+ (void) parseResponse:(NSData *) data handle:(int)handle resp:(NSMutableDictionary *)dict{
	//DAAPResponse *response = [dict lastObject];
	int progress = 0;
	while (handle > 0) {
		NSString *command = [self parseCommandName:data atPosition:progress];
		
		int length = [self parseLength:data atPosition:progress+4];
		//NSLog(@"command (%d) : %@",length,command);
		
		handle -= 8 + length;
		NSPredicate *branches = [NSPredicate
								 predicateWithFormat:@"SELF MATCHES %@", @"cmst|mlog|agal|mlcl|mshl|abro|abar|apso|caci|avdb|cmgt|aply|adbs|msrv|casp|mdcl|mlit|mccr|gmlc"];
		
		
		NSPredicate *strings = [NSPredicate
								predicateWithFormat:@"SELF MATCHES %@", @"minm|cann|cana|cang|canl|asaa|asal|asar|ceWM|asdt|msts|mcna|ascm|asfm|mcnm"];
		
		if ([branches evaluateWithObject:(NSString *)command] == YES) {
			NSData *block = [data subdataWithRange:NSMakeRange(progress+8, length)];
			NSMutableDictionary *subDict = [[NSMutableDictionary alloc] init];
			if ([dict objectForKey:command] != nil) {
				NSString *cmdKey = [NSString stringWithFormat:@"%@[%06d]",command,progress];
				[dict setObject:subDict forKey:cmdKey];
			}else
				[dict setObject:subDict forKey:command];
			[self parseResponse:block handle:length resp:subDict];
			
		} else if([strings evaluateWithObject:(NSString *)command] == YES){
			NSData *block = [data subdataWithRange:NSMakeRange(progress+8, length)];
			NSString *str = [self parseString:block];
			//NSLog(@"string : %@",str);
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



+ (void) parseResponse:(NSData *) data handle:(int)handle resp:(NSMutableDictionary *)dict listener:(id<TagListener>) listener{
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
			[listener foundTag:str];
		} 
		if ([branches evaluateWithObject:(NSString *)command] == YES) {
			NSData *block = [data subdataWithRange:NSMakeRange(progress+8, length)];
			NSMutableDictionary *subDict = [[NSMutableDictionary alloc] init];
			[dict setObject:subDict forKey:command];
			[self parseResponse:block handle:length resp:subDict listener:listener];
			
		} else if([strings evaluateWithObject:(NSString *)command] == YES){
			NSData *block = [data subdataWithRange:NSMakeRange(progress+8, length)];
			NSString *str = [self parseString:block];
			NSLog(@"string : %@",str);
			
			/*NSString * com = [command stringByReplacingCharactersInRange:NSMakeRange(0, 1) withString:[[command substringToIndex:1] uppercaseString]];
			[response performSelector:NSSelectorFromString([NSString stringWithFormat:@"set%@:",com]) withObject:str];*/
			if (str != nil)
				[dict setObject:str forKey:command];
		} else if (length == 1 || length == 2 || length == 4 || length == 8) {
			int pos = progress + 8;
			NSData * val = [data subdataWithRange:NSMakeRange(pos, length)];
			
			//NSString * com = [command stringByReplacingCharactersInRange:NSMakeRange(0, 1) withString:[[command substringToIndex:1] uppercaseString]];
			
			switch (length) {
				case 1:
					//[response performSelector:NSSelectorFromString([NSString stringWithFormat:@"set%@:",com]) withObject:[NSNumber numberWithBool:[self parseBoolean:val]]];
					[dict setObject:[NSNumber numberWithBool:[self parseBoolean:val]] forKey:command];
					break;
				case 2:
					//[response performSelector:NSSelectorFromString([NSString stringWithFormat:@"set%@:",com]) withObject:[NSNumber numberWithShort:[self parseShort:val]]];
					[dict setObject:[NSNumber numberWithShort:[self parseShort:val]] forKey:command];
					break;
				case 4:
					//[response performSelector:NSSelectorFromString([NSString stringWithFormat:@"set%@:",com]) withObject:[NSNumber numberWithLong:[self parseLong:val]]];
					[dict setObject:[NSNumber numberWithLong:[self parseLong:val]] forKey:command];
					break;
				case 8:
					//[response performSelector:NSSelectorFromString([NSString stringWithFormat:@"set%@:",com]) withObject:[NSNumber numberWithLongLong:[self parseLongLong:val]]];
					[dict setObject:[NSNumber numberWithLongLong:[self parseLongLong:val]] forKey:command];
					break;
					
				default:
					break;
			}
		} 
		progress += 8 + length;
	}
}


+ (void) smartParseResponse:(NSData *) data handle:(int)handle resp:(NSMutableArray *)dict{
	DAAPResponse *response = [dict lastObject];
	int progress = 0;
	while (handle > 0) {
		NSString *command = [self parseCommandName:data atPosition:progress];
		
		int length = [self parseLength:data atPosition:progress+4];
		NSLog(@"command (%d) : %@",length,command);
		
		handle -= 8 + length;
		NSPredicate *branches = [NSPredicate
								 predicateWithFormat:@"SELF MATCHES %@", @"cmst|mlog|agal|mlcl|mshl|mlit|abro|abar|apso|caci|avdb|cmgt|aply|adbs|msrv|casp|mdcl"];
		
		
		NSPredicate *strings = [NSPredicate
								predicateWithFormat:@"SELF MATCHES %@", @"minm|cann|cana|cang|canl|asaa|asal|asar|ceWM|asdt|msts|mcna|ascm|asfm"];
		
		
		if ([branches evaluateWithObject:(NSString *)command] == YES) {
			NSData *block = [data subdataWithRange:NSMakeRange(progress+8, length)];
			NSString *clazz = [NSString stringWithFormat:@"DAAPResponse%@",command];
			id object = [[NSClassFromString(clazz) alloc] init];
			[dict addObject:object];
			[self smartParseResponse:block handle:length resp:dict];
			
		} else if([strings evaluateWithObject:(NSString *)command] == YES){
			NSData *block = [data subdataWithRange:NSMakeRange(progress+8, length)];
			NSString *str = [self parseString:block];
			NSLog(@"string : %@",str);
			NSString * com = [command stringByReplacingCharactersInRange:NSMakeRange(0, 1) withString:[[command substringToIndex:1] uppercaseString]];
			[response performSelector:NSSelectorFromString([NSString stringWithFormat:@"set%@:",com]) withObject:str];
			//[dict setObject:str forKey:command];
		} else if (length == 1 || length == 2 || length == 4 || length == 8) {
			int pos = progress + 8;
			NSData * val = [data subdataWithRange:NSMakeRange(pos, length)];
			
			NSString * com = [command stringByReplacingCharactersInRange:NSMakeRange(0, 1) withString:[[command substringToIndex:1] uppercaseString]];
			
			switch (length) {
				case 1:
					[response performSelector:NSSelectorFromString([NSString stringWithFormat:@"set%@:",com]) withObject:[NSNumber numberWithBool:[self parseBoolean:val]]];
					break;
				case 2:
					[response performSelector:NSSelectorFromString([NSString stringWithFormat:@"set%@:",com]) withObject:[NSNumber numberWithShort:[self parseShort:val]]];
					break;
				case 4:
					[response performSelector:NSSelectorFromString([NSString stringWithFormat:@"set%@:",com]) withObject:[NSNumber numberWithLong:[self parseLong:val]]];
					break;
				case 8:
					[response performSelector:NSSelectorFromString([NSString stringWithFormat:@"set%@:",com]) withObject:[NSNumber numberWithLongLong:[self parseLongLong:val]]];
					break;

				default:
					break;
			}
		} 
		progress += 8 + length;
	}
}


@end
