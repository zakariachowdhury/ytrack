Ext.data.GContactProxy = function(data){
    Ext.data.GContactProxy.superclass.constructor.call(this);
    this.data = data;
};
Ext.extend(Ext.data.GContactProxy, Ext.data.DataProxy, {
    results: function(params, reader, callback, scope, arg) {
        return function(result) {
            var emails, phones, emailAddresses, phoneNumbers, i, j;
            var contact = [];
            var entries = result.feed.entry;
            for (i = 0; i < entries.length; i++) {
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
                contact.push({
                    primaryEmail: primaryEmail,
                    primaryPhone: primaryPhone,
                    emails: emails,
                    phones: phones,
                    title: entries[i].title.getText(),
                    rawObj: entries[i]
                });
            }
            var ttl = result.feed.getTotalResults().getValue();
            result = reader.readRecords(contact);
            result.totalRecords = ttl;
            callback.call(scope, result, arg, true);
        }
    },
    load : function(params, reader, callback, scope, arg){
        var query = new google.gdata.contacts.ContactQuery(this.data.uri);
        query.setMaxResults(params.limit || this.data.limit || 50); // Max results query setting
        query.setStartIndex((params.start + 1) || (this.data.start + 1) || 1); // Starting idx (1 not 0)
        var cs = this.data.contactService;
        cs.getContactFeed(query, this.results(params, reader, callback, scope, arg), GContact.errorHandler);
    }
});