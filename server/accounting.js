Accounting = {
    getTotalByUser: function(user){
        var entries = Entries.find().fetch(),
            i = entries.length,
            total = 0;
        
        while(i > 0){
            i--;
            total += entries[i].operation * entries[i].sum;
        }
        
        return total;
    }
}