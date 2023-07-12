const firebaseConfig = {
      apiKey: "AIzaSyB_5RHnqPJOvbj2N2L6RBWEjUtt2xZUsVA",
      authDomain: "lets-chat-web-81492.firebaseapp.com",
      databaseURL: "https://lets-chat-web-81492-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-81492",
      storageBucket: "lets-chat-web-81492.appspot.com",
      messagingSenderId: "329527598413",
      appId: "1:329527598413:web:3b2d6a3a5ef166058fab04",
      measurementId: "G-5QDY973LHN"
    };
    
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
   
    room_name = localStorage.getItem("room_name")
    document.getElementById("user_name").innerHTML =  "Welcome " + user_name + "!";
   
    function addRoom() 
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}


function logout ()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "index.html";
}