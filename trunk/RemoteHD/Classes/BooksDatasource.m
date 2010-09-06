//
//  BooksDatasource.m
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 24/06/10.
//  Copyright 2010 Fabrice Dewasmes. All rights reserved.
//

#import "BooksDatasource.h"
#import "SessionManager.h"
#import "DAAPResponsemlit.h"
#import "AlbumsOfArtistController.h"
#import "TracksForAlbumController.h"

@implementation BooksDatasource

@synthesize navigationController;
@synthesize containerPersistentId;


- (id) init{
	if ((self = [super init])) {
		artworks = [[NSMutableDictionary alloc] init];
		cellId = [[NSMutableDictionary alloc] init];
		loaders = [[NSMutableDictionary alloc] init];	
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

-(void)didFinishLoading:(UIImage *)image forAlbumId:(NSNumber *)albumId{
	if (image == nil) {
		return;
	}
	[artworks setObject:image forKey:albumId];
	[loaders removeObjectForKey:albumId];
	NSLog(@"got image for row : %d",[(NSIndexPath *)[cellId objectForKey:albumId] row]);
	[self.delegate updateImage:image forIndexPath:[cellId objectForKey:albumId]];
}

- (UIImage *) artworkForAlbum:(NSNumber *)albumId{
	if ([artworks objectForKey:albumId] == nil) {
		AsyncImageLoader *loader = [CurrentServer getArtwork:albumId size:90 delegate:self forAlbum:YES];
		UIImage *defaultImage = [UIImage imageNamed:@"defaultAlbumArtwork.png"];
		[artworks setObject:defaultImage forKey:albumId];
		[loaders setObject:loader forKey:albumId];
		return defaultImage;
	} else {
		return [artworks objectForKey:albumId];
	}
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
    
    static NSString *CellIdentifier = @"BookCell";
    
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier];
    if (cell == nil) {
        cell = [[[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:CellIdentifier] autorelease];
    }
    
	long offset = [[(DAAPResponsemlit *)[self.indexList objectAtIndex:indexPath.section] mshi] longValue];
	DAAPResponsemlit *track = [self.list objectAtIndex:(offset + indexPath.row)];
	
	//TODO add now playing indicator
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
	/*DAAPResponsemlit *mlit = (DAAPResponsemlit *)[self.indexList objectAtIndex:indexPath.section];
	long offset = [mlit.mshi longValue];
	long i = offset + indexPath.row;
	[CurrentServer playBookInLibrary:i];*/
	// [delegate didSelectItem];
	
	DAAPResponsemlit *song = (DAAPResponsemlit *)[self.list objectAtIndex:indexPath.row];
	[CurrentServer playPodcast:containerPersistentId song:[song.miid longValue]];
}

- (CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath{
	return 90;
}

// Used to update nowPlaying in the table
- (void) statusUpdate:(NSNotification *)notification{
	[self.delegate refreshTableView];
}

- (void) didFinishLoading:(DAAPResponse *)response{
	[super didFinishLoading:response];
	self.list = [[(DAAPResponseapso *)response listing] list];
	self.indexList = [[(DAAPResponseapso *)response headerList] indexList];
	
	[self.delegate refreshTableView];
	[self.delegate didFinishLoading];
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
	[artworks release];
	[cellId release];
	[loaders release];
    [super dealloc];
}

@end
