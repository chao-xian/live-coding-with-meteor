if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to live-coding-with-meteor.";
  };

  Template.hello.users = function() {
    return Meteor.users.find();
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
