//
//  ArtistDelegate.m
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 11/06/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import "ArtistDatasource.h"
#import "SessionManager.h"
#import "DAAPResponsemlit.h"
#import "AlbumsOfArtistController.h"
#import "TracksForAlbumController.h"


@implementation ArtistDatasource
@synthesize list;
@synthesize navigationController;

- (id) init{
	if ((self = [super init])) {
        self.list = [[[SessionManager sharedSessionManager] currentServer] getArtists];
    }
    return self;
}
- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section{
	return [list count];
}
- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath{
	static NSString *CellIdentifier = @"CellArtist";
    
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier];
    if (cell == nil) {
        cell = [[[UITableViewCell alloc] initWithStyle:UITableViewCellStyleSubtitle reuseIdentifier:CellIdentifier] autorelease];
    }
    
	NSString *artist = [self.list objectAtIndex:indexPath.row];
	
	cell.textLabel.text = artist;
    
    return cell;
}

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath{
	NSString *artist = [self.list objectAtIndex:indexPath.row];
	DAAPResponseagal * resp = [[[SessionManager sharedSessionManager] currentServer] getAlbumsForArtist:artist];
	
	if ([resp.mlcl.list count] == 0) {
		DAAPResponseapso * resp2 = [[[SessionManager sharedSessionManager] currentServer] getAllTracksForArtist:artist];
		TracksForAlbumController * c = [[TracksForAlbumController alloc] init];
		c.tracks = resp2.mlcl.list;
		[self.navigationController setNavigationBarHidden:NO animated:YES];
		[self.navigationController pushViewController:c animated:YES];
		[c release];
		
	} else if ([resp.mlcl.list count] == 1) {
		long long albumId = [[(DAAPResponsemlit *)[resp.mlcl.list objectAtIndex:0] mper] longLongValue];
		NSLog(@"%qi");
		DAAPResponseapso * resp = [[[SessionManager sharedSessionManager] currentServer] getTracksForAlbum:[NSString stringWithFormat:@"%qi",albumId]];
		TracksForAlbumController * c = [[TracksForAlbumController alloc] init];
		c.tracks = resp.mlcl.list;
		[self.navigationController setNavigationBarHidden:NO animated:YES];
		[self.navigationController pushViewController:c animated:YES];
		[c release];
	}
	
	else {
		AlbumsOfArtistController * c = [[AlbumsOfArtistController alloc] init];
		c.agal = resp;
		[self.navigationController setNavigationBarHidden:NO animated:YES];
		[self.navigationController pushViewController:c animated:YES];
		[c release];
	}
}
@end
