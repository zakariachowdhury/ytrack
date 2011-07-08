//
//  DAAPResponse.m
//  yTrack
//
//  Created by Fabrice Dewasmes on 18/05/10.
//  Copyright 2010 Fabrice Dewasmes. All rights reserved.
//  
//  This file is part of yTrack.
//  
//  yTrack is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//  
//  yTrack is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//  
//  You should have received a copy of the GNU General Public License
//  along with yTrack.  If not, see <http://www.gnu.org/licenses/>.
//

#import "DAAPResponse.h"
#import "DDLog.h"

#ifdef CONFIGURATION_DEBUG
static const int ddLogLevel = LOG_LEVEL_INFO;
#else
static const int ddLogLevel = LOG_LEVEL_WARN;
#endif

@implementation DAAPResponse

@synthesize commandName;
@synthesize data;

- (id) initWithData:(NSData *)theData{
	if ((self = [super init])) {
        self.data = theData;
    }
    return self;
}

static int containerCodes[] = {
    'cmst',
    'mlog',
    'agal',
    'mlcl',
    'mshl',
    'abro',
    'abar',
    'apso',
    'caci',
    'avdb',
    'cmgt',
    'aply',
    'adbs',
    'msrv',
    'casp',
    'mdcl',
    'mlit',
    'mccr',
    'glmc'
};

static int stringCodes[] = {
    'minm',
    'cann',
    'cana',
    'cang',
    'canl',
    'asaa',
    'asal',
    'asar',
    'ceWM',
    'asdt',
    'msts',
    'mcna',
    'ascm',
    'asfm',
    'mcnm',
    'mshc'
};

static int containerCodesSize = sizeof(containerCodes) / sizeof(int);
static int stringCodesSize = sizeof(stringCodes) / sizeof(int);

- (BOOL) isString:(int)commandCode{
    for (int i = 0;i<stringCodesSize;i++) {
        if (stringCodes[i] == commandCode) {
            return YES;
        }
    }
	return NO;
}

- (BOOL) isNumber:(int)length{
	return (length == 1 || length == 2 || length == 4 || length == 8);
}

- (BOOL) isBranch:(int)commandCode{
    for (int i = 0;i<containerCodesSize;i++) {
        if (containerCodes[i] == commandCode) {
            return YES;
        }
    }
	return NO;
}

- (NSString *) parseCommandName:(NSData *) theData atPosition:(int)position{
	UInt8 *command;
	[theData getBytes:&command range:NSMakeRange(position,4)];
	NSString * str = [[[NSString alloc] initWithBytes:&command length:4 encoding:NSISOLatin1StringEncoding] autorelease];
	return str;
}

- (int) parseCommandCode:(NSData *) theData atPosition:(int)position{
	int8_t * ptr = ((int8_t *)[theData bytes]+ position);
    int swapped = CFSwapInt32(*(uint32_t *) ptr);
    return swapped;
}

- (NSString *) getSelectorNameFromCommandName:(NSString *)command{
//	NSString *firstLetter = [[command substringToIndex:1] uppercaseString];
//	NSString *rest = [command substringFromIndex:1];
	NSString *test = [command capitalizedString];
	return [[@"set" stringByAppendingString:test] stringByAppendingString:@":"];
//	return [NSString stringWithFormat:@"set%@:",test];
}

- (NSString *) parseString:(NSData *) theData{
	NSString * str = [[[NSString alloc] initWithBytes:[theData bytes] length:[theData length] encoding:NSUTF8StringEncoding] autorelease];
	//[HexDumpUtility printHexDumpToConsole:data];
	return str;
}

- (void) getBytes:(Byte *)buffer fromData:(NSData *)theData length:(int)length{
	//[HexDumpUtility printHexDumpToConsole:data];
	Byte value[length];
	[theData getBytes:&value range:NSMakeRange(0, length)];
	
	for (int i = 0; i < length ; i ++) {
		buffer[i] = value[length - i - 1];
	}
	
}

