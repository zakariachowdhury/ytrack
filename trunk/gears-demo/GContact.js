Ext.ns('GContact');
GContact.errorHandler = function(e){
    Ext.Msg.show({
        title: e.name,
        msg: e.message,
        buttons: Ext.Msg.OK,
        icon: Ext.MessageBox.ERROR
    });
}

var request = google.gears.factory.create('beta.httprequest');
var auth;

// some sort of offline autodetect
// not advanced
var TIME_BETWEEN_PINGS = 3 * 1000;
var PING_TIMEOUT_SECONDS = 1 * 1000;

function isServerAvailable(){
    if (!navigator.onLine) {
        if (!offline) {
            goOffline(false);
        }
    }
    else {
        if (offline) {
            resync();
        }
    }
    window.setTimeout("isServerAvailable()", TIME_BETWEEN_PINGS);
}

var contactService;
var columnModel;

Ext.onReady(function(){
    google.gdata.client.init(GContact.errorHandler);
    auth = google.accounts.user.checkLogin('http://www.google.com/m8/feeds/');
    contactService = new google.gdata.contacts.ContactsService('Ext-Fabzz-Google-Contacts');
    initGears();
    
    var store = new Ext.data.Store({
        proxy: new Ext.data.GContactProxy({
            contactService: contactService,
            uri: 'http://www.google.com/m8/feeds/contacts/default/full',
            limit: 15
        }),
        reader: new Ext.data.JsonReader({
            totalProperty: 'total'
        }, [{
            name: 'primaryEmail'
        }, {
            name: 'primaryPhone'
        }, {
            name: 'rawObj'
        }, {
            name: 'title'
        }]),
        storeId: 'online'
    });
    
    var offlineStore = new Ext.data.Store({
        proxy: new Ext.data.GearsContactProxy({
            limit: 15
        }),
        reader: new Ext.data.JsonReader({
            totalProperty: 'total'
        }, [{
            name: 'primaryEmail'
        }, {
            name: 'primaryPhone'
        }, {
            name: 'title'
        }]),
        storeId: 'offline'
    });
    
    columnModel = new Ext.grid.ColumnModel([{
        id: 'auto',
        header: "Title",
        align: 'left',
        sortable: false,
        dataIndex: 'title',
        editor: new Ext.form.TextField({})
    }, {
        width: 200,
        header: "Email Address",
        align: 'left',
        sortable: false,
        dataIndex: 'primaryEmail',
        editor: new Ext.form.TextField({})
    }, {
        header: "Phone Number",
        align: 'center',
        width: 120,
        sortable: false,
        dataIndex: 'primaryPhone',
        editor: new Ext.form.TextField({})
    }])
    
    var pager = new Ext.PagingToolbar({
        id: 'pager',
        style: 'border: 0pt;',
        store: store,
        pageSize: 15,
        displayInfo: true
    });
    var loaded = false;
    var vp = new Ext.Viewport({
        layout: 'fit',
        items: {
            xtype: 'editorgrid',
            id: 'gc-grid',
            stripeRows: true,
            autoExpandColumn: 'auto',
            store: store,
            viewConfig: {
                onLayout: function(vw, vh){
                    if ((vh !== 0) && (loaded === false)) {
                    
                        loaded = true;
                        var pageSize = Math.floor(vh / 21);
                        
                        pager.pageSize = pageSize;
                        store.proxy.limit = pageSize;
                        store.proxy.data.limit = pageSize;
                        offlineStore.proxy.limit = pageSize;
                        offlineStore.proxy.data.limit = pageSize;
                        if (auth) {
                            store.load();
                            
                        }
                    }
                }
            },
            tbar: [{
                id: 'btn-login',
                text: 'Login',
                iconCls: 'i-login',
                disabled: auth,
                listeners: {
                    click: {
                        fn: function(o){
                            google.accounts.user.login('http://www.google.com/m8/feeds/');
                        }
                    }
                }
            }, '-', {
                id: 'btn-logout',
                text: 'Logout',
                iconCls: 'i-logout',
                disabled: !auth,
                listeners: {
                    click: {
                        fn: function(o){
                            google.accounts.user.logout();
                            o.disable();
                            Ext.getCmp('btn-login').enable();
                            Ext.getCmp('gc-grid').store.removeAll();
                        }
                    }
                }
            }, {
                id: 'btn-offline',
                text: 'Go offline',
                iconCls: 'i-greenled',
                disabled: !auth,
                listeners: {
                    click: {
                        fn: function(o){
                            initGears();
                            if (offline) {
                                resync('http://www.google.com/m8/feeds/contacts/default/full', contactService);
                            }
                            else {
                                goOffline(true);
                            }
                        }
                    }
                }
            }, {
                id: 'btn-remove',
                text: 'remove store',
                iconCls: 'i-offline',
                disabled: !auth,
                listeners: {
                    click: {
                        fn: function(o){
                            initGears();
                            removeStore();
                        }
                    }
                }
            }, {
                xtype: 'tbseparator'
            }, new Ext.StatusBar({
                id: 'my-status',
                
                // defaults to use when the status is cleared:
                defaultText: 'Default status text',
                defaultIconCls: 'default-icon',
                
                // values to set initially:
                text: 'Ready',
                iconCls: 'ready-icon'
            
            })],
            bbar: pager,
            sm: new Ext.grid.RowSelectionModel({
                singleSelect: true
            }),
            colModel: columnModel,
            listeners: {
                afteredit: {
                    fn: function(o){
						var db = google.gears.factory.create('beta.database');
                            db.open('gcontacts');
                        if (!offline) {
							// here changes are propagated to local db to ensure that an automatic switch to offline displays the right data
                            var entry = o.record.data.rawObj;
                            if (o.field == 'title') {
                                updateTitle(entry, o.value);
								db.execute('update contacts set name="' + o.value + '" where email="' + o.record.get('primaryEmail') + '"');
                            }
                            if (o.field == 'primaryEmail') {
                                updateMail(entry, o.value);
								db.execute('update contacts set email="' + o.value + '" where email="' + o.record.get('primaryEmail') + '"');
                            }
                            if (o.field == 'primaryPhone') {
                                updatePhone(entry, o.value);
								db.execute('update contacts set phone="' + o.value + '" where email="' + o.record.get('primaryEmail') + '"');
                            }
                            // Commit Changes
                            entry.updateEntry(function(){
                                Ext.getCmp('gc-grid').store.commitChanges();
                            }, GContact.errorHandler);
                        }
                        else {
                            
                            if (o.field == 'title') {
                                db.execute('update contacts set updated=1, titleupdate=1,name="' + o.value + '" where email="' + o.record.get('primaryEmail') + '"');
                            }
                            if (o.field == 'primaryEmail') {
                                db.execute('update contacts set updated=1, emailupdate=1,email="' + o.value + '" where email="' + o.record.get('primaryEmail') + '"');
                            }
                            if (o.field == 'primaryPhone') {
                                db.execute('update contacts set updated=1, phoneupdate=1,phone="' + o.value + '" where email="' + o.record.get('primaryEmail') + '"');
                            }
                            Ext.getCmp('gc-grid').store.commitChanges();
                        }
                    }
                }
            }
        }
    });

    isServerAvailable();
    updateContactsFromServer();
    
});
