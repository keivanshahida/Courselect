// TO DO:
// 1) Fix createUser function so that it adds a user to the DB

Template.register.events({
    'submit form': function(){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email: email,
            password: password,
            profile: {
                firstname: firstname,
                lastname: lastname,
                school: school,
            }

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

// TO ADD USER MANUALLY IN CONSOLE:
// Accounts.createUser({email: "ks@icloud.com", password: "1234", type: "student", firstname: "Keivan", lastname: "Shahida", grad_year: 2016, school: "Horace Mann School"});
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