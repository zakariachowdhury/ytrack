var STORE_NAME = "contacts_offline_docset";

var MANIFEST_FILENAME = "app_manifest.json";

var offline = false;
var localServer;
var store;

function updateTitle(entry, value){
    entry.setTitle(google.gdata.Text.create(value));
}

function updateMail(entry, value){
    var emailAddresses = entry.getEmailAddresses();
    if (!emailAddresses.length) { // New Email
        var primaryObj = new google.gdata.Email();
        primaryObj.setAddress(value);
        primaryObj.setRel(google.gdata.Email.REL_WORK);
        entry.setEmailAddresses([primaryObj]);
    }
    else {
        var idx = 0;
        var primaryObj = emailAddresses[0];
        for (var j = 0; j < emailAddresses.length; j++) {
            if (emailAddresses[j].getPrimary()) {
                idx = j;
                var primaryObj = emailAddresses[j];
            }
        }
        if (primaryObj) {
            if (value == '') { // Delete Email
                emailAddresses.splice(idx, 1);
            }
            else { // Update Email
                primaryObj.setAddress(value);
            }
        }
    }
}

function updatePhone(entry, value){
    var phoneNumbers = entry.getPhoneNumbers();
    if (!phoneNumbers.length) { // New Phone
        var primaryObj = new google.gdata.PhoneNumber();
        primaryObj.setValue(value);
        primaryObj.setRel(google.gdata.PhoneNumber.REL_WORK);
        entry.setPhoneNumbers([primaryObj]);
    }
    else {
        var idx = 0;
        var primaryObj = phoneNumbers[0];
        for (var j = 0; j < phoneNumbers.length; j++) {
            if (phoneNumbers[j].getPrimary()) {
                idx = j;
                var primaryObj = phoneNumbers[j];
            }
        }
        if (primaryObj) {
            if (value == '') { // Delete Phone
                phoneNumbers.splice(idx, 1);
            }
            else { // Update Phone
                primaryObj.setValue(value);
            }
        }
    }
}

function updateContactsFromServer(){
    var db = google.gears.factory.create('beta.database');
    db.open('gcontacts');
    db.execute('create table if not exists Contacts' +
    ' (Name text, Email text, Phone text, updated integer, titleUpdate integer,emailUpdate integer,phoneUpdate integer, selflink text)');
    db.execute('create table if not exists syncInfos(lastupdated integer,insertedrows integer)');
    var rs = db.execute("select max(lastupdated) from syncinfos");
    var updated = rs.field(0);
    rs.close();
    
    getAllContacts(updated);
}


// Called onload to initialize local server and store variables
function initGears(){
    if (!window.google || !google.gears) {
        location.href = "http://gears.google.com/?action=install&message=Please install Gears before using the offline Google Contacts app" +
        "&icon_src=http://fdewasmes.free.fr/ext/icons/addressbook48.png" +
        "&return=http://fdewasmes.free.fr/ext/contact.htm";
    }
    else {
        if (!localServer) {
            localServer = google.gears.factory.create("beta.localserver");
        }
        if (!store || !localServer.openManagedStore(STORE_NAME)) {
            store = localServer.createManagedStore(STORE_NAME);
        }
		if (!localServer.openManagedStore(STORE_NAME)){
			var desktop = google.gears.factory.create('beta.desktop');
            
            desktop.createShortcut('Google Contacts Application', 'http://fdewasmes.free.fr/ext/contact.htm', {
                '128x128': 'http://fdewasmes.free.fr/ext/icons/addressbook128.png',
                '48x48': 'http://fdewasmes.free.fr/ext/icons/addressbook48.png',
                '32x32': 'http://fdewasmes.free.fr/ext/icons/addressbook32.png',
                '16x16': 'http://fdewasmes.free.fr/ext/icons/addressbook16.png'
            }, 'An application at http://fdewasmes.free.fr/ext/contact.htm');
		}
        
        storeLocalFiles();
    }
}

