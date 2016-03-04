// Runs on server at startup
Meteor.startup(function() {

	//Remove all courses before seeding
	Courses.remove({});

	//Load courses
	var courses = JSON.parse(Assets.getText('courses.json'));
	courses.forEach(function(course) {
		Courses.insert(course);
	})
});
