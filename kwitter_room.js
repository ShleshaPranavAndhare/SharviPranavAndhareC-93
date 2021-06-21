
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB4gJkMFiuFPTJNVTYLND8sXKVvSyTevHc",
      authDomain: "kwitter-app-c7354.firebaseapp.com",
      projectId: "kwitter-app-c7354",
      storageBucket: "kwitter-app-c7354.appspot.com",
      messagingSenderId: "73128522600",
      appId: "1:73128522600:web:f40e4aabdf7d9d0b231cdd",
      measurementId: "G-B3XJSR9X95"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class=>"
      row
      //End code
      });});}
getData();
 function add_room_name(){
       Room_names=document.getElementById("room_name").value;
       firebase.database().ref("/").child(Room_names).update({
            purpose:"adding Room_name"
       });
       localStorage.setItem("room_name",Room_names)
      window.location="kwitter_page.html";
 }