// Create the managed resource store
function storeLocalFiles(){
    if (!window.google || !google.gears) {
        alert("You must install Gears first.");
        return;
    }
    
    // in case the store has been removed meanwhile 
    if (!localServer.openManagedStore(STORE_NAME)) {
        store = localServer.createManagedStore(STORE_NAME);
    }
    
    store.onprogress = function(details){
        Ext.getCmp('my-status').setText('fetching doc ' + details.filesComplete + ' out of ' + details.filesTotal);
        if (details.filesComplete == details.filesTotal) {
            Ext.getCmp('my-status').setText('Done');
        }
    }
    store.manifestUrl = MANIFEST_FILENAME;
    store.checkForUpdate();
    
    var timerId = window.setInterval(function(){
        if (store.currentVersion) {
            window.clearInterval(timerId);
            textOut("The documents are now available offline.\n" +
            "With your browser offline, reload the page. The version stored is: " +
            store.currentVersion);
        }
        else 
            if (store.updateStatus == 3) {
                textOut("Error: " + store.lastErrorMessage);
            }
    }, 500);
}

// update contacts from server before going offline
// this call can only be explicitly done with sync = true when user is online
function goOffline(sync){
    if (!window.google || !google.gears) {
        alert("You must install Gears first.");
        return;
    }
    
    storeLocalFiles();
    
    if (sync) 
        updateContactsFromServer();
    
    toggleStores();
}

// Remove the managed resource store.
function removeStore(){
    if (!window.google || !google.gears) {
        alert("You must install Gears first.");
        return;
    }
    
    localServer.removeManagedStore(STORE_NAME);
    textOut("Done. The local store has been removed." +
    "You will now see online versions of data.");
}

// Utility function to output some status text.
function textOut(s){
    status = Ext.getCmp('my-status');
    status.setText(s);
}

function handleContactUpdate(current, total, msgbox, onfinish){
    return function(result){
        var entry = result.entry;
        
        var db = google.gears.factory.create('beta.database');
        db.open('gcontacts');
        var rs2 = db.execute('select * from contacts where selflink="' + entry.getSelfLink().getHref() + '"');
        var name = rs2.field(0);
        
        msgbox.updateProgress(current / total, 'updating ' + name);
        
        var titleUpdate = rs2.field(4);
        var mailUpdate = rs2.field(5);
        var phoneUpdate = rs2.field(6);
        if (titleUpdate == 1) {
            updateTitle(entry, rs2.field(0));
        }
        if (mailUpdate == 1) {
            updateMail(entry, rs2.field(1));
        }
        if (phoneUpdate == 1) {
            updatePhone(entry, rs2.field(2));
        }
        entry.updateEntry(function(){
            Ext.getCmp('my-status').setText('update successfull');
            Ext.getCmp('gc-grid').store.commitChanges();
        }, GContact.errorHandler);
        rs2.close();
        db.execute('update contacts set updated=0, titleupdate=0, emailupdate=0, phoneupdate=0 where selflink="' + entry.getSelfLink().getHref() + '"');
        
        if (current == total) {
            onfinish();
        }
    };
}

function toggleStores(){
    if (offline) {
        var onlinestore = Ext.StoreMgr.lookup('online');
        Ext.getCmp('pager').bind(onlinestore);
        Ext.getCmp('gc-grid').reconfigure(onlinestore, columnModel);
        onlinestore.load();
        offline = false;
        Ext.getCmp('btn-offline').setText('Go Offline');
        Ext.getCmp('btn-offline').setIconClass('i-greenled');
    }
    else {
        var offlineStore = Ext.StoreMgr.lookup('offline');
        Ext.getCmp('pager').bind(offlineStore);
        Ext.getCmp('gc-grid').reconfigure(offlineStore, columnModel);
        offlineStore.load();
        offline = true;
        Ext.getCmp('btn-offline').setText('Go Online');
        Ext.getCmp('btn-offline').setIconClass('i-redled');
    }
}

