//
//  PodcastTracksDatasource.m
//  yTrack
//
//  Created by Fabrice Dewasmes on 01/08/10.
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

#import "PodcastTracksDatasource.h"
#import "SessionManager.h"
#import "DAAPResponsemlit.h"

@implementation PodcastsTracksDatasource

@synthesize navigationController;
@synthesize containerPersistentId;
@synthesize list;
@synthesize currentPodcastGroupId;
@synthesize itemType;

- (id) init{
	if ((self = [super init])) {
		artworks = [[NSMutableDictionary alloc] init];
		cellId = [[NSMutableDictionary alloc] init];
		loaders = [[NSMutableDictionary alloc] init];	
    }
    return self;
}

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
	return 1;
}


- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
	//long res = [[(DAAPResponsemlit *)[self.indexList objectAtIndex:section] mshn] longValue];
	
	return [self.list count];
}

-(void)didFinishLoading:(UIImage *)image forAlbumId:(NSNumber *)albumId{
	if (image == nil) {
		return;
	}
	[artworks setObject:image forKey:albumId];
	[loaders removeObjectForKey:albumId];
	NSIndexPath *index = (NSIndexPath *)[cellId objectForKey:albumId];
	//NSLog(@"got image for row : %d, track %d",[index row], [albumId intValue]);
	UITableViewCell *cell = [self tableView:self.tableView cellForRowAtIndexPath:index];
	cell.imageView.image = image;
	[self.tableView reloadRowsAtIndexPaths:[NSArray arrayWithObject:index] withRowAnimation:UITableViewRowAnimationNone];
	
}

- (UIImage *) artworkForAlbum:(NSNumber *)albumId{
	if ([artworks objectForKey:albumId] == nil) {
		AsyncImageLoader *loader = [CurrentServer getArtwork:albumId delegate:self forAlbum:NO];
		UIImage *defaultImage = [UIImage imageNamed:@"defaultAlbumArtwork.png"];
		[artworks setObject:defaultImage forKey:albumId];
		[loaders setObject:loader forKey:albumId];
		return defaultImage;
	} else {
		return [artworks objectForKey:albumId];
	}
}


// Customize the appearance of table view cells.
- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    
	static NSString *CellIdentifier = @"PodcastTrackCell";
    
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier];
    if (cell == nil) {
        cell = [[[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:CellIdentifier] autorelease];
    }
    
	DAAPResponsemlit *track = [self.list objectAtIndex:indexPath.row];
	
	cell.textLabel.text = track.name;
	int res = indexPath.row % 2;
	if (res != 0){
		cell.backgroundView.backgroundColor = cellColoredBackground;
	} else {
		cell.backgroundView.backgroundColor = [UIColor whiteColor];
	}
	
	cell.imageView.image = [self artworkForAlbum:track.miid];
	if ([cellId objectForKey:track.miid] == nil) {
		[cellId setObject:indexPath forKey:track.miid];
	}
    
    return cell;
}

#pragma mark -
#pragma mark Table view delegate

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
	DAAPResponsemlit *song = (DAAPResponsemlit *)[self.list objectAtIndex:indexPath.row];
	//[CurrentServer playPodcast:containerPersistentId song:[song.miid longValue]];
	if (self.itemType == kItemTypePodcast) {
		[CurrentServer playPodcast2:indexPath.row inAlbum:song.asai];
	} else {
		[CurrentServer playBook2:indexPath.row inAlbum:song.asai];
	}

}

- (void) cleanJobs{
	NSEnumerator *enumerator = [loaders objectEnumerator];
	id value;
	
	while ((value = [enumerator nextObject])) {
		[(AsyncImageLoader *)value cancelConnection];
	}
}

- (void)dealloc {
	[self cleanJobs];
	[list release];
	[artworks release];
	[cellId release];
	[loaders release];
	[currentPodcastGroupId release];
    [super dealloc];
}

@end
