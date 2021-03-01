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
 var messagesRef = firebase.database().ref('Appoinments');


 document.getElementById("fgh").addEventListener('submit',submitForm);

function submitForm(e){
  e.preventDefault();
  var PatientName=getInputVal('pname');
  console.log(PatientName);
  var MobileNumber=getInputVal('mno');
  var EmailId=getInputVal('email');
  var Address=getInputVal('address');
  
SaveMessage(PatientName,MobileNumber,EmailId,Address);
}

//Function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//SAve msg to firebase
function SaveMessage(PatientName,MobileNumber,EmailId,Address){
    var newMessageRef= messagesRef.push();
    newMessageRef.set({
       PatientName: PatientName,
       MobileNumber:MobileNumber,
       EmailId:EmailId,
       Address:Address
    });
}