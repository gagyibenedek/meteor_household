Meteor.startup(function(){
    Meteor.publish(C.COLL_ENTRIES_PUBLISH, function () {
        return  Entries.find({},{sort: {createdAt: -1}, limit: 10});
    });
    
    Accounting.getTotalByUser();
})