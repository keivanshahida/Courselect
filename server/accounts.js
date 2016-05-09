 Accounts.onCreateUser((options, user) => {

 	user.profile = {
 		firstname: "Shawn", 
 		lastname: "Kim", 
 		school: "Horace Mann School", 
 		grad_year: 2016,
 		schedule: {
 			"ninth" : {
				//SUBJECTS
				mathematics: "Geometry",
				science: "Biology",
				history: "Atlantic World History",
				english: "English 9",
				language: "Spanish 2 Honors",
				halfCredA: "History of Jazz",
				halfCredB: "Wind Ensemble"
 			},
			"tenth": {
				//SUBJECTS
				mathematics: "Algebra 2 & Trigonometry",
				science: "Chemistry",
				history: "US History",
				english: "English 10",
				language: "Spanish 3 Honors",
				halfCredA: "Computer Science 2",
				halfCredB: "Wind Ensemble"
			},
			"eleventh":{
				//SUBJECTS
				mathematics: "Pre Calculus AB",
				science: "Physics",
				history: "Islamic World History",
				english: "English 11",
				language: "Spanish 4 Honors",
				halfCredA: "Music Technology",
				halfCredB: "Empty Course"
			},
			"twelfth":{
				//SUBJECTS

			}	
		}
	};

 	// var mySchool = "Los Angeles High School";
 	// user.school = mySchool;

 	// var myFirstname = "John";
 	// user.firstname = myFirstname;

 	// var myLastname = "Smith";
 	// user.lastname = myLastname;

 	// var myGradyear = 2016; 
 	// user.gradyear = myGradyear;

 	// user.initials = myFirstname[0].toUpperCase() + myLastname[0].toUpperCase();
 	// console.log("Hello", user);

    // Don't forget to return the new user object at the end!
    return user;
});