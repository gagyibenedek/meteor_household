Meteor.subscribe(C.COLL_ENTRIES_PUBLISH);

Template.log.helpers({
   logRows: function(){
      return Entries.find({}, {sort: {createdAt: -1}});
   },
   positiveOperation: function(){
      return this.operation === 1;
   }
});

Template.log.events({
   "click .delete": function(){
      var that = this;
      swal(POP.deleteEntry, function() {
         Meteor.call("deleteEntry", that);
         Utils.refreshTotal();
      });
   }
});
