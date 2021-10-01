//variables to store class details
//var c_id;
//var c_subject;
//var c_campus;
//var c_room;
//var c_date;
//var c_startTime;
//var c_finishTime;

//stores the current date in a variable and displays this date at the top of classes.html
var dt = new Date();
var found ;
//this variable is used to query dd/mm/yyyy against the database
var dt2 = dt.getDate() + "/" + (1+dt.getMonth()) + "/" + dt.getFullYear();

//this converts a month from numeric to text form
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[dt.getMonth()];
dt = "Classes for today: <b>" + dt.getDate() + " " + (n) + " " + dt.getFullYear() + "</b>";
document.getElementById("datetime").innerHTML = dt.toLocaleString();

var Database_Name = 'classDatabase10';  
var Version = 1.0;  
var Text_Description = 'class Database Example';  
var Database_Size = 2 * 1024 * 1024;  
var db = openDatabase(Database_Name, Version, Text_Description, Database_Size);
//var db = openDatabase('classDB', '1.0', 'Test DB', 2 * 1024 * 1024);
db.transaction(function (tx) {
	//tx.executeSql('DROP TABLE Classes');
	tx.executeSql('CREATE TABLE IF NOT EXISTS Classes (id unique, subject, campus, room, date, startTime, finishTime)');
	
	//insert test values
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (1, "300580 Programming Fundamentals", "Parramatta", "131", "31/10/2019", "10:00am", "12:00pm")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (2, "300580 Programming Fundamentals", "Parramatta", "131", "31/10/2019", "12:00pm", "2:00pm")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (3, "300580 Programming Fundamentals", "Penrith", "54", "31/10/2019", "1:00pm", "3:00pm")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (4, "300580 Programming Fundamentals", "Campbelltown", "22", "31/10/2019", "10:00am", "12:00pm")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (5, "300580 Programming Fundamentals", "Campbelltown", "23", "31/10/2019", "12:00pm", "2:00pm")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (6, "300565 Computer Networking", "Parramatta", "151", "31/10/2019", "3:00pm", "5:00pm")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (7, "300565 Computer Networking", "Parramatta", "152", "31/10/2019", "5:00pm", "7:00pm")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (8, "300565 Computer Networking", "Penrith", "45", "31/10/2019", "12:00pm", "2:00pm")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (9, "300565 Computer Networking", "Campbelltown", "26", "31/10/2019", "11:00am", "1:00pm")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (10, "300565 Computer Networking", "Campbelltown", "27", "31/10/2019", "1:00pm", "3:00pm")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (11, "300700 Statistical Decision Making", "Parramatta", "87", "31/10/2019", "9:00am", "11:00am")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (12, "300700 Statistical Decision Making", "Penrith", "24", "31/10/2019", "9:00am", "11:00am")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (13, "300700 Statistical Decision Making", "Penrith", "25", "31/10/2019", "11:00am", "13:00pm")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (14, "300700 Statistical Decision Making", "Campbelltown", "5", "31/10/2019", "12:00pm", "14:00pm")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (15, "300700 Statistical Decision Making", "Campbelltown", "6", "31/10/2019", "14:00pm", "16:00pm")');
	
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (16, "300104 Database Design and Development", "Parramatta", "141", "31/10/2019", "10:00am", "12:00pm")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (17, "300104 Database Design and Development", "Parramatta", "145", "31/10/2019", "12:00pm", "2:00pm")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (18, "300104 Database Design and Development", "Penrith", "56", "31/10/2019", "1:00pm", "3:00pm")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (19, "300104 Database Design and Development", "Campbelltown", "26", "31/10/2019", "10:00am", "12:00pm")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (20, "300104 Database Design and Development", "Campbelltown", "27", "31/10/2019", "12:00pm", "2:00pm")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (21, "300585 Systems Analysis and Design", "Parramatta", "167", "31/10/2019", "3:00pm", "5:00pm")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (22, "300585 Systems Analysis and Design", "Parramatta", "174", "31/10/2019", "5:00pm", "7:00pm")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (23, "300585 Systems Analysis and Design", "Penrith", "24", "31/10/2019", "12:00pm", "2:00pm")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (24, "300585 Systems Analysis and Design", "Campbelltown", "15", "31/10/2019", "11:00am", "1:00pm")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (25, "300585 Systems Analysis and Design", "Campbelltown", "11", "31/10/2019", "1:00pm", "3:00pm")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (26, "300144 Object Oriented Analysis", "Parramatta", "26", "31/10/2019", "9:00am", "11:00am")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (27, "300144 Object Oriented Analysis", "Penrith", "27", "31/10/2019", "9:00am", "11:00am")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (28, "300144 Object Oriented Analysis", "Penrith", "30", "31/10/2019", "11:00am", "13:00pm")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (29, "300144 Object Oriented Analysis", "Campbelltown", "10", "31/10/2019", "12:00pm", "14:00pm")');
	tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (30, "300144 Object Oriented Analysis", "Campbelltown", "12", "31/10/2019", "14:00pm", "16:00pm")');
	
	alldetails();
});

