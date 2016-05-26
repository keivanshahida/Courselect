Template.login.events({
	'submit form': function(event, template){
		event.preventDefault();
		
		var email = $('[name=email]').val();
		var password = $('[name=password]').val();
		Meteor.loginWithPassword(email, password, function(error){
			if(error){
				console.log(error.reason); // Output error if registration fails
				// var myError = error.reason;
				// template.find('#error').html(myError);

			} else {
				Router.go("search");  // Redirect user if registration succeeds
			}
		});
	}
});