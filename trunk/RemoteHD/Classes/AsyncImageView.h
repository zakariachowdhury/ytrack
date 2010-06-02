//
//  AsyncImageView.h
//  HotCity
//
//  Created by Jerome on 7/7/09.
//  Copyright 2009 Pragma Consult SA. All rights reserved.
//

#import <UIKit/UIKit.h>

@protocol AsyncImageViewDelegate <NSObject>
	-(void)didFinishLoading;
@end


@interface AsyncImageView : UIView {
	NSURLConnection* connection;
    NSMutableData* data;
	UILabel *loadingImageLabel;
	UIActivityIndicatorView *activityIndicator;

	id <AsyncImageViewDelegate> delegate;
}

@property (nonatomic, assign) id <AsyncImageViewDelegate> delegate;
@property (nonatomic, retain) UIActivityIndicatorView *activityIndicator;

- (void)loadImageFromURL:(NSURL*)url;
- (void)loadImageNotAvailable;
- (void)cancelConnection;
- (UIImage*) image;

@end
