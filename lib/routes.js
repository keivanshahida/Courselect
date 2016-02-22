// default layout (for all routes)
Router.configure({
  layoutTemplate: 'basiclayout'
});

Router.route('/', function () {
  this.render('home');
});
Router.route('/login');

// specifying layout per route
Router.route('/post/:_id', function () {
  this.layout('page_specific_layout');
});
