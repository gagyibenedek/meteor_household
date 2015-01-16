Meteor.methods({
   addEntry: function (entry){
      Entries.insert(entry);
   },
   
   deleteEntry: function (entry){
      Entries.remove(entry);
   },
   
   getTotalByUser: function(user){
      return Accounting.getTotalByUser(user);
   }
});