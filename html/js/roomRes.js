 
 
 /* ============Note ===================*/
 //See alldetails function for using one table or two tables
 //THis is only for test
 //Code Referenced from https://www.c-sharpcorner.com/article/crud-operations-using-websql-in-html5-and-jquery/
 //Clear broswer database if anything related to DB are changed 
        var found ;
        var Database_Name = 'roomDatabase';  
        var Version = 1.0;  
        var Text_Description = 'Room Database Example';  
        var Database_Size = 2 * 1024 * 1024;  
        var dbObj = openDatabase(Database_Name, Version, Text_Description, Database_Size);  
        dbObj.transaction(function (tx) {  
            
            tx.executeSql('CREATE TABLE IF NOT EXISTS Room_Table (id unique, roomNum, status)');  

			/*====================Test Data ====================*/
            
			/* =====================room Data====================== */
			
			tx.executeSql('insert into Room_Table(id, roomNum, status) values(1,"1","Available" )');
            tx.executeSql('insert into Room_Table(id, roomNum, status) values(2,"2","Available" )');
            tx.executeSql('insert into Room_Table(id, roomNum, status) values(3,"3","Reserved" )');			
			tx.executeSql('insert into Room_Table(id, roomNum, status) values(4,"4","Reserved" )');
			tx.executeSql('insert into Room_Table(id, roomNum, status) values(5,"5","Available" )');
			tx.executeSql('insert into Room_Table(id, roomNum, status) values(6,"6","Available" )');
			tx.executeSql('insert into Room_Table(id, roomNum, status) values(7,"7","Available" )');
			tx.executeSql('insert into Room_Table(id, roomNum, status) values(8,"8","Reserved" )');
			/* ========================================= */
			
            alldetails();  
        });  
        
		
		
		function resetData() {              
			//use this to reset the data since Pepper tablet cannot reset database as google chrome
			dbObj.transaction(function (tx) {
				tx.executeSql('insert into Room_Table(id, roomNum, status) values(1,"1","Available" )');
				tx.executeSql('insert into Room_Table(id, roomNum, status) values(2,"2","Available" )');
				tx.executeSql('insert into Room_Table(id, roomNum, status) values(3,"3","Reserved" )');			
				tx.executeSql('insert into Room_Table(id, roomNum, status) values(4,"4","Reserved" )');
				tx.executeSql('insert into Room_Table(id, roomNum, status) values(5,"5","Available" )');
				tx.executeSql('insert into Room_Table(id, roomNum, status) values(6,"6","Available" )');
				tx.executeSql('insert into Room_Table(id, roomNum, status) values(7,"7","Available" )');
				tx.executeSql('insert into Room_Table(id, roomNum, status) values(8,"8","Reserved" )');
				}); 
				alldetails(); 
		} 
        
		//not using this one
		function deleteAll() {
            $("#tblGrid").remove(); 
        }
		
		function Insert() {         
            var id = document.getElementById("tbID").value;  
            var name = document.getElementById("tbName").value;  
            var status = document.getElementById("tbStatus").value;   
            dbObj.transaction(function (tx) {  
                tx.executeSql('insert into Room_Table(id, roomNum, status) values(' + id + ',"' + name + '","' + status + '")');  
              });  
            alldetails();  
        }  
		
		function del() {  
            var id = document.getElementById("ddlid").value;  
          //  alert(id);  
            dbObj.transaction(function (tx) {  
                tx.executeSql('delete from Room_Table where id=' + id + '');  
            });  
  
            empidbind();  
  
            alldetails();  
        }  
		
		function myFunction()  
        {  
		//Change data Dynamicly when selecting room Number
		var id = document.getElementById("ddlid").value;  

            dbObj.transaction(function (tx) {  
                tx.executeSql('SELECT * from Room_Table where id=' + id + '', [], function (tx, results)  
                {  
                    document.getElementById("tbName").value = results.rows.item(0).roomNum;  
                    document.getElementById("tbStatus").value = results.rows.item(0).status; 
  
                      
                }, null);  
            });  
             
        } 
		
		//update button
		function myFunction()  
        {  
		    //Change data Dynamicly when selecting room Number
            var id = document.getElementById("ddlid").value;  
  
            dbObj.transaction(function (tx) {  
                tx.executeSql('SELECT * from Room_Table where id=' + id + '', [], function (tx, results)  
                {  
				//read database row by id
                    document.getElementById("tbName").value = results.rows.item(0).roomNum;  
                    document.getElementById("tbStatus").value = results.rows.item(0).status;
  
                      
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
            $('#rowName').hide();  
            $('#rowLocation').hide();  
            $('#rowdept').hide();  
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
            $('#rowName').show();  
            $('#rowLocation').show();  
            $('#rowdept').show();  
  
            /////////////  
          document.getElementById("tbID").value='';  
          document.getElementById("tbName").value='';  
          document.getElementById("tbStatus").value='';  
  
               empidbind();  
        }  
  
  
        function empidbind()  
        {  
            dbObj.transaction(function (tx) {  
                tx.executeSql('SELECT * from Room_Table', [], function (tx, results) {  
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
            $('#rowName').show();  
            $('#rowLocation').show();  
            $('#rowdept').show();  
              
        }  
  
        function updte() {  
            
            var id = document.getElementById("ddlid").value;  
            var name = document.getElementById("tbName").value;  
            var location = document.getElementById("tbStatus").value;  
  
            dbObj.transaction(function (tx) {  
                tx.executeSql('update Room_Table set roomNum="' + name + '",Status ="' + location + '" where id=' + id + '');  
            });  
  
            alldetails();  
        }  
  
        function alldetails()  
        {  
            dbObj.transaction(function (tx) {  
			    //Join TABLE <-----------=========================
                tx.executeSql('SELECT id, roomNum, status FROM Room_Table ', [], function (tx, results) {  
                //Not Join TABLE <======================--------
				//tx.executeSql('SELECT id,Name,Location,did FROM Room_Table', [], function (tx, results) {
				
				var len = results.rows.length, i;  
                    // document.getElementById("tblGrid").innerHTML = '';  
                    $("#tblGrid").find("tr:gt(0)").remove();  
                    var str = '';  
                    for (i = 0; i < len; i++) {  
                        str += "<tr>";  
                        str += "<td>" + results.rows.item(i).id + "</td>";  
                        str += "<td>" + results.rows.item(i).roomNum + "</td>";  
                        str += "<td>" + results.rows.item(i).status + "</td>";  
                        str += "</tr>";  
                        document.getElementById("tblGrid").innerHTML += str;  
                        str = '';  
                    }  
                }, null);  
            });  
  
        }

		
		//before
		function searchRoom()  
        {  
            var rName = document.getElementById("roomName").value;
			var rMsg = "";
  
            dbObj.transaction(function (tx) {  
			    tx.executeSql('SELECT id, roomNum, status FROM Room_Table where roomNum = "'+rName+'"', [], function (tx, results)
                //tx.executeSql('SELECT * from Room_Table where e.Name="' + bName + '', [], function (tx, results)  
                {  
					var len = results.rows.length, i;
					rMsg = "<p>Room Found: " + len + "</p>";
					document.querySelector('#roomStatus').innerHTML =  rMsg;
					
					if (len == 0){
						noResult();
					} else {
						found = len;
						foundResult();
					}
						
					for (i = 0; i < len; i++){
					rMsg = "<p><b>"+ "Room" + results.rows.item(i).roomNum + ","+ results.rows.item(i).status +"</b></p>";   
						document.querySelector('#roomStatus').innerHTML +=  rMsg;
					}
                }, null);  
            }); 
        }	

		function noResult() {
			session.service('ALTextToSpeech').then(function (tts) {
				tts.say("Sorry, I couldn't find what the room you looking for!");
		  }, function (error) {
			console.log(error);
		  });
		}
		
		function foundResult() {
			session.service('ALTextToSpeech').then(function (tts) {
				tts.say('Ah, this is the room you are looking for!');
		  }, function (error) {
			console.log(error);
		  });  
		}	  
         
    