- (BOOL) parseBoolean:(NSData *) theData{
	Byte res[1];
	[self getBytes:res fromData:theData length:1];
	NSValue *hop = [NSValue value:res withObjCType:@encode(short)];
	short test;
	[hop getValue:&test];
	/*	if (test) NSLog(@"TRUE");
	 else NSLog(@"FALSE");*/
	return test;
}


- (short) parseShort:(NSData *) theData{
	int16_t *temp = malloc(1);
	[theData getBytes:temp length:2];
	int16_t swapped = NSSwapShort(*temp);
	free(temp);
	return swapped;
}

- (long) parseLong:(NSData *) theData {
	int32_t *temp = malloc(1);
	[theData getBytes:temp length:4];
	int32_t swapped = NSSwapInt(*temp);
	free(temp);
	return swapped;
}

- (long long) parseLongLong:(NSData *)theData{
	
	int64_t *temp = malloc(1);
	[theData getBytes:temp length:8];
	int64_t swapped = NSSwapLongLong(*temp);
	free(temp);
	return swapped;
}

- (int) parseLength:(NSData *) theData atPosition:(int)pos{	
	int32_t *temp = malloc(1);
	[theData getBytes:temp range:NSMakeRange(pos, 4)];
	int32_t swapped = NSSwapInt(*temp);
	free(temp);
	return swapped;
}


- (NSNumber *) parseNumber:(NSData *)theData length:(int)length{
	NSNumber *retValue;
	switch (length) {
		case 1:
			retValue = [NSNumber numberWithShort:[self parseBoolean:theData]];	
			break;
		case 2:
			retValue = [NSNumber numberWithShort:[self parseShort:theData]];
			break;
		case 4:
			retValue = [NSNumber numberWithLong:[self parseLong:theData]];
			break;
		case 8:
			retValue = [NSNumber numberWithLongLong:[self parseLongLong:theData]];
			break;
		default:
			return nil;
	}
	return retValue;
}

- (void) parse:(NSData *)theData{
	int progress = 0;
	int handle = theData.length;
	while (handle > 0) {
		NSString *command = [self parseCommandName:theData atPosition:progress];
        int commandCode = [self parseCommandCode:theData atPosition:progress];
		NSString *commandSetter = [self getSelectorNameFromCommandName:command];
		
		int length = [self parseLength:theData atPosition:progress+4];
		//NSLog(@"command (%d) : %@ - %@",length,command, commandSetter);
		
		
		// is current object interested in that command
		if (![self respondsToSelector:NSSelectorFromString(commandSetter)]){
			progress += 8 + length;
			handle -= 8 + length;
			  continue;
		}
			  
		handle -= 8 + length;
		NSData *block = [theData subdataWithRange:NSMakeRange(progress+8, length)];
		
		if ([self isBranch:commandCode]) {
			NSString *clazz = [NSString stringWithFormat:@"DAAPResponse%@",command];
			DAAPResponse *subCommand = (DAAPResponse *)[[NSClassFromString(clazz) alloc] initWithData:block];
			[subCommand parse];
			[self performSelector:NSSelectorFromString(commandSetter) withObject:subCommand];
			[subCommand release];
		} else if([self isString:commandCode]){			
			NSString *str = [self parseString:block];
			//NSLog(@"string : %@",str);
			[self performSelector:NSSelectorFromString(commandSetter) withObject:str];
		} else if ([self isNumber:length]) {
            NSNumber *num = [self parseNumber:block length:length];
            if (commandCode == 'mstt') {
                DDLogInfo(@"status code : %d",[num intValue]);
            }
			[self performSelector:NSSelectorFromString(commandSetter) withObject:num];
		} 
		//[block release];
		progress += 8 + length;
	}
}


- (void) parse{
	// delegate method to heriting classes
	int length = [self parseLength:self.data atPosition:4];
	self.data = [self.data subdataWithRange:NSMakeRange(8, length)];
	[self parse:self.data];
}

- (void)dealloc {
	[self.data release];
	[self.commandName release];
    [super dealloc];
}

@end
