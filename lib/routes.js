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
  console.log(this.params.query);
  var query = {"department": parseInt(this.params.query.department), "credits": parseFloat(this.params.query.credits)};
  this.layout('navbarlayout');
  this.render('courseresults', {
    data:function(){
      return {courses: Courses.find(query)};
    }
  });
});

//COURSEPAGE
Router.route('/coursepage/:number', function () {
  this.layout('navbarlayout', {
    data: function () { 
      return Courses.findOne({number: this.params.number}) 
    }
  });
  this.render('coursepage');
});