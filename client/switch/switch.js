Template.switch.events({
  'click .switch-button': function (event) {
    this.on = !this.on;
    var on = this.on;
    event.target.className = on ? "switch-button" : "switch-button off";
    Session.set(S.OPERATION_SWITCH, this);
  }
});