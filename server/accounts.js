 Accounts.onCreateUser((options, user) => {

 	user.profile = {
 		firstname: "Shawn", 
 		lastname: "Kim", 
 		school: "Horace Mann School", 
 		grad_year: 2016,
 		schedule: {
 			"ninth" : {
				course1: "Geometry",
				course2: "Biology",
				course3: "Atlantic World History",
				course4: "English 9",
				course5: "Spanish 2 Honors",
				halfCred1: "History of Jazz",
				halfCred2: "Wind Ensemble",
				currentYear: false,
				finished: true
 			},
			"tenth": {
				course1: "Algebra 2 & Trigonometry",
				course2: "Chemistry",
				course3: "US History",
				course4: "English 10",
				course5: "Spanish 3 Honors",
				halfCred1: "Computer Science 2",
				halfCred2: "Wind Ensemble",
				currentYear: false,
				finished: true
			},
			"eleventh":{
				course1: "Pre Calculus AB",
				course2: "Physics",
				course3: "Islamic World History",
				course4: "English 11",
				course5: "Spanish 4 Honors",
				halfCred1: "Music Technology",
				halfCred2: "Empty Course",
				currentYear: false,
				finished: true
			},
			"twelfth":{
				course1: {choice1: "", choice2: "", choice3: "", department: 0},
				course2: {choice1: "", choice2: "", choice3: "", department: 0},
				course3: {choice1: "", choice2: "", choice3: "", department: 0},
				course4: {choice1: "", choice2: "", choice3: "", department: 0},
				course5: {choice1: "", choice2: "", choice3: "", department: 0},
				halfCred1: {choice1: "", choice2: "", choice3: ""},
				halfCred2: {choice1: "", choice2: "", choice3: ""},
				currentYear: true,
				finished: false
			}	
		},
		saved: ["0016", "0106"]
	};

 	// var myFirstname = "John";
 	// user.firstname = myFirstname;

 	// var myLastname = "Smith";
 	// user.lastname = myLastname;

 	// user.initials = myFirstname[0].toUpperCase() + myLastname[0].toUpperCase();
 	// console.log("Hello", user);

    // Don't forget to return the new user object at the end!
    return user;
});