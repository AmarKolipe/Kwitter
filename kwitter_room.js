
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyCp2JJDoAh5FxcvKBSo-7olM2OuxSXEYsM",
      authDomain: "kwitter-1ad40.firebaseapp.com",
      databaseURL: "https://kwitter-1ad40-default-rtdb.firebaseio.com",
      projectId: "kwitter-1ad40",
      storageBucket: "kwitter-1ad40.appspot.com",
      messagingSenderId: "146454665634",
      appId: "1:146454665634:web:427987fa5e411e4c0afafb"
    };
    
    // Initialize Firebase
   
  
    firebase.initializeApp(firebaseConfig);

    username = localStorage.getItem("username");

    document.getElementById("username").innerHTML = "welcome" + username;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      console.log("Roomname " + Room_names);

      row = "<div class = 'room_name' id = 'Room_names' onclick = 'redirect_to_roomname(this.id)'>#" + Room_names + "</div><hr>"
      
      document.getElementById("output").innerHTML += row;

      });});}
getData();

function addroom()
{

      room_name = document.getElementById("roomname");

      firebase.database().ref("/").child(room_name).update({

            purpose : "adding Roomname"

      });

      localStorage.setItem("roomname", room_name);

      window.location = "kwitter_page.html";

}

function redirect_to_roomname(name)
{

      console.log("name" + name);

      localStorage.setItem("roomname", name);

      window.location = "kwitter_page.html"

}

function logout()
{

      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}