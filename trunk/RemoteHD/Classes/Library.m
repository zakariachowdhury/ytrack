//
//  Library.m
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 22/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import "Library.h"

@interface Library()

@property (nonatomic, retain, readwrite) NSDictionary* encodedForm;
@property (nonatomic, copy, readwrite) NSString *servicename;
@property (nonatomic, copy, readwrite) NSString *pairingGUID;
@property (nonatomic, copy, readwrite) NSString *host;
@property (nonatomic, copy, readwrite) NSString *port;
@property (nonatomic, retain, readwrite) NSDictionary *TXT;

@end


@implementation Library

@synthesize encodedForm = _encodedForm;

@synthesize servicename;
@synthesize pairingGUID;
@synthesize host;
@synthesize port;
@synthesize TXT;

- (id) initWithDictionary:(NSDictionary *)dict{
	if ((self = [super init])) {
		self.encodedForm = dict;
		self.servicename = [dict objectForKey:kLibraryServicenameKey];
		self.pairingGUID = [dict objectForKey:kLibraryPairingGUIDKey];
		self.host = [dict objectForKey:kLibraryHostKey];
		self.port = [dict objectForKey:kLibraryPortKey];
		self.TXT = [dict objectForKey:kLibraryTXTKey];
	}
	return self;
}

- (id) initWithServiceName:(NSString *)service pairingGUID:(NSString *)pairGUID host:(NSString *)theHost port:(NSString *)thePort TXT:(NSDictionary *)theTXT{
	NSDictionary *dict = [NSDictionary dictionaryWithObjects:[NSArray arrayWithObjects:service, pairGUID, theHost, thePort, theTXT, nil] 
													 forKeys:[NSArray arrayWithObjects:kLibraryServicenameKey, kLibraryPairingGUIDKey, kLibraryHostKey, kLibraryPortKey, kLibraryTXTKey, nil]];
	return [self initWithDictionary:dict];
}

- (NSDictionary *) getAsDictionary{
	return self.encodedForm;
}

- (void)dealloc {
    [self.servicename release];
    [self.pairingGUID release];
    [self.host release];
	[self.port release];
	[self.TXT release];
    [super dealloc];
}



@end
