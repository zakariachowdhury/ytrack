//
//  DetailedTrackCustomCellClass.h
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

#import <UIKit/UIKit.h>


@interface DetailedTrackCustomCellClass : UITableViewCell {
	IBOutlet UILabel *trackNumber;
	IBOutlet UIImageView *sep1;
	IBOutlet UILabel *trackName;
	IBOutlet UIImageView *sep2;
	IBOutlet UILabel *trackLength;
	IBOutlet UIView *background;
	IBOutlet UIImageView *nowPlayingIndicator;
	
	BOOL nowPlaying;
}

@property (nonatomic, retain) UILabel *trackName;
@property (nonatomic, retain) UILabel *trackNumber;
@property (nonatomic, retain) UILabel *trackLength;
@property (nonatomic, retain) UIView *background;
@property (nonatomic) BOOL nowPlaying;

@end
