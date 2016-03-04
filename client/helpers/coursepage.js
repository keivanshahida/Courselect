// TO DO
// 1) Get coursepage to populate with course specific data

Template.coursepage.helpers({

//Retrieve courses from collection
  // courses: function(){
  // 	return Courses.find().fetch();
  // }

 courses: function(){
  	return Courses.findOne({_id: this.params._id});
  }

// Router.route('/coursepage/:_id', function () {
//   this.render('coursepage', {
//     courses: function () {
//       return Courses.findOne({_id: this.params._id}).fetch();
//     }
//   });
// });

});