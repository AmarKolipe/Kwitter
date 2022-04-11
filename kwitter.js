const firebaseConfig = {
    apiKey: "AIzaSyCp2JJDoAh5FxcvKBSo-7olM2OuxSXEYsM",
    authDomain: "kwitter-1ad40.firebaseapp.com",
    databaseURL: "https://kwitter-1ad40-default-rtdb.firebaseio.com",
    projectId: "kwitter-1ad40",
    storageBucket: "kwitter-1ad40.appspot.com",
    messagingSenderId: "146454665634",
    appId: "1:146454665634:web:427987fa5e411e4c0afafb"
  };

  firebase.initializeApp(firebaseConfig);

function log_in() 
{ 
user_name = document.getElementById("username").value;
localStorage.setItem("username", username);
 window.location = "kwitter_room.html"; };