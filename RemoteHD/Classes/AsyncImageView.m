//
//  AsyncImageView.m
//  HotCity
//
//  Created by Jerome on 7/7/09.
//  Copyright 2009 Pragma Consult SA. All rights reserved.
//

#import "AsyncImageView.h"
#include <math.h>

#import <QuartzCore/QuartzCore.h>

static inline double radians (double degrees) {return degrees * M_PI/180;}

@implementation AsyncImageView

@synthesize delegate;
@synthesize activityIndicator;

- (void)loadImageFromURL:(NSURL*)url  {
	//self.backgroundColor = [UIColor whiteColor];
	
	if(activityIndicator == nil) {
		self.activityIndicator = [[UIActivityIndicatorView alloc] initWithFrame:CGRectMake(self.frame.size.width/2 - 15, self.frame.size.height/2 - 15, 30.0, 30.0)];
		self.activityIndicator.activityIndicatorViewStyle = UIActivityIndicatorViewStyleGray;
		[self addSubview:self.activityIndicator];
	} else {
		[self bringSubviewToFront:self.activityIndicator];
	}

	
	
	if(loadingImageLabel == nil) {
		loadingImageLabel = [[UILabel alloc] initWithFrame:CGRectMake(self.frame.size.width/2 - 80, self.frame.size.height/2 + 20, 160.0, 20.0)];
		loadingImageLabel.text = [[NSBundle mainBundle] localizedStringForKey:@"loadingImage" 
																		value:@"Loading image" 
																		table:@"Localizations"];
		loadingImageLabel.textAlignment = UITextAlignmentCenter;
		loadingImageLabel.font = [UIFont systemFontOfSize:12];
		loadingImageLabel.textColor = [UIColor whiteColor];
		loadingImageLabel.backgroundColor = [UIColor clearColor];
		[self addSubview:loadingImageLabel];
	}
	self.activityIndicator.hidden = NO;
	loadingImageLabel.hidden = NO;
	[self.activityIndicator startAnimating];
	
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

- (void)loadImageNotAvailable {
	//UIImageView* imageView = [[[UIImageView alloc] initWithImage:[UIImage imageNamed:@"?.png"]] autorelease];
    //[self addSubview:imageView];
}

- (void)connection:(NSURLConnection *)connection didFailWithError:(NSError *)error {
	
	[self.activityIndicator stopAnimating];
	//self.activityIndicator.hidden = YES;
	loadingImageLabel.hidden = YES;
	
	NSLog(@"AsyncImageView - %@", [error localizedDescription]);
	
	//UIImageView* imageView = [[[UIImageView alloc] initWithImage:[UIImage imageNamed:@"?.png"]] autorelease];
    //[self addSubview:imageView];
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
	
   /* if ([[self subviews] count]>0) {
        [[[self subviews] objectAtIndex:0] removeFromSuperview];
    }*/
	
	//UIImage *img = [[[UIImage alloc] initWithData:data] autorelease];
	
	
    UIImageView* imageView = [[[UIImageView alloc] initWithImage:[[[UIImage alloc] initWithData:data] autorelease]] autorelease];
	imageView.opaque = NO;
	
	
    imageView.contentMode = UIViewContentModeScaleAspectFit;
    imageView.autoresizingMask = ( UIViewAutoresizingFlexibleWidth || UIViewAutoresizingFlexibleHeight );
	//imageView.backgroundColor = [UIColor whiteColor];
	//self.backgroundColor = [UIColor whiteColor];
	
	[self.activityIndicator stopAnimating];
	//self.activityIndicator.hidden = YES;
	loadingImageLabel.hidden = YES;
	for (UIView *v in [self subviews]) {
		if (v != self.activityIndicator) {
			[v removeFromSuperview];
		}
		
	}
	imageView.alpha = 0.0;
    [self addSubview:imageView];
    imageView.frame = self.bounds;
    [imageView setNeedsLayout];
    [self setNeedsLayout];
	[UIView beginAnimations:@"loadCover" context:nil];
	[UIView setAnimationBeginsFromCurrentState:YES];
	[UIView setAnimationDuration:2.0];
	imageView.alpha = 1.0;
	
	[UIView commitAnimations];
	
    [data release];
    data=nil;
	
	if([delegate respondsToSelector:@selector(didFinishLoading)])
		[delegate didFinishLoading];
}

//method used to cancel the connection when don't need anymore the AsyncImageView object
- (void)cancelConnection {
	[connection cancel];
}

- (UIImage*) image {
    UIImageView* iv = [[self subviews] objectAtIndex:0];
    return [iv image];
}

- (void)dealloc {
	[self.activityIndicator release];
    [connection cancel];
    [connection release];
    [data release];
    [super dealloc];
}


@end
