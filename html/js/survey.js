	var question1;
	var question2;
	var question3;
	var question4;
	var question5;

	var Database_Name = 'surveyDatabase3';
	var Version = 1.0;
	var Text_Description = 'Survey Database Example';
	var Database_Size = 2 * 1024 * 1024;
	var dbObj = openDatabase(Database_Name, Version, Text_Description, Database_Size);
	dbObj.transaction(function (tx) { 
		tx.executeSql('CREATE TABLE IF NOT EXISTS questionAns (q1, q2, q3, q4, q5)');
		/*tx.executeSql('INSERT INTO questionAns(q1,q2,q3,q4,q5) values ("q11", "q22", "q31", "q41", "q52")');
		tx.executeSql('INSERT INTO questionAns(q1,q2,q3,q4,q5) values ("q12", "q23", "q32", "q43", "q52")');
		tx.executeSql('INSERT INTO questionAns(q1,q2,q3,q4,q5) values ("q11", "q24", "q31", "q44", "q51")');
		tx.executeSql('INSERT INTO questionAns(q1,q2,q3,q4,q5) values ("q12", "q21", "q31", "q42", "q51")');
		tx.executeSql('INSERT INTO questionAns(q1,q2,q3,q4,q5) values ("q12", "q23", "q32", "q45", "q51")'); */
	});

	
	function checkFunction(){
		//check question1
		if(document.getElementById('q11').checked == true){
			question1 = "q11";
		}
		else if (document.getElementById('q12').checked == true) {
			question1 = "q12";
		}
		//check question2
		if(document.getElementById('q21').checked == true){
			question2 = "q21";
		}
		else if (document.getElementById('q22').checked == true) {
			question2 = "q22";
		}
		else if (document.getElementById('q23').checked == true) {
			question2 = "q23";
		}
		else if (document.getElementById('q24').checked == true) {
			question2 = "q24";
		}
		//check question3
		if(document.getElementById('q31').checked == true){
			question3 = "q31";
		}
		else if (document.getElementById('q32').checked == true) {
			question3 = "q32";
		}
		//check question4
		if(document.getElementById('q41').checked == true){
			question4 = "q41";
		}
		else if (document.getElementById('q42').checked == true) {
			question4 = "q42";
		}
		else if (document.getElementById('q43').checked == true) {
			question4 = "q43";
		}
		else if (document.getElementById('q44').checked == true) {
			question4 = "q44";
		}
		else if (document.getElementById('q45').checked == true) {
			question4 = "q45";
		}
		//check question5
		if(document.getElementById('q51').checked == true){
			question5 = "q51";
		}
		else if (document.getElementById('q52').checked == true) {
			question5 = "q52";
		}
		
		if(question1 && question2 && question3 && question4 && question5 != null){
			dbObj.transaction(function (tx) {
				tx.executeSql('insert into questionAns(q1,q2,q3,q4,q5) values("' + question1 + '","' + question2 + '","' + question3 + '","' + question4 + '","' + question5 + '")');
			});	
            //window.location.href="index.html";			
		}		
	}

