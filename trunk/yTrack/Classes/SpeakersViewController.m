//
//  SpeakersViewController.m
//  yTrack
//
//  Created by Fabrice Dewasmes on 20/06/10.
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

#import "SpeakersViewController.h"
#import "RemoteSpeaker.h"
#import "DAAPResponsecasp.h"
#import "SpeakerCustomCellView.h"
#import "DAAPResponsecmgt.h"

@interface SpeakersViewController(PrivateMethods)
- (void) _updateVolume;
- (void) _reload;
@end

@implementation SpeakersViewController
@synthesize speakers;
@synthesize popover;
@synthesize masterVolume;

#pragma mark -
#pragma mark Initialization

/*
- (id)initWithStyle:(UITableViewStyle)style {
    // Override initWithStyle: if you create the controller programmatically and want to perform customization that is not appropriate for viewDidLoad.
    if ((self = [super initWithStyle:style])) {
    }
    return self;
}
*/


#pragma mark -
#pragma mark View lifecycle


- (void)viewDidLoad {
    [super viewDidLoad];

    // Uncomment the following line to preserve selection between presentations.
    self.clearsSelectionOnViewWillAppear = NO;
	FDServer *server = CurrentServer;
	[server getSpeakers:self];
 
    [self.tableView setBackgroundColor:[UIColor colorWithRed:0 green:0 blue:0 alpha:0.9]];
    
    // Uncomment the following line to display an Edit button in the navigation bar for this view controller.
    // self.navigationItem.rightBarButtonItem = self.editButtonItem;
}



- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
	FDServer *server = CurrentServer;
    [self _updateVolume];
	[server getSpeakers:self];
    [self.tableView setSeparatorColor:[UIColor darkGrayColor]];
    [self.tableView setRowHeight:70];
}

/*
- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
}
*/
/*
- (void)viewWillDisappear:(BOOL)animated {
    [super viewWillDisappear:animated];
}
*/
/*
- (void)viewDidDisappear:(BOOL)animated {
    [super viewDidDisappear:animated];
}
*/
/*
// Override to allow orientations other than the default portrait orientation.
- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation {
    // Return YES for supported orientations
    return (interfaceOrientation == UIInterfaceOrientationPortrait);
}
*/


#pragma mark -
#pragma mark Table view data source

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
    // Return the number of sections.
    return 1;
}


- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    // Return the number of rows in the section.
    return [self.speakers count];
}


// Customize the appearance of table view cells.
- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    
    static NSString *CellIdentifier = @"SpeakerCell";
    
    SpeakerCustomCellView *cell = (SpeakerCustomCellView *)[tableView dequeueReusableCellWithIdentifier:CellIdentifier];
    if (cell == nil) {
        cell = [[[NSBundle mainBundle] loadNibNamed: @"SpeakerCustomCellView" owner: self options: nil] objectAtIndex: 0];
    }
    
    // Configure the cell...
	RemoteSpeaker *sp = (RemoteSpeaker *)[self.speakers objectAtIndex:indexPath.row];
	cell.spname.text = sp.speakerName;
    
    double relativeVolume = (masterVolume*sp.volume)/100;
    NSLog(@"spVol %ld master %ld relative %f",sp.volume, masterVolume, relativeVolume);
    if (sp.volume == masterVolume) cell.volume.value = sp.volume;
    else cell.volume.value = relativeVolume;

	if (sp.on) {
        cell.stateButton.selected = YES;
        cell.stateButton.userInteractionEnabled = YES;
	} else {
        cell.stateButton.userInteractionEnabled = NO;
        cell.userInteractionEnabled = YES;
	}

    [cell.volume addTarget:self action:@selector(didChangeVolumeForSpeaker:) forControlEvents:UIControlEventValueChanged];
    [cell.stateButton addTarget:self action:@selector(didChangeSpeakerValue:) forControlEvents:UIControlEventTouchUpInside];
    
    return cell;
}

- (void)didChangeVolumeForSpeaker:(id)sender{
    UISlider * slider = (UISlider *)sender;
    NSIndexPath *path = [self.tableView indexPathForCell:(UITableViewCell *)[[slider superview] superview]];
    double relativeVolume = slider.value*100/masterVolume;
    if (slider.value < masterVolume) {
        [CurrentServer setVolume:relativeVolume forSpeaker:[(RemoteSpeaker *)[speakers objectAtIndex:path.row] spId]];
    } else {
        BOOL controlMaster = YES;
        for (int i = 0 ; i < self.speakers.count ; i++) {
            RemoteSpeaker *sp = (RemoteSpeaker *)[self.speakers objectAtIndex:i];
            NSLog(@"slider : %f, speaker : %ld",slider.value,sp.volume);
            double relativeVolume = (masterVolume*sp.volume)/100;
            if (path.row != i && sp.on && slider.value <= relativeVolume) {
                controlMaster = NO;
                NSLog(@"NO");
                break;
            }
        }
        if (controlMaster){
            [CurrentServer setVolume:slider.value];
            [CurrentServer setMasterVolume:slider.value withSpeaker:[(RemoteSpeaker *)[speakers objectAtIndex:path.row] spId]];
            [[NSNotificationCenter defaultCenter] postNotificationName:kNotificationVolumeChanged object:nil userInfo:nil];
            [self _updateVolume];
        } else [CurrentServer setVolume:relativeVolume forSpeaker:[(RemoteSpeaker *)[speakers objectAtIndex:path.row] spId]];
    }
}

