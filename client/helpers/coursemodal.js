Template.coursemodal.helpers({
    
    courseName(courseId) {
      const course = Courses.findOne({_id: courseId});
      return course ? course.name : 'N/A';
    },

    departmentName(departmentNumber){

    	const department = Departments.findOne({number: departmentNumber});
    	return department ? department.name : 'N/A';

    }
});

Template.coursemodal.events({



});


// TEMPLATE
//{{courseName user.profile.schedule.year12.course1}}

//{{>coursemodal course=user.profile.schedule.twelfth.course1}}

// in coursemodal template
// {{course.choice1}}
// {{course.choice2}}