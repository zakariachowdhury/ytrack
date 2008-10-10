Ext.data.GearsContactProxy = function(data){
    Ext.data.GearsContactProxy.superclass.constructor.call(this);
    this.data = data;
};
Ext.extend(Ext.data.GearsContactProxy, Ext.data.DataProxy, {
    results: function(params, reader, callback, scope, arg){
        result = reader.readRecords(params.contacts);
        result.totalRecords = params.totalRecords;
        callback.call(scope, result, arg, true);
    },
    load: function(params, reader, callback, scope, arg){
        var db = google.gears.factory.create('beta.database');
        db.open('gcontacts');
        limit = params.limit || this.data.limit || 50;
        offset = (params.start) || (this.data.start) || 0;
        rs = db.execute('select * from Contacts LIMIT ' + limit + ' OFFSET ' + offset);
        var contacts = [];
		var i = 0;
        while (rs.isValidRow()) {
            contacts.push({
                "title": rs.field(0),
                "primaryEmail": rs.field(1),
                "primaryPhone": rs.field(2)
            })
            rs.next();
        }
		
		rs = db.execute('select count(*) from Contacts');
		params.totalRecords = rs.field(0);
        params.contacts = contacts; 
		this.results(params, reader, callback, scope, arg);
        rs.close();
    }
});