function searchClasses() {
	c_subject = document.getElementById("subject").value;
	c_campus = document.getElementById("campus").value;
	
	var msg =" ";
	
	//for testing/debugging purposes, searching by date is disabled: (AND date = "'+ dt2 +'")
	db.transaction(function (tx) { 
		tx.executeSql('SELECT id, subject, campus, room, date, startTime, finishTime FROM Classes WHERE subject = "'+ c_subject +'" AND campus = "'+ c_campus +'"', [], function (tx, results)
		{ 
			var len = results.rows.length, i; 
			msg = "<p>Today's classes that match your criteria: " + len + "</p>"; 
			document.querySelector('#classStatus').innerHTML =  msg; 
		    if (len == 0){
				noResult();
			} else {
				found = len;
				foundResult();
			}
			
			for (i = 0; i < len; i++) { 
				msg = "<p><b>" + results.rows.item(i).subject + "</b><br> " + results.rows.item(i).campus + ", Room " + results.rows.item(i).room +"<br> " + results.rows.item(i).startTime + " to " + results.rows.item(i).finishTime + "</b></p>"; 
				document.querySelector('#classStatus').innerHTML +=  msg; 
			} 
		}, null); 
	});
}

		function resetData() {              
			db.transaction(function (tx) {
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (1, "300580 Programming Fundamentals", "Parramatta", "131", "31/10/2019", "10:00am", "12:00pm")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (2, "300580 Programming Fundamentals", "Parramatta", "131", "31/10/2019", "12:00pm", "2:00pm")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (3, "300580 Programming Fundamentals", "Penrith", "54", "31/10/2019", "1:00pm", "3:00pm")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (4, "300580 Programming Fundamentals", "Campbelltown", "22", "31/10/2019", "10:00am", "12:00pm")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (5, "300580 Programming Fundamentals", "Campbelltown", "23", "31/10/2019", "12:00pm", "2:00pm")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (6, "300565 Computer Networking", "Parramatta", "151", "31/10/2019", "3:00pm", "5:00pm")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (7, "300565 Computer Networking", "Parramatta", "152", "31/10/2019", "5:00pm", "7:00pm")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (8, "300565 Computer Networking", "Penrith", "45", "31/10/2019", "12:00pm", "2:00pm")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (9, "300565 Computer Networking", "Campbelltown", "26", "31/10/2019", "11:00am", "1:00pm")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (10, "300565 Computer Networking", "Campbelltown", "27", "31/10/2019", "1:00pm", "3:00pm")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (11, "300700 Statistical Decision Making", "Parramatta", "87", "31/10/2019", "9:00am", "11:00am")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (12, "300700 Statistical Decision Making", "Penrith", "24", "31/10/2019", "9:00am", "11:00am")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (13, "300700 Statistical Decision Making", "Penrith", "25", "31/10/2019", "11:00am", "13:00pm")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (14, "300700 Statistical Decision Making", "Campbelltown", "5", "31/10/2019", "12:00pm", "14:00pm")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (15, "300700 Statistical Decision Making", "Campbelltown", "6", "31/10/2019", "14:00pm", "16:00pm")');
				
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (16, "300104 Database Design and Development", "Parramatta", "141", "31/10/2019", "10:00am", "12:00pm")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (17, "300104 Database Design and Development", "Parramatta", "145", "31/10/2019", "12:00pm", "2:00pm")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (18, "300104 Database Design and Development", "Penrith", "56", "31/10/2019", "1:00pm", "3:00pm")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (19, "300104 Database Design and Development", "Campbelltown", "26", "31/10/2019", "10:00am", "12:00pm")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (20, "300104 Database Design and Development", "Campbelltown", "27", "31/10/2019", "12:00pm", "2:00pm")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (21, "300585 Systems Analysis and Design", "Parramatta", "167", "31/10/2019", "3:00pm", "5:00pm")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (22, "300585 Systems Analysis and Design", "Parramatta", "174", "31/10/2019", "5:00pm", "7:00pm")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (23, "300585 Systems Analysis and Design", "Penrith", "24", "31/10/2019", "12:00pm", "2:00pm")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (24, "300585 Systems Analysis and Design", "Campbelltown", "15", "31/10/2019", "11:00am", "1:00pm")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (25, "300585 Systems Analysis and Design", "Campbelltown", "11", "31/10/2019", "1:00pm", "3:00pm")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (26, "300144 Object Oriented Analysis", "Parramatta", "26", "31/10/2019", "9:00am", "11:00am")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (27, "300144 Object Oriented Analysis", "Penrith", "27", "31/10/2019", "9:00am", "11:00am")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (28, "300144 Object Oriented Analysis", "Penrith", "30", "31/10/2019", "11:00am", "13:00pm")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (29, "300144 Object Oriented Analysis", "Campbelltown", "10", "31/10/2019", "12:00pm", "14:00pm")');
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (30, "300144 Object Oriented Analysis", "Campbelltown", "12", "31/10/2019", "14:00pm", "16:00pm")');
				});
				alldetails(); 
		} 
		
		function Insert() {
			var c_id = document.getElementById("tbID").value;
			var c_subject = document.getElementById("subject").value;
			var c_campus = document.getElementById("campus").value;
			var c_room = document.getElementById("room").value;
			var c_date = document.getElementById("date").value;
			var c_startTime = document.getElementById("startTime").value;
			var c_finishTime = document.getElementById("finishTime").value;
			
			db.transaction(function (tx) {
				tx.executeSql('INSERT INTO Classes (id, subject, campus, room, date, startTime, finishTime) values (' + c_id + ', "' + c_subject + '", "' + c_campus + '", "' + c_room + '", "' + c_date + '", "' + c_startTime + '", "' + c_finishTime + '")');
				
			});
			alldetails();
		}
        
		//not using this one
		function deleteAll() {
            $("#tblGrid").remove(); 
        } 
		
		function del() {  
            var id = document.getElementById("ddlid").value;  
          //  alert(id);  
            db.transaction(function (tx) {  
                tx.executeSql('delete from Classes where id=' + id + '');  
            });  
  
            empidbind();  
  
            alldetails();  
        }  
		
		function myFunction()  
        {  
		//Change data Dynamicly when selecting room Number
		var c_id = document.getElementById("ddlid").value;  

            db.transaction(function (tx) {  
                tx.executeSql('SELECT * from Classes where id=' + c_id + '', [], function (tx, results)  
                {  
                    document.getElementById("subject").value = results.rows.item(0).subject;
                    document.getElementById("campus").value = results.rows.item(0).campus;
                    document.getElementById("room").value = results.rows.item(0).room;
					document.getElementById("date").value = results.rows.item(0).date;
					document.getElementById("startTime").value = results.rows.item(0).startTime;
					document.getElementById("finishTime").value = results.rows.item(0).finishTime;
                }, null);  
            });  
             
        } 
		
        function showdel() {  
        //show delete page
            empidbind();  
  
            $('#tdorginal').hide();  
            $('#tdid').show();  
            $('#btnupdate').hide();  
            $('#btnInsert').hide();  
            $('#btndel').show();
            $('#btndel2').show();			
            $('#btninsertshw').show();  
            $('#btnupdateshw').show();  
            $('#btndeleteshw').hide();  
            ////////////  
			$('#r1').show();
            $('#r2').hide();  
            $('#r3').hide();  
            $('#r4').hide();  
			$('#r5').hide();  
            $('#r6').hide();  
            $('#r7').hide();  
        }  
  
        function showin()  
        {  
		//show insert page
            $('#tdid').hide();  
            $('#tdorginal').show();  
            
            $('#btnupdate').hide();  
            $('#btnInsert').show();  
            $('#btndel').hide();
            $('#btndel2').hide();			
            $('#btninsertshw').hide();  
            $('#btnupdateshw').show();  
            $('#btndeleteshw').show();  
            ////////////  
            $('#r1').show();
            $('#r2').show();  
            $('#r3').show();  
            $('#r4').show();  
			$('#r5').show();  
            $('#r6').show();  
            $('#r7').show();  
  
            /////////////  
          document.getElementById("tbID").value='';  
          document.getElementById("tbName").value='';  
          document.getElementById("tbStatus").value='';  
  
               empidbind();  
        }  
  
  
        function empidbind()  
        {  
            db.transaction(function (tx) {  
                tx.executeSql('SELECT * FROM Classes', [], function (tx, results) {  
                    var len = results.rows.length, i;  
                    document.getElementById("ddlid").innerHTML = '';  
                    var str = '';  
                    for (i = 0; i < len; i++) {  
                        str += "<option value=" + results.rows.item(i).id + ">" + results.rows.item(i).id + "</option>";  
                        document.getElementById("ddlid").innerHTML += str;  
                        str = '';  
                    }  
                }, null);  
            });  
  
        }  
  
        function showupdte()  
        {  
		//show update page
            empidbind();  
  
  
            $('#tdorginal').hide();  
            $('#tdid').show();  
            $('#btnupdate').show();  
            $('#btnInsert').hide();  
            $('#btndel').hide();  
            $('#btninsertshw').show();  
            $('#btnupdateshw').hide();  
            $('#btndeleteshw').show();   
			///
			$('#r1').show();
            $('#r2').show();  
            $('#r3').show();  
            $('#r4').show();  
			$('#r5').show();  
            $('#r6').show();  
            $('#r7').show(); 
        }  
  
        function updte() {  
            
			var c_id = document.getElementById("ddlid").value;
			var c_subject = document.getElementById("subject").value;
			var c_campus = document.getElementById("campus").value;
			var c_room = document.getElementById("room").value;
			var c_date = document.getElementById("date").value;
			var c_startTime = document.getElementById("startTime").value;
			var c_finishTime = document.getElementById("finishTime").value;
  
            db.transaction(function (tx) {  
				tx.executeSql('update Classes set subject="' + c_subject + '", campus="' + c_campus + '", room="' + c_room + '", date="' + c_date + '", startTime="' + c_startTime + '", finishTime="' + c_finishTime + '" where id=' + c_id + '');
            });  
  
            alldetails();  
        }  
		
		function alldetails()  
        {  
            db.transaction(function (tx) {  
                tx.executeSql('SELECT id, subject, campus, room, date, startTime, finishTime FROM Classes', [], function (tx, results) {  
				
				var len = results.rows.length, i;  
                    // document.getElementById("tblGrid").innerHTML = '';  
                    $("#tblGrid").find("tr:gt(0)").remove();  
                    var str = '';  
                    for (i = 0; i < len; i++) {  
                        str += "<tr>";  
                        str += "<td>" + results.rows.item(i).id + "</td>";  
                        str += "<td>" + results.rows.item(i).subject + "</td>";  
                        str += "<td>" + results.rows.item(i).campus + "</td>";  
                        str += "<td>" + results.rows.item(i).room + "</td>";  
						str += "<td>" + results.rows.item(i).date + "</td>";  
						str += "<td>" + results.rows.item(i).startTime + "</td>";  
						str += "<td>" + results.rows.item(i).finishTime + "</td>";  
                        str += "</tr>";  
                        document.getElementById("tblGrid").innerHTML += str;  
                        str = '';  
                    }  
                }, null);  
            });  
		}
		
		
		function noResult() {
			session.service('ALTextToSpeech').then(function (tts) {
				tts.say("Sorry, I couldn't find what you need!");
		  }, function (error) {
			console.log(error);
		  });
		}
		
		function foundResult() {
			session.service('ALTextToSpeech').then(function (tts) {
				tts.say('Ah, I found ' + found + 'class details for you!');
		  }, function (error) {
			console.log(error);
		  });  
		}	  
         
    	