- (void) _updateVolume{
	FDServer *server = CurrentServer;
	[server getVolume:self action:@selector(readVolume:)];
}

- (void) readVolume:(DAAPResponse *)resp{
	DAAPResponsecmgt * response = (DAAPResponsecmgt *)resp;
	masterVolume = [response.cmvo longValue];
}

/*
// Override to support conditional editing of the table view.
- (BOOL)tableView:(UITableView *)tableView canEditRowAtIndexPath:(NSIndexPath *)indexPath {
    // Return NO if you do not want the specified item to be editable.
    return YES;
}
*/


/*
// Override to support editing the table view.
- (void)tableView:(UITableView *)tableView commitEditingStyle:(UITableViewCellEditingStyle)editingStyle forRowAtIndexPath:(NSIndexPath *)indexPath {
    
    if (editingStyle == UITableViewCellEditingStyleDelete) {
        // Delete the row from the data source
        [tableView deleteRowsAtIndexPaths:[NSArray arrayWithObject:indexPath] withRowAnimation:YES];
    }   
    else if (editingStyle == UITableViewCellEditingStyleInsert) {
        // Create a new instance of the appropriate class, insert it into the array, and add a new row to the table view
    }   
}
*/


/*
// Override to support rearranging the table view.
- (void)tableView:(UITableView *)tableView moveRowAtIndexPath:(NSIndexPath *)fromIndexPath toIndexPath:(NSIndexPath *)toIndexPath {
}
*/


/*
// Override to support conditional rearranging of the table view.
- (BOOL)tableView:(UITableView *)tableView canMoveRowAtIndexPath:(NSIndexPath *)indexPath {
    // Return NO if you do not want the item to be re-orderable.
    return YES;
}
*/

- (void)didChangeSpeakerValue:(id)sender{
    
    NSMutableArray *spList = [[NSMutableArray alloc] init];
	for (RemoteSpeaker *sp in self.speakers){
		if (sp.on) {
			[spList addObject:sp.spId];
		}
	}
	UIButton *button = (UIButton *)sender;
    
    NSIndexPath *path = [self.tableView indexPathForCell:(UITableViewCell *)[[sender superview] superview]];
    
    NSNumber * num = [[self.speakers objectAtIndex:path.row] spId];
    
    if (!button.selected){
        button.selected = YES;
        [spList addObject:num];  
    } else {
        [spList removeObjectIdenticalTo:num];
        button.selected = NO;
    }
    [[self.tableView cellForRowAtIndexPath:path] setSelected:NO animated:YES];
    
	[CurrentServer setSpeakers:spList];
	[CurrentServer getSpeakers:self];
    
}
#pragma mark -
#pragma mark Table view delegate

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
    NSMutableArray *spList = [[NSMutableArray alloc] init];
	for (RemoteSpeaker *sp in self.speakers){
		if (sp.on) {
			[spList addObject:sp.spId];
		}
	}
	
	 NSNumber * num = [[self.speakers objectAtIndex:indexPath.row] spId];
    
    UIButton *button = [(SpeakerCustomCellView *)[self.tableView cellForRowAtIndexPath:indexPath] stateButton];
    if (!button.selected){
        button.selected = YES;
        [spList addObject:num]; 
    } else {
        [spList removeObjectIdenticalTo:num];
        button.selected = NO;
    }
    [[self.tableView cellForRowAtIndexPath:indexPath] setSelected:NO animated:YES];
    
	[CurrentServer setSpeakers:spList];
	[CurrentServer getSpeakers:self];
}

- (void) _reload{
    FDServer *server = CurrentServer;
    [server getSpeakers:self];
}
// get speaker list
-(void)didFinishLoading:(DAAPResponse *)response{
	//BOOL shouldAnimate = ((self.speakers == nil) && (self.speakers.count < 2));
	DAAPResponsecasp *casp = (DAAPResponsecasp *)response;

	
	self.speakers = casp.speakers;
	/*if (shouldAnimate){
	 [self.tableView beginUpdates];
	 [self.tableView insertSections:[NSIndexSet indexSetWithIndex:1] withRowAnimation:UITableViewRowAnimationTop];
	 [self.tableView endUpdates];
	 } else {*/
	[self.tableView reloadData];
	//}

    [self.popover setPopoverContentSize:CGSizeMake(250, [self.speakers count]*70)];
}

#pragma mark -
#pragma mark Memory management

- (void)didReceiveMemoryWarning {
    // Releases the view if it doesn't have a superview.
    [super didReceiveMemoryWarning];
    
    // Relinquish ownership any cached data, images, etc that aren't in use.
}

- (void)viewDidUnload {
    // Relinquish ownership of anything that can be recreated in viewDidLoad or on demand.
    // For example: self.myOutlet = nil;
}


- (void)dealloc {
	[self.speakers release];
    [super dealloc];
}


@end

