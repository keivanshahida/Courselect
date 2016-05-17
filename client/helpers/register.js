// TO DO:
// 1) Display error for user

Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email: email,
            password: password
        }, function(error){
            if(error){
                console.log(error.reason); // Output error if registration fails
            } 
            else {
            Router.go("search"); // Redirect user if registration succeeds
        }
    });
    }
});

//USE THIS LINK FOR CUSTOM DATA INFO: http://guide.meteor.com/accounts.html#custom-user-data 

// TO ADD USER MANUALLY IN CONSOLE:
// Accounts.createUser({email: "skim@icloud.com", password: "1234", profile: {firstname: "Shawn", lastname: "Kim", school: "Horace Mann School", grad_year: 2016}});
// Accounts.createUser({email: "ks@icloud.com", password: "1234"});