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

  roomname = localStorage.getItem("roomname");

  function send()
  {

    msg = document.getElementById("msg").value;

    firebase.database().ref(roomname).push({

        name:username,
        message:msg,
        like:0

    });

    document.getElementById("msg").value = "";
    


  }


  function logout()
{

      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;

   console.log("Roomname " + Room_names);

   row = "<div class = 'room_name' id = 'Room_names' onclick = 'redirect_to_roomname(this.id)'>#" + Room_names + "</div><hr>"
   
   document.getElementById("output").innerHTML += row;

   });});}
   getData();

