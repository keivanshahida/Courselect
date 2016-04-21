// TO DO:
// 1) Fix createUser function so that it adds a user to the DB

Template.register.events({
    'submit form': function(){
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

        Accounts.onCreateUser((options, user) => {
            var firstname = "John";
            var lastname = "Smithson";

            user.initials = first_name[0].toUpperCase() + last_name[0].toUpperCase();

            // Don't forget to return the new user object at the end!
            return user;
        });
    }
});



//USE THIS LINK FOR CUSTOM DATA INFO: http://guide.meteor.com/accounts.html#custom-user-data 

// TO ADD USER MANUALLY IN CONSOLE:
// Accounts.createUser({email: "skim@icloud.com", password: "1234", profile: {firstname: "Shawn", lastname: "Kim", school: "Horace Mann School", grad_year: 2016}});
// Accounts.createUser({email: "ks@icloud.com", password: "1234"});

// Student: (
// "id": "integer",
// "schedule": {

// "ninth" : [
// //COURSE ID'S
// ],

// "tenth": [
// //COURSE ID'S
// ],

// "eleventh":[
// //COURSE ID'S
// ],

// "twelfth":[
// //COURSE ID'S
// ]
// },

// "saved":[
// //COURSE ID'S

// ],
// "firstname" : "string",
// "lastname" : "string",
// "school" : "string",
// "grad_year": "integer",
// "current_year": "integer",
// "email" : "string",
// "password" : "string"

// }