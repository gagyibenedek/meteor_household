S = {
  OPERATION_SWITCH: "OPERATION_SWITCH",
  TOTAL_SESSION: "TOTAL_SESSION"
}

Meteor.users.deny({
  update: function() {
    return true;
  }
});