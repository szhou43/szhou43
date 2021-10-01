// keeping a pointer to the session is very useful!
var session;

//Jokes query
var tellJoke = [
  "One day a human came to ask me may i ask you a question? I told him what is your problem? He got so angry and I don't know why!",
  "Why we don't play pokemon? because we can not catch them all!",
  "My favourite food is computer chips!",
  "When i want to eat on a diet i eat mircochips!",
  "Wow! your hair is really messing up!",
  "Time is money friend!",
  "You looks like 30 years old",
  "Do you know why i dont have brothers? because we all have trans-sisters",
  "When i walks into a bar, i will get a drink because i can't say jokes!",
  "Awesome work!",
  "Way to go!",
  "Great work!",
  "Congrats team!"
];
var i = 0;
//end joke

$(document).ready(function() {
  //$("body").css("display", "block");
  // START A QI SESSION
  try {
    QiSession( function (s) {
      console.log('connected!');
      session = s;
    });
  } catch (err) {
    console.log("Error when initializing QiSession: " + err.message);
    console.log("Make sure you load this page from the robots server.")
  }

});
	
/*$(function () {
  $('#say').click(sayHelloWorld);
});
*/
function changeTitle(data) {
  $('h1').text('Message received!')
}


/*==================================================================*/

function speakTest() {
  session.service('ALTextToSpeech').then(function (tts) {
    tts.say('Hello');
  }, function (error) {
    console.log(error);
  });
}

/*==================================================================*/

/*function sayHelloWorld() {
  session.service('ALTextToSpeech').then(function (tts) {
    tts.say('Hello World!');
  }, function (error) {
    console.log(error);
  })
}*/

/*======edit by 24/10/2019======*/
//use this function to call ALMemory from Choregraphe
function sayMessageSent() {
    session.service('ALMemory').then(function (mem) {
        mem.raiseEvent('test/say', ''); // Triggers the event
        //mem.raiseEvent('MyKey/Name', 'some data'); // Triggers the event and passes data to it (data doesn't need to be a string)
    }, function (error) {
        console.log(error);
        // or even consider using ALLogger to log to the Choregraphe console as well
    });
}

function homePSent() {
    session.service('ALMemory').then(function (mem) {
        mem.raiseEvent('say/homeP', ''); // Triggers the event
        //mem.raiseEvent('MyKey/Name', 'some data'); // Triggers the event and passes data to it (data doesn't need to be a string)
    }, function (error) {
        console.log(error);
        // or even consider using ALLogger to log to the Choregraphe console as well
    });
}

//Call this function to let Pepper introduce search page
function searchPSent() {
    session.service('ALMemory').then(function (mem) {
        mem.raiseEvent('say/searchP', ''); // Triggers the event
    }, function (error) {
        console.log(error); //logger if any error
    });
}

function infoPSent() {
    session.service('ALMemory').then(function (mem) {
        mem.raiseEvent('say/contactP', ''); // Triggers the event
        //mem.raiseEvent('MyKey/Name', 'some data'); // Triggers the event and passes data to it (data doesn't need to be a string)
    }, function (error) {
        console.log(error);
        // or even consider using ALLogger to log to the Choregraphe console as well
    });
}

function surveyPSent() {
    session.service('ALMemory').then(function (mem) {
        mem.raiseEvent('say/surveyP', ''); // Triggers the event
        //mem.raiseEvent('MyKey/Name', 'some data'); // Triggers the event and passes data to it (data doesn't need to be a string)
    }, function (error) {
        console.log(error);
        // or even consider using ALLogger to log to the Choregraphe console as well
    });
}

function playKongfu() {
    session.service('ALMemory').then(function (mem) {
        mem.raiseEvent('show/kongfu', ''); // Triggers the event
        //mem.raiseEvent('MyKey/Name', 'some data'); // Triggers the event and passes data to it (data doesn't need to be a string)
    }, function (error) {
        console.log(error);
        // or even consider using ALLogger to log to the Choregraphe console as well
    });
}

function playDance() {
    session.service('ALMemory').then(function (mem) {
        mem.raiseEvent('show/dance', ''); // Triggers the event
        //mem.raiseEvent('MyKey/Name', 'some data'); // Triggers the event and passes data to it (data doesn't need to be a string)
    }, function (error) {
        console.log(error);
        // or even consider using ALLogger to log to the Choregraphe console as well
    });
}

function testButton() {
    session.service('ALMemory').then(function (mem) {
        mem.raiseEvent('test/say', ''); // Triggers the event
        //mem.raiseEvent('MyKey/Name', 'some data'); // Triggers the event and passes data to it (data doesn't need to be a string)
    }, function (error) {
        console.log(error);
        // or even consider using ALLogger to log to the Choregraphe console as well
    });
}


function changePageXD(){
	session.service('ALMemory').then(function (mem) {
		mem.raiseEvent('say/tellResult', ''); // Triggers the event
		//mem.raiseEvent('MyKey/Name', 'some data'); // Triggers the event and passes data to it (data doesn't need to be a string)
	}, function (error) {
		console.log(error);
		// or even consider using ALLogger to log to the Choregraphe console as well
	}); 
}

function startChat(){
	session.service('ALMemory').then(function (mem) {
		mem.raiseEvent('say/startChat', ''); // Triggers the event
		//mem.raiseEvent('MyKey/Name', 'some data'); // Triggers the event and passes data to it (data doesn't need to be a string)
	}, function (error) {
		console.log(error);
		// or even consider using ALLogger to log to the Choregraphe console as well
	}); 
}

function pepperIntro(){
	session.service('ALMemory').then(function (mem) {
		mem.raiseEvent('say/pepperIntro', ''); // Triggers the event
		//mem.raiseEvent('MyKey/Name', 'some data'); // Triggers the event and passes data to it (data doesn't need to be a string)
	}, function (error) {
		console.log(error);
		// or even consider using ALLogger to log to the Choregraphe console as well
	}); 
}


/*======end of ALMemory functions=====*/

/*==Edit from 22/10/2019====*/
/*==========Tell Joke==========*/
function sayJoke() {
  // WELCOME SPEECH (SAY IMMEDIATELY & AT INTERVAL)
  session.service('ALTextToSpeech').then(function (tts) {
    tts.say(tellJoke[i]);
    i++;
	if (i == 12) {
		i = 0;
	}
  }, function (error) {
    console.log(error);
  });
}
