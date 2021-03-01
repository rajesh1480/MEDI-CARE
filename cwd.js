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
 var messagesRef = firebase.database().ref('Chatting');


 document.getElementById("gg").addEventListener('submit',submitForm);

function submitForm(e){
  e.preventDefault();
  var Name=getInputVal('name');
  console.log(Name);
  var MobileNumber=getInputVal('mono');
  var Symptoms=getInputVal('sym');
  var Message=getInputVal('msg');
  
SaveMessage(Name,MobileNumber,Symptoms,Message);
}

//Function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//SAve msg to firebase
function SaveMessage(Name,MobileNumber,Symptoms,Message){
    var newMessageRef= messagesRef.push();
    newMessageRef.set({
       Name: Name,
       MobileNumber:MobileNumber,
       Symptoms:Symptoms,
       Message:Message
    });
}