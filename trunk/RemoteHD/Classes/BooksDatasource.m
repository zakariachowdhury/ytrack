//
//  BooksDatasource.m
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 24/06/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import "BooksDatasource.h"
#import "SessionManager.h"
#import "DAAPResponsemlit.h"
#import "AlbumsOfArtistController.h"
#import "TracksForAlbumController.h"

@implementation BooksDatasource

@synthesize list;
@synthesize indexList;
@synthesize navigationController;



- (id) init{
	if ((self = [super init])) {
       
    }
    return self;
}


- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
	return [self.indexList count];
}


- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
	long res = [[(DAAPResponsemlit *)[self.indexList objectAtIndex:section] mshn] longValue];
	
	return res;
}

- (NSArray *)sectionIndexTitlesForTableView:(UITableView *)tableView {
	NSMutableArray *chars = [[[NSMutableArray alloc] init] autorelease];
	for (DAAPResponsemlit *mlit in self.indexList) {
		[chars addObject:[mlit mshc]];
	}
	return chars;
}

- (NSInteger)tableView:(UITableView *)tableView sectionForSectionIndexTitle:(NSString *)title atIndex:(NSInteger)index {
	NSInteger count = 0;
	for(DAAPResponsemlit *mlit in self.indexList)
	{
		if([mlit.mshc isEqualToString:title])
			return count;
		count ++;
	}
	return 0;
}

- (NSString *)tableView:(UITableView *)tableView titleForHeaderInSection:(NSInteger)section {
	return [(DAAPResponsemlit *)[self.indexList objectAtIndex:section] mshc];
}

// Customize the appearance of table view cells.
- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    
    static NSString *CellIdentifier = @"TrackCell";
    
	TrackCustomCellClass *cell = (TrackCustomCellClass *)[tableView dequeueReusableCellWithIdentifier:CellIdentifier];
    if (cell == nil) {
		cell = [[[NSBundle mainBundle] loadNibNamed: @"TrackCustomCell" owner: self options: nil] objectAtIndex: 0];
    }
    
	long offset = [[(DAAPResponsemlit *)[self.indexList objectAtIndex:indexPath.section] mshi] longValue];
	DAAPResponsemlit *track = [self.list objectAtIndex:(offset + indexPath.row)];
	
	cell.trackName.text = track.minm;
	NSString *album = track.asal;
	NSString *artist = track.asaa;
	cell.artistName.text = artist;
	cell.albumName.text = album;
	
	int timeMillis = [track.astm intValue];
	int timeSec = timeMillis / 1000;
	
	int totalDays = timeSec / 86400;
    int totalHours = (timeSec / 3600) - (totalDays * 24);
    int totalMinutes = (timeSec / 60) - (totalDays * 24 * 60) - (totalHours * 60);
    int totalSeconds = timeSec % 60;
	
	cell.trackLength.text = [NSString stringWithFormat:@"%d:%02d",totalMinutes,totalSeconds];
	
	if ([cell.trackName.text isEqualToString:self.currentTrack] && [cell.artistName.text isEqualToString:self.currentArtist] && [cell.albumName.text isEqualToString:self.currentAlbum]) {
		//cell.trackName.textColor = [UIColor blueColor];
		cell.accessoryView = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"nowPlayingSpeaker.png"]];
	} else {
		//cell.trackName.textColor = [UIColor blackColor];
		cell.accessoryView = nil;
	}
	int res = indexPath.row % 2;
	if (res != 0){
		cell.background.backgroundColor = cellColoredBackground;
	} else {
		cell.background.backgroundColor = [UIColor whiteColor];
	}
	
    
    return cell;
}

#pragma mark -
#pragma mark Table view delegate

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
	/*DAAPResponsemlit *mlit = (DAAPResponsemlit *)[self.indexList objectAtIndex:indexPath.section];
	long offset = [mlit.mshi longValue];
	long i = offset + indexPath.row;
	[[[SessionManager sharedSessionManager] currentServer] playBookInLibrary:i];*/
	// [delegate didSelectItem];
}

// Used to update nowPlaying in the table
- (void) statusUpdate:(NSNotification *)notification{
	DAAPResponsecmst *cmst = (DAAPResponsecmst *)[notification.userInfo objectForKey:@"cmst"];
	self.currentTrack = cmst.cann;
	self.currentArtist = cmst.cana;
	self.currentAlbum = cmst.canl;
	
	[self.delegate refreshTableView];
}

- (void) didFinishLoading:(DAAPResponse *)response{
	self.list = [[(DAAPResponseapso *)response mlcl] list];
	self.indexList = [[(DAAPResponseapso *)response mshl] indexList];
	
	[self.delegate refreshTableView];
	[self.delegate didFinishLoading];
}

- (void)dealloc {
	[self.list release];
	[self.indexList release];
    [super dealloc];
}

@end
