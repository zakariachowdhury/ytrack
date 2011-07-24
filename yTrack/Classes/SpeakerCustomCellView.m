//
//  SpeakerCustomCellViewController.m
//  yTrack
//
//  Created by Fabrice Dewasmes on 08/07/11.
//  Copyright 2011 neopixl. All rights reserved.
//

#import "SpeakerCustomCellView.h"

@implementation SpeakerCustomCellView

@synthesize volume;
@synthesize spname;
@synthesize stateButton;

- (id)initWithStyle:(UITableViewCellStyle)style reuseIdentifier:(NSString *)reuseIdentifier {
    if ((self = [super initWithStyle:style reuseIdentifier:reuseIdentifier])) {
        // Initialization code
    }
    return self;
}

- (void)dealloc {
	[self.volume release];
	[self.spname release];
    [super dealloc];
}

@end
