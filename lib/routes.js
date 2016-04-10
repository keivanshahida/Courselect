// TO DO:
// 1) Custom body classes: https://github.com/meteor-london/body-class
// 2) Reformat CSS with body class tags to modularize styles


// default layout (for all routes)
Router.configure({
  layoutTemplate: 'basiclayout'
});

Router.route('/', function () {
  this.render('home');
});
Router.route('/login');

// TEMPORARY ROUTE USED FOR CREATING USERS
Router.route('/register');

// ALL ROUTES BELOW ARE FOR LOGGED IN USERS ONLY

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

// SETTINGS PAGE
Router.route('/settings', function () {
  this.layout('navbarlayout');
  this.render('settings');
});

//PREVENT USER ACCESS TO RESTRICTED PAGES, NOTE THAT HOME HAS UNDEFINED ROUTE NAME
var loginAccessable = ['login', 'register'];

Router.onBeforeAction(function () {
  // all properties available in the route function
  // are also available here such as this.params

  //Reroute to login if user not logged in
  if (!Meteor.userId() && loginAccessable.indexOf(Router.current().route.getName()) < 0 && Router.current().route.getName() != null) {
    this.render('login');
  } 
  //Reroute to search if user logged in
  else if(Meteor.userId() && (loginAccessable.indexOf(Router.current().route.getName()) >= 0 || Router.current().route.getName() == null)){
    this.layout('navbarlayout');
    this.render('search');
  }
  else {
    // otherwise don't hold up the rest of hooks or our route/action function
    // from running
    this.next();
  }
});