//
//  DetailedTrackCustomCellClass.m
//  yTrack
//
//  Created by Fabrice Dewasmes on 25/06/10.
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

#import "DetailedTrackCustomCellClass.h"


@implementation DetailedTrackCustomCellClass
@synthesize trackName;
@synthesize trackNumber;
@synthesize trackLength;
@synthesize background;

- (id)initWithStyle:(UITableViewCellStyle)style reuseIdentifier:(NSString *)reuseIdentifier {
    if ((self = [super initWithStyle:style reuseIdentifier:reuseIdentifier])) {
        // Initialization code
    }
    return self;
}

- (void)drawRect:(CGRect)rect{
	UIDevice *device = [UIDevice currentDevice];
	CGRect initial = self.frame;
	if (device.orientation == UIDeviceOrientationPortrait || device.orientation == UIDeviceOrientationPortraitUpsideDown) {
		self.frame = CGRectMake(initial.origin.x, initial.origin.y, 524, initial.size.height);
	} else if (device.orientation == UIDeviceOrientationLandscapeLeft || device.orientation == UIDeviceOrientationLandscapeRight){
		self.frame = CGRectMake(initial.origin.x, initial.origin.y, 780, initial.size.height);
	}
	
}

- (void)setSelected:(BOOL)selected animated:(BOOL)animated {
	
    [super setSelected:selected animated:animated];
	
    // Configure the view for the selected state
}

- (BOOL) nowPlaying{
	return nowPlaying;
}

- (void) setNowPlaying:(BOOL)value{
	nowPlaying = value;
	if (nowPlaying) {
		nowPlayingIndicator.hidden = NO;
		trackNumber.hidden = YES;
	} else {
		nowPlayingIndicator.hidden = YES;
		trackNumber.hidden = NO;
	}
	[self setNeedsDisplay];
}


- (void)dealloc {
	[self.trackName release];
	[self.trackNumber release];
	[self.trackLength release];
    [super dealloc];
}


@end
