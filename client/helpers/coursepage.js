Template.coursepage.events({
	'submit form': function(event){
		event.preventDefault();		
	},

	'click #saveChanges': function (event) {
    // save changes to course block
    Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.schedule.twelfth.course1.choice1": "0451"}});

  	}
});