function resync(uri, contactservice){
    var db = google.gears.factory.create('beta.database');
    db.open('gcontacts');
    rscount = db.execute('select count(*) from contacts where updated=1');
    var numRows = rscount.field(0);
    rscount.close();
    
	if (numRows > 0) {
		var msgbox = Ext.MessageBox.progress('Progress', 'Updating contacts');
		
		rs = db.execute('select * from contacts where updated=1');
		var i = 1;
		while (rs.isValidRow()) {
			var cs = contactService;
			
			cs.getContactEntry(rs.field(7), handleContactUpdate(i++, numRows, msgbox, function(){
				msgbox.hide();
				var onlinestore = Ext.StoreMgr.lookup('online');
				onlinestore.load();
			}));
			rs.next();
		}
		rs.close();
	}
    
    toggleStores();
}

function storeResults(msg){
    return function(result){
        var emails, phones, emailAddresses, phoneNumbers, i, j;
        var db = google.gears.factory.create('beta.database');
        db.open('gcontacts');
        var contact = [];
        var entries = result.feed.entry;
        
        var ttl = result.feed.getTotalResults().getValue();
        for (i = 0; i < entries.length; i++) {
            //MMMmmmh entries are loading too fast in DB or computing is too intensive and the progress bar doesn't get updated
            var percent = (i + 1) / ttl;
            msg.updateProgress(percent, 'Loading contact ' + (i + 1) + ' of ' + ttl + '...');
            
            var primaryEmail = '', primaryPhone = '';
            emails = [];
            emailAddresses = entries[i].getEmailAddresses();
            // Breakdown Email Addresses
            for (j = 0; j < emailAddresses.length; j++) {
                emails.push({
                    address: emailAddresses[j].getAddress(),
                    label: emailAddresses[j].getLabel(),
                    primary: emailAddresses[j].getPrimary(),
                    rawObj: emailAddresses[j]
                });
                if (!primaryEmail) {
                    primaryEmail = emailAddresses[j].getAddress();
                }
                if (emailAddresses[j].getPrimary()) {
                    primaryEmail = emailAddresses[j].getAddress();
                }
            }
            phones = [];
            phoneNumbers = entries[i].getPhoneNumbers();
            // Breakdown Phone Numbers
            for (j = 0; j < phoneNumbers.length; j++) {
                phones.push({
                    number: phoneNumbers[j].getValue(),
                    label: phoneNumbers[j].getLabel(),
                    primary: phoneNumbers[j].getPrimary(),
                    rawObj: phoneNumbers[j]
                });
                if (!primaryPhone) {
                    primaryPhone = phoneNumbers[j].getValue();
                }
                if (phoneNumbers[j].getPrimary()) {
                    primaryPhone = phoneNumbers[j].getValue();
                }
            }
            var rs = db.execute('select count(*) from contacts where selflink=?', [entries[i].getSelfLink().getHref()]);
            var updateCount = rs.field(0);
            rs.close();
            if (updateCount > 0) {
                db.execute('update Contacts set name=?,email= ?,phone= ?, titleupdate=0, emailupdate=0, phoneupdate=0, updated=0 where selflink=?', [entries[i].title.getText(), primaryEmail, primaryPhone, entries[i].getSelfLink().getHref()]);
            }
            else {
                db.execute('insert into Contacts values (?, ?, ?, ?, ?, ?, ?, ?)', [entries[i].title.getText(), primaryEmail, primaryPhone, 0, 0, 0, 0, entries[i].getSelfLink().getHref()]);
            }
        }
        Ext.StoreMgr.lookup('offline').load();
        msg.hide();
        var now = new Date().getTime();
        db.execute("insert into syncInfos values(?,?)", [now, ttl]);
    }
}

function getAllContacts(updatedMin){
    if (auth == '') 
        return;
    var msg = Ext.MessageBox.progress('Progress', 'Getting all Contacts');
    msg.wait('fetching contacts from server');
    var cs = contactService;
    var query = new google.gdata.contacts.ContactQuery("http://www.google.com/m8/feeds/contacts/default/full");
    query.setMaxResults(1000); // Max results query setting : vuluntarily high to retrieve all
    query.setStartIndex(1); // Starting idx (1 not 0)
    if (updatedMin) {
        var ladate = new Date(updatedMin);
        var from = new google.gdata.DateTime(ladate);
        query.setUpdatedMin(from);
    }
    cs.getContactFeed(query, storeResults(msg), GContact.errorHandler);
}
