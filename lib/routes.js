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

  if(this.params.query.department != "" && this.params.query.credits != ""){
    var query = {"department": parseInt(this.params.query.department), "credits": parseFloat(this.params.query.credits)};
    console.log("Department and Credits included");
  }
  else if(this.params.query.department != ""){
    var query = {"department": parseInt(this.params.query.department)};
    console.log("Department included");
  }
  else if (this.params.query.credits != ""){
    var query = {"credits": parseFloat(this.params.query.credits)};
    console.log("Credits included");
  }

  this.layout('navbarlayout');
  this.render('courseresults', {
    data:function(){
      if (this.params.query.department == "" && this.params.query.credits == ""){
        console.log("Department and credits not included");
        return {courses: Courses.find()};
      }
      else{
        return {courses: Courses.find(query)};
      }
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

// SCHEDULE PAGE
Router.route('/schedule', function () {
  this.layout('navbarlayout');
  this.render('schedule');
});

// SETTINGS PAGE
Router.route('/settings', function () {
  this.layout('navbarlayout');
  this.render('settings');
});

//PREVENT USER ACCESS TO RESTRICTED PAGES. NOTE THAT HOME HAS UNDEFINED ROUTE NAME.
var noLoginRequired = ['login', 'register'];

Router.onBeforeAction(function () {

  // all properties available in the route function
  // are also available here such as this.params

  //Reroute to login if user not logged in
  if (!Meteor.userId() && noLoginRequired.indexOf(Router.current().route.getName()) < 0 && Router.current().route.getName() != null) {
    this.render('login');
  } 
  //Reroute to search if user logged in
  else if(Meteor.userId() && (noLoginRequired.indexOf(Router.current().route.getName()) >= 0 || Router.current().route.getName() == null)){
    this.layout('navbarlayout');
    this.render('search');
  }
  else {
    // otherwise don't hold up the rest of hooks or our route/action function
    // from running
    this.next();
  }
});