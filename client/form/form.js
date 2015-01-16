Session.set(S.OPERATION_SWITCH,
  {
    id: S.OPERATION_SWITCH,
    label: "Operation",
    onText: "--",
    offText: "++",
    on: true
  });

Template.form.helpers({
  switches: function () {
    return [Session.get(S.OPERATION_SWITCH)];
  },
  categorySelector: function(){
    return Dropdowns.categorySelector;
  }
});

Template.form.events({
  "submit form": function(event) {
    var category = Session.get(Dropdowns.categorySelector.id) ? 
      Session.get(Dropdowns.categorySelector.id) : Dropdowns.categorySelector.defaultValue;
    event.preventDefault();
    var entry = {
      sum: parseInt(event.target.sum.value),
      comment: event.target.comment.value,
      user: Meteor.user().username,
      createdAt: new Date(),
      category: category.key,
      proportion: category.value,
      operation: Session.get(S.OPERATION_SWITCH).on ? -1 : 1 // multiply with -1 if operation is subtraction and so on
    };

    if(isNaN(entry.sum)){
      swal(POP.entryErrorNaN);
    } else {
      Meteor.call("addEntry", entry);
      Utils.refreshTotal();
      swal(POP.entrySaved);
    }
  },
  
  "keydown .sum": function(event){
    if((event.keyCode < 48 || event.keyCode > 57) // number
        && event.keyCode != 8 //backspace
        && event.keyCode != 46 //delete
        && event.keyCode != 37 // left arrow
        && event.keyCode != 39 //right arrow
        && event.keyCode != 9 //tab
        ){ 
      event.preventDefault();
    }
  }
});

