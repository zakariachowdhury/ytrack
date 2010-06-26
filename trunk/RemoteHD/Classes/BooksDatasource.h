//
//  BooksDatasource.h
//  RemoteHD
//
//  Created by Fabrice Dewasmes on 24/06/10.
//  Copyright 2010 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "DAAPRequestReply.h"
#import "DAAPDatasource.h"
#import "TrackCustomCellClass.h"

@interface BooksDatasource : DAAPDatasource <UITableViewDataSource, UITableViewDelegate, DAAPRequestDelegate>{
	UINavigationController *navigationController;
}

@property (nonatomic, assign) UINavigationController *navigationController;

@end
