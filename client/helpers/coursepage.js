Template.coursepage.events({
	'submit form': function(event){
		event.preventDefault();		
	},

	'click #saveChanges': function (event) {
    // save changes to course block
    Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.schedule.twelfth.course1.choice1": "0451"}});
  	}


	// 'click btn btn-primary': function(event){
	// 	event.preventDefault();

		// Check for Users current year



		// Update users schedule
		//Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.schedule.": "yogi"}});
		
		
	// }

	// 'submit savedForm': function(event){
	// 	event.preventDefault();	
	// 	Console.log("Saved course")	
	// }

	
});