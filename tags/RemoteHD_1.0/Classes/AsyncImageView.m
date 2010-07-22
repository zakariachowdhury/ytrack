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

@interface AsyncImageView() 
- (UIImageView *) _newImageWithShadowFromImage:(UIImage *)image;

@end


@implementation AsyncImageView

@synthesize delegate;
@synthesize activityIndicator;
@synthesize data;
@synthesize connection;

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
																		table:@"Localizable"];
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
	
    if (self.connection!=nil) { [self cancelConnection];}
    if (self.data!=nil) { self.data = nil; }
    NSMutableURLRequest* request = [NSMutableURLRequest requestWithURL:url
											 cachePolicy:NSURLRequestUseProtocolCachePolicy
										 timeoutInterval:60.0];
	[request setValue:@"1" forHTTPHeaderField:@"Viewer-Only-Client"];
	NSURLConnection *conn =[[NSURLConnection alloc]
							initWithRequest:request delegate:self];
    self.connection = conn;
	[conn release];
}

- (void)loadImageNotAvailable {
	//UIImageView* imageView = [[[UIImageView alloc] initWithImage:[UIImage imageNamed:@"?.png"]] autorelease];
    //[self addSubview:imageView];
}

- (void)connection:(NSURLConnection *)theConnection didFailWithError:(NSError *)error {
	assert(theConnection == self.connection);
	[self.activityIndicator stopAnimating];
	//self.activityIndicator.hidden = YES;
	loadingImageLabel.hidden = YES;
	
	NSLog(@"AsyncImageView - %@", [error localizedDescription]);
	
	//UIImageView* imageView = [[[UIImageView alloc] initWithImage:[UIImage imageNamed:@"?.png"]] autorelease];
    //[self addSubview:imageView];
}

- (void)connection:(NSURLConnection *)theConnection
	didReceiveData:(NSData *)incrementalData {
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
    self.connection=nil;
		
	[self.activityIndicator stopAnimating];
	loadingImageLabel.hidden = YES;
	for (UIView *v in [self subviews]) {
		if (v != self.activityIndicator) {
			[v removeFromSuperview];
		}
		
	}
	UIImage * image;
	if (self.data.length > 0) {
		image = [[UIImage alloc] initWithData:self.data];
	} else {
		image = [UIImage imageNamed:@"defaultCover.png"];
	}


	UIImageView *imageView = [self _newImageWithShadowFromImage:image];
	[image release];
	
	imageView.alpha = 0.0;
	
    [self addSubview:imageView];
    [self setNeedsLayout];
	[UIView beginAnimations:@"loadCover" context:nil];
	[UIView setAnimationBeginsFromCurrentState:YES];
	[UIView setAnimationDuration:2.0];
	imageView.alpha = 1.0;
	
	[UIView commitAnimations];
	[imageView release];
	
    self.data = nil;
	
	if([delegate respondsToSelector:@selector(didFinishLoading)])
		[delegate didFinishLoading];
}

//method used to cancel the connection when don't need anymore the AsyncImageView object
- (void)cancelConnection {
	[self.connection cancel];
	self.connection = nil;
}

- (UIImage*) image {
    UIImageView* iv = [[self subviews] objectAtIndex:0];
    return [iv image];
}

#pragma mark -
#pragma mark private methods

- (UIImageView *) _newImageWithShadowFromImage:(UIImage *)image{
	
	UIGraphicsBeginImageContext(CGSizeMake(image.size.width+20, image.size.height+20));
	CGContextRef context = UIGraphicsGetCurrentContext();
	CGContextClearRect(context, CGRectMake(0, 0, image.size.width+20, image.size.height+20));
	CGContextSetAllowsAntialiasing(context, true);
	CGContextSetShouldAntialias(context, true);
	CGSize myShadowOffset = CGSizeMake (0, 0);// 2
	CGContextSetShadow (context, myShadowOffset, 10); // 7
	
	[image drawInRect:CGRectMake(10, 10, image.size.width, image.size.height)];
	
	UIImage * shadowedImage = UIGraphicsGetImageFromCurrentImageContext();
	UIGraphicsEndImageContext();
	
	UIImageView* imageView = [[UIImageView alloc] initWithImage:shadowedImage];
	imageView.contentMode = UIViewContentModeScaleAspectFit;
    imageView.autoresizingMask = ( UIViewAutoresizingFlexibleWidth || UIViewAutoresizingFlexibleHeight );
	return imageView;
}


- (void)dealloc {
	[self.activityIndicator release];
    [self.connection cancel];
    [self.connection release];
    [self.data release];
    [super dealloc];
}


@end
