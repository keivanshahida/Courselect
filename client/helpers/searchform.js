Template.searchform.events({

	'submit .search_form': function(event){

		var departmentVal = event.target.department.value;
		var creditVal = event.target.credit.value;
		var levelVal = event.target.level.value;

 	// event.preventDefault();
  //   console.log("Form submitted");
  //   console.log(event.type);

		Router.go('/results');
}
});