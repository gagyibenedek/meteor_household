var actualValue = new ReactiveVar(),
    hidden = new ReactiveVar(),
    nonDefault = new ReactiveVar();
actualValue.set(false);
hidden.set(true);
nonDefault.set(false);

Template.dropdown.helpers({
    "actualValue": function(){
        return actualValue.get();
    },
    "hidden": function(){
        return hidden.get() ? "hidden" : "";
    },
    "nonDefault": function(){
        return nonDefault.get();
    }
});

Template.dropdownValue.helpers({
    "nonActual": function(){
        return this.key !== actualValue.get();
    }
});

Template.dropdown.events({
    "click .dropdown-values": function(event){
        var key = event.target.dataset.key,
            value = event.target.dataset.value,
            def = event.target.dataset.def;
        //if element selected from list
        if(event.target.tagName === "LI"){
            Session.set(this.id, {"key": key, "value": value});
            actualValue.set(key);
            hidden.set(true);
            if(def){
                nonDefault.set(false);
            } else {
                nonDefault.set(true);
            }
        } 
    },
    
    "blur .dropdown-container": function(){
        hidden.set(true);
    },
    
    "click .dropdown-actual": function(){
        hidden.set(!hidden.get());
    }
});