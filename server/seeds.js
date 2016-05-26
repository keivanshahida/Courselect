Meteor.methods({

	//Seed departments collection
	seed(){
		Departments.remove({});
		var departments = JSON.parse(Assets.getText('departments.json'))

		departments.forEach(function(department){
			Departments.insert(department);
		})

		//Remove all courses before seeding
		Courses.remove({});

		//Load courses
		var courses = JSON.parse(Assets.getText('courses.json'));
		courses.forEach(function(course) {
			Courses.insert(course);
		})
	}
});

//Meteor shell
//Meteor.call("seed")

//CLIENT CAN CALL THIS!!!