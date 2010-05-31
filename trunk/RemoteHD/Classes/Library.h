//
//  Library.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 22/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>

#define kLibraryServicenameKey @"servicename"
#define kLibraryPairingGUIDKey @"pairingGUID"
#define kLibraryHostKey @"host"
#define kLibraryPortKey @"port"
#define kLibraryTXTKey @"TXT"

@interface Library : NSObject {
	NSString *servicename;
	NSString *pairingGUID;
	NSString *host;
	NSString *port;
	NSDictionary *TXT;
	@private
	NSDictionary *_encodedForm;
}

@property (nonatomic, copy, readonly) NSString *servicename;
@property (nonatomic, copy, readonly) NSString *pairingGUID;
@property (nonatomic, copy, readonly) NSString *host;
@property (nonatomic, copy, readonly) NSString *port;
@property (nonatomic, retain, readonly) NSDictionary *TXT;

- (id) initWithDictionary:(NSDictionary *)dict;
- (id) initWithServiceName:(NSString *)service pairingGUID:(NSString *)pairGUID host:(NSString *)theHost port:(NSString *)thePort TXT:(NSDictionary *)theTXT;
- (NSDictionary *) getAsDictionary;

@end
