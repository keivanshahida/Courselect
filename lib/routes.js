// default layout (for all routes)
Router.configure({
  layoutTemplate: 'basiclayout'
});

Router.route('/', function () {
  this.render('home');
});
Router.route('/login');

// SEARCH PAGE
Router.route('/search', function () {
  this.layout('navbarlayout');
  this.render('search');
});

//SEARCH RESULTS
Router.route('/results', function () {
  this.layout('navbarlayout');
  this.render('courseresults');
});

//COURSEPAGE
Router.route('/coursepage/:_id', function () {
  this.layout('navbarlayout', {
    data: function () { 
      return Courses.findOne({_id: this.params._id}) 
    }
  });
  this.render('coursepage');
});