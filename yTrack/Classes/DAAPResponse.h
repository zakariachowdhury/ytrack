//
//  DAAPResponse.h
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

#import <Foundation/Foundation.h>

@interface DAAPResponse : NSObject {
	NSString * commandName;
	NSData *data;
}

@property (copy, nonatomic) NSString *commandName;
@property (retain, nonatomic) NSData *data;

- (id) initWithData:(NSData *)theData;

- (BOOL) isString:(NSString *)command;
- (BOOL) isNumber:(int)length;
- (BOOL) isBranch:(NSString *)command;
- (NSNumber *) parseNumber:(NSData *)data length:(int)length;
- (NSString *) parseString:(NSData *)data;
- (int) parseLength:(NSData *) data atPosition:(int)pos;
- (long long) parseLongLong:(NSData *)data;
- (long) parseLong:(NSData *) data;
- (short) parseShort:(NSData *) data;
- (BOOL) parseBoolean:(NSData *) data;
- (void) getBytes:(Byte *)buffer fromData:(NSData *)data length:(int)length;
- (NSString *) parseCommandName:(NSData *) data atPosition:(int)position;
- (void) parse;
- (void) parse:(NSData *)theData;
- (NSString *) getSelectorNameFromCommandName:(NSString *)command;

@end
