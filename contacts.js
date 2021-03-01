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
 var messagesRef = firebase.database().ref('feedbacks');


 document.getElementById("contactForm").addEventListener('submit',submitForm);

function submitForm(e){
  e.preventDefault();
  var Name=getInputVal('name');
  console.log(Name);
  var EmailId=getInputVal('email');
  var Phoneno=getInputVal('phone');
  var feedback=getInputVal('message');
  
SaveMessage(Name,EmailId,Phoneno,feedback);
}

//Function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//SAve msg to firebase
function SaveMessage(Name,EmailId,Phoneno,feedback){
    var newMessageRef= messagesRef.push();
    newMessageRef.set({
       Name : Name,
       EmailId:EmailId,
       Phoneno : Phoneno,
       feedback : feedback
    });
}