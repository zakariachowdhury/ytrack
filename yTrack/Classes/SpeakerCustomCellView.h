//
//  SpeakerCustomCellViewController.h
//  yTrack
//
//  Created by Fabrice Dewasmes on 08/07/11.
//  Copyright 2011 neopixl. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface SpeakerCustomCellView : UITableViewCell{
    IBOutlet UISlider *volume;
    IBOutlet UILabel *spname;
    IBOutlet UIButton *stateButton;
}
@property (nonatomic, retain)  UISlider *volume;
@property (nonatomic, retain)  UILabel *spname;
@property (nonatomic, retain)  UIButton *stateButton;
@end
