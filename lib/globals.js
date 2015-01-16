C = {
    COLL_ENTRIES: "COLL_ENTRIES",
    COLL_ENTRIES_PUBLISH: "COLL_ENTRIES_PUBLISH",
    COLL_CACHE: "COLL_CACHE"
}  

Entries = new Meteor.Collection(C.COLL_ENTRIES);

Entries.deny({
    insert: function(){},
    remove: function(){}
})
