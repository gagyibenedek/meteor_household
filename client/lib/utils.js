Utils = {
    formatDate : function (date){
        var m_names = new Array("January", "February", "March", 
        "April", "May", "June", "July", "August", "September", 
        "October", "November", "December");
        
        var curr_date = date.getDate();
        var curr_month = date.getMonth();
        var curr_year = date.getFullYear();
        return curr_date + "-" + m_names[curr_month] + "-" + curr_year;
    },
    
    refreshTotal : function(){
        Meteor.call("getTotalByUser", Meteor.user().username, function(error, result){
            Session.set(S.TOTAL_SESSION, result);
        });
    }
}

Template.registerHelper('formatDate', function(date) {
  return Utils.formatDate(date);
});

