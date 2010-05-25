//
//  PinCodeController.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 20/05/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "HTTPServer.h"
#import "MyHTTPConnection.h"
#import "DAAPRequestReply.h"

@protocol PincodeDelegate

- (void)didFinishWithPinCode:(NSString *)serviceName guid:(NSString *)guid;

@end

@interface PinCodeController : UIViewController <PairingServerDelegate>{
	id<PincodeDelegate> delegate;
	HTTPServer *httpServer;
	IBOutlet UILabel *pinCode;
	int pin;
	int GUID;
}

@property (nonatomic, retain) id<PincodeDelegate> delegate;

- (IBAction) cancelButtonPressed:(id)sender;

@end
