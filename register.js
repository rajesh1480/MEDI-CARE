var firebaseConfig = {
    apiKey: "AIzaSyCs0M88Wnawv_WbOqoCxPkT2xvMBKyJgts",
    authDomain: "medicareregform.firebaseapp.com",
    projectId: "medicareregform",
    storageBucket: "medicareregform.appspot.com",
    messagingSenderId: "105438116257",
    appId: "1:105438116257:web:2318925ffc39542714b3e0",
    measurementId: "G-MJDGJPL8SK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

 //Refernece messages Collections
 var messagesRef = firebase.database().ref('messages');


 document.getElementById("contactform").addEventListener('submit',submitForm);

function submitForm(e){
  e.preventDefault();
  var FirstName=getInputVal('firstname');
  console.log(FirstName);
  var LastName=getInputVal('lastname');
  var Gender=getInputVal('gender');
  var Age=getInputVal('age');
  var EmailId=getInputVal('emailid');
  var Password=getInputVal('pass');
  
SaveMessage(FirstName,LastName,Gender,Age,EmailId,Password);
}

//Function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//SAve msg to firebase
function SaveMessage(FirstName,LastName,Gender,Age,EmailId,Password){
    var newMessageRef= messagesRef.push();
    newMessageRef.set({
       FirstName: FirstName,
       LastName:LastName,
       Gender:Gender,
       Age:Age,
       EmailId:EmailId,
       Password:Password
    });
}