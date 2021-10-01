 
 
 /* ============Note ===================*/
 //See alldetails function for using one table or two tables
 //THis is only for test
 //Code Referenced from https://www.c-sharpcorner.com/article/crud-operations-using-websql-in-html5-and-jquery/
 //Clear broswer database if anything related to DB are changed 
        var found ;
        var Database_Name = 'bookDatabaseV10';  
        var Version = 1.0;  
        var Text_Description = 'My Book Search DataBase Example';  
        var Database_Size = 2 * 1024 * 1024;  
        var dbObj = openDatabase(Database_Name, Version, Text_Description, Database_Size);  
        dbObj.transaction(function (tx) {  
            
			//Setup both table
            tx.executeSql('CREATE TABLE IF NOT EXISTS Book_Table (id unique, Name, Location,did)');  
            tx.executeSql('CREATE TABLE IF NOT EXISTS status_Table (did unique, dName,estd)');  
  
            //Reference for how to setup date's format by logging or ohter perposes 
            var today = new Date();  
            var dd = today.getDate();  
            var mm = today.getMonth() + 1; //January is 0!  
  
            var yyyy = today.getFullYear();  
            if (dd < 10) {  
                dd = '0' + dd  
            }  
            if (mm < 10) {  
                mm = '0' + mm  
            }  
            var today = dd + '/' + mm + '/' + yyyy;  
            
			/*====================Test Data ====================*/
            tx.executeSql('insert into status_Table(did, dName, estd) values(1,"Available","' + today + '")');  
            tx.executeSql('insert into status_Table(did, dName, estd) values(2,"Reserved","' + today + '")');  
            
			/* =====================Book Data====================== */
			
			tx.executeSql('insert into Book_Table(id, Name, Location, did) values(1,"Project Management","Parramatta",2 )');
            tx.executeSql('insert into Book_Table(id, Name, Location, did) values(2,"Object Oriented Programming","Parramatta",2 )');
            tx.executeSql('insert into Book_Table(id, Name, Location, did) values(3,"Future of HCI","Penrith",1 )');			
			tx.executeSql('insert into Book_Table(id, Name, Location, did) values(4,"JavaScript Basic","Cambelltown",1 )');
			tx.executeSql('insert into Book_Table(id, Name, Location, did) values(5,"Project Management","Penrith",1 )');
			tx.executeSql('insert into Book_Table(id, Name, Location, did) values(6,"JavaScript Basic","Parramatta",1 )');
			tx.executeSql('insert into Book_Table(id, Name, Location, did) values(7,"Future of HCI","Parramatta",2 )');
			tx.executeSql('insert into Book_Table(id, Name, Location, did) values(8,"Human-Robot Interaction","Parramatta",2 )');
			tx.executeSql('insert into Book_Table(id, Name, Location, did) values(9,"Nice Book","Parramatta",1 )');
			tx.executeSql('insert into Book_Table(id, Name, Location, did) values(10,"Nice Book","Penrith",2 )');
			
			tx.executeSql('insert into Book_Table(id, Name, Location, did) values(11,"Computer Networking","Penrith",1 )');
            tx.executeSql('insert into Book_Table(id, Name, Location, did) values(12,"Web Systems Development","Campbelltown",1 )');
            tx.executeSql('insert into Book_Table(id, Name, Location, did) values(13,"Programming Fundamentals","Penrith",2 )');			
			tx.executeSql('insert into Book_Table(id, Name, Location, did) values(14,"Statistical Decision Making","Parramatta",1 )');
			tx.executeSql('insert into Book_Table(id, Name, Location, did) values(15,"Human-Computer Interaction","Campbelltown",2 )');
			tx.executeSql('insert into Book_Table(id, Name, Location, did) values(16,"Programming Techniques","Campbelltown",2 )');
			tx.executeSql('insert into Book_Table(id, Name, Location, did) values(17,"Operating Systems Programming","Parramatta",2 )');
			tx.executeSql('insert into Book_Table(id, Name, Location, did) values(18,"Systems Analysis and Design","Parramatta",1 )');
			tx.executeSql('insert into Book_Table(id, Name, Location, did) values(19,"Social Web Analytics","Parramatta",1 )');
			tx.executeSql('insert into Book_Table(id, Name, Location, did) values(20,"Technologies for Web Applications","Penrith",1 )');
			/* ====================If use Book Data only, change the dID to "Available" or "Reserved"===================== */
			
            alldetails();  
        });  
        
		
		
		function resetData() {              
			//use this to reset the data since Pepper tablet cannot reset database as google chrome
			dbObj.transaction(function (tx) {
				tx.executeSql('insert into Book_Table(id, Name, Location, did) values(1,"Project Management","Parramatta",2 )');
				tx.executeSql('insert into Book_Table(id, Name, Location, did) values(2,"Object Oriented Programming","Parramatta",2 )');
				tx.executeSql('insert into Book_Table(id, Name, Location, did) values(3,"Future of HCI","Penrith",1 )');			
				tx.executeSql('insert into Book_Table(id, Name, Location, did) values(4,"JavaScript Basic","Cambelltown",1 )');
				tx.executeSql('insert into Book_Table(id, Name, Location, did) values(5,"Project Management","Penrith",1 )');
				tx.executeSql('insert into Book_Table(id, Name, Location, did) values(6,"JavaScript Basic","Parramatta",1 )');
				tx.executeSql('insert into Book_Table(id, Name, Location, did) values(7,"Future of HCI","Parramatta",2 )');
				tx.executeSql('insert into Book_Table(id, Name, Location, did) values(8,"Human-Robot Interaction","Parramatta",2 )');
				tx.executeSql('insert into Book_Table(id, Name, Location, did) values(9,"Nice Book","Parramatta",1 )');
				tx.executeSql('insert into Book_Table(id, Name, Location, did) values(10,"Nice Book","Penrith",2 )');
				
				tx.executeSql('insert into Book_Table(id, Name, Location, did) values(11,"Computer Networking","Penrith",1 )');
				tx.executeSql('insert into Book_Table(id, Name, Location, did) values(12,"Web Systems Development","Campbelltown",1 )');
				tx.executeSql('insert into Book_Table(id, Name, Location, did) values(13,"Programming Fundamentals","Penrith",2 )');			
				tx.executeSql('insert into Book_Table(id, Name, Location, did) values(14,"Statistical Decision Making","Parramatta",1 )');
				tx.executeSql('insert into Book_Table(id, Name, Location, did) values(15,"Human-Computer Interaction","Campbelltown",2 )');
				tx.executeSql('insert into Book_Table(id, Name, Location, did) values(16,"Programming Techniques","Campbelltown",2 )');
				tx.executeSql('insert into Book_Table(id, Name, Location, did) values(17,"Operating Systems Programming","Parramatta",2 )');
				tx.executeSql('insert into Book_Table(id, Name, Location, did) values(18,"Systems Analysis and Design","Parramatta",1 )');
				tx.executeSql('insert into Book_Table(id, Name, Location, did) values(19,"Social Web Analytics","Parramatta",1 )');
				tx.executeSql('insert into Book_Table(id, Name, Location, did) values(20,"Technologies for Web Applications","Penrith",1 )');
			}); 
				alldetails(); 
		} 
        
		
        function deleteAll() {
            $("#tblGrid").remove(); 
        }	
		
		
        function Insert() {  
            
            var id = document.getElementById("tbID").value;  
            var name = document.getElementById("tbName").value;  
            var location = document.getElementById("tbLocation").value;  
            var did = document.getElementById("tbLdept").value;  
            dbObj.transaction(function (tx) {  
                tx.executeSql('insert into Book_Table(id, Name, Location,did) values(' + id + ',"' + name + '","' + location + '",' + did + ')');  
              });  
  
            alldetails();  
        }  
  
        function del() {  
            var id = document.getElementById("ddlid").value;  
          //  alert(id);  
            dbObj.transaction(function (tx) {  
                tx.executeSql('delete from Book_Table where id=' + id + '');  
            });  
  
            empidbind();  
  
            alldetails();  
        }  
  
  
        function myFunction()  
        {  
		    //Change data Dynamicly when selecting Book Number
            var id = document.getElementById("ddlid").value;  
  
            dbObj.transaction(function (tx) {  
                tx.executeSql('SELECT * from Book_Table where id=' + id + '', [], function (tx, results)  
                {  
                    document.getElementById("tbName").value = results.rows.item(0).Name;  
                    document.getElementById("tbLocation").value = results.rows.item(0).Location;  
                    document.getElementById("tbLdept").value = results.rows.item(0).did;  
  
                      
                }, null);  
            });  
             
        }  
  
        function showdel() {  
  
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
          document.getElementById("tbLocation").value='';  
          document.getElementById("tbLdept").value='1';  
  
               empidbind();  
        }  
  
  
        function empidbind()  
        {  
            dbObj.transaction(function (tx) {  
                tx.executeSql('SELECT * from Book_Table', [], function (tx, results) {  
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
            var location = document.getElementById("tbLocation").value;  
            var did = document.getElementById("tbLdept").value;  
  
            dbObj.transaction(function (tx) {  
                tx.executeSql('update Book_Table set Name="' + name + '",Location="' + location + '",did=' + did + ' where id=' + id + '');  
            });  
  
            alldetails();  
        }  
  
        function alldetails()  
        {  
            dbObj.transaction(function (tx) {  
			    //Join TABLE <-----------=========================
                tx.executeSql('SELECT e.id,e.Name,e.Location,d.dName,d.did FROM Book_Table e inner join status_Table d on e.did=d.did ', [], function (tx, results) {  
                //Not Join TABLE <======================--------
				//tx.executeSql('SELECT id,Name,Location,did FROM Book_Table', [], function (tx, results) {
				
				var len = results.rows.length, i;  
                    // document.getElementById("tblGrid").innerHTML = '';  
                    $("#tblGrid").find("tr:gt(0)").remove();  
                    var str = '';  
                    for (i = 0; i < len; i++) {  
                        str += "<tr>";  
                        str += "<td>" + results.rows.item(i).id + "</td>";  
                        str += "<td>" + results.rows.item(i).Name + "</td>";  
                        str += "<td>" + results.rows.item(i).Location + "</td>";  
                        str += "<td>" + results.rows.item(i).dName + "</td>";  
                        str += "</tr>";  
                        document.getElementById("tblGrid").innerHTML += str;  
                        str = '';  
                    }  
                }, null);  
            });  
  
        }

        function searchBook()  
        {  
			var bName = document.getElementById("bookName").value;		
		    var bMsg = ""; 
		    if (bName != ""){
				dbObj.transaction(function (tx) {  
					tx.executeSql('SELECT e.id,e.Name,e.Location,d.dName,d.did FROM Book_Table e inner join status_Table d on e.did=d.did where lower(e.Name) like "%' +bName+'%"', [], function (tx, results)
					//tx.executeSql('SELECT * from Book_Table where e.Name="' + bName + '', [], function (tx, results)  
					{  
						var len = results.rows.length, i;
						bMsg = "<p>Found books: " + len + "</p>";
						document.querySelector('#bookStatus').innerHTML =  bMsg;
						//comment this out if you running this on your broswer not the robot
						if (len == 0){
							noResult();
						} else {
							found = len;
							foundResult();
						}
							
						for (i = 0; i < len; i++){
						bMsg = "<p><b>" + results.rows.item(i).Name + "," + results.rows.item(i).Location + "," + results.rows.item(i).dName +"</b></p>";   
							document.querySelector('#bookStatus').innerHTML +=  bMsg;
						}
					}, null);  
				}); 
			} else {
				document.getElementById("bookStatus").innerHTML = "Please enter a book name.";
				enterSomething();
			}
			
        }		
  
        dbObj.transaction(function (tx) {  
            tx.executeSql('SELECT * from status_Table', [], function (tx, results) {  
                var len = results.rows.length, i;  
                var str = '';  
                for (i = 0; i < len; i++) {  
                    str += "<option value=" + results.rows.item(i).did + ">" + results.rows.item(i).dName + "</option>";  
                    document.getElementById("tbLdept").innerHTML += str;  
                    str = '';  
                }  
            }, null);  
        });  
     
		function noResult() {
			session.service('ALTextToSpeech').then(function (tts) {
				tts.say("Sorry, I couldn't find the book you want!");
		  }, function (error) {
			console.log(error);
		  });
		}
		
		function enterSomething() {
			session.service('ALTextToSpeech').then(function (tts) {
				tts.say("Hey! Please enter a book name.");
		  }, function (error) {
			console.log(error);
		  });
		}
		
		function foundResult() {
			session.service('ALTextToSpeech').then(function (tts) {
				tts.say('Ah, I found ' + found + 'results for you!');
		  }, function (error) {
			console.log(error);
		  });  
		}	  
         
    