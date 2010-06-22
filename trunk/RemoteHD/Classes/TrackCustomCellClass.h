//
//  TrackCustomCellClass.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 17/06/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <UIKit/UIKit.h>


@interface TrackCustomCellClass : UITableViewCell {
	IBOutlet UILabel *trackName;
	IBOutlet UILabel *artistName;
	IBOutlet UILabel *albumName;
	IBOutlet UILabel *trackLength;
	IBOutlet UIView *background;
}

@property (nonatomic, retain) UILabel *trackName;
@property (nonatomic, retain) UILabel *artistName;
@property (nonatomic, retain) UILabel *albumName;
@property (nonatomic, retain) UILabel *trackLength;
@property (nonatomic, retain) UIView *background;

@end
