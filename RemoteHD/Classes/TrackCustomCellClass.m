//
//  TrackCustomCellClass.m
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 17/06/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import "TrackCustomCellClass.h"


@implementation TrackCustomCellClass
@synthesize trackName;
@synthesize artistName;
@synthesize trackLength;
@synthesize albumName;
@synthesize background;

- (id)initWithStyle:(UITableViewCellStyle)style reuseIdentifier:(NSString *)reuseIdentifier {
    if ((self = [super initWithStyle:style reuseIdentifier:reuseIdentifier])) {
        // Initialization code
    }
    return self;
}


- (void)setSelected:(BOOL)selected animated:(BOOL)animated {

    [super setSelected:selected animated:animated];

    // Configure the view for the selected state
}


- (void)dealloc {
	[self.trackName release];
	[self.artistName release];
	[self.albumName release];
	[self.trackLength release];
    [super dealloc];
}


@end
