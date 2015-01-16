Template.total.created = function(){
   Utils.refreshTotal();    
}

Template.total.helpers({
    total: function(){
        return Session.get(S.TOTAL_SESSION);
    },
    
    inDebt: function(){
        return Session.get(S.TOTAL_SESSION) < 0 
            ? true : false;
    }
});