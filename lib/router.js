Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function () { reuturn Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});
