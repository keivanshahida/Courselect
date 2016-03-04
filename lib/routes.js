// default layout (for all routes)
Router.configure({
  layoutTemplate: 'basiclayout'
});

Router.route('/', function () {
  this.render('home');
});
Router.route('/login');

// // specifying layout per route
// Router.route('/post/:_id', function () {
//   this.layout('navbarlayout');
// });

// specifying layout per route
Router.route('/search', function () {
  this.layout('navbarlayout');
  this.render('search');
});

Router.route('/results', function () {
  this.layout('navbarlayout');
  this.render('courseresults');
});

Router.route('/coursepage/:_id', function () {
  this.layout('navbarlayout');
  this.render('coursepage', {
    courses: function () {
      return Courses.findOne({_id: this.params._id});
    }
  });
});

// Router.route('/coursepage/:_id', function () {
//   this.layout('navbarlayout');
//   this.render('coursepage', {
//     data: {
//         _id: this.params._id
//     }
//   });
// });

