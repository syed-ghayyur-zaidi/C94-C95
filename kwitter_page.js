
      
       
   function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
          Room_names = childKey;
         //Start code
         console.log("Room Name - " + Room_names);
         row = "<div class="room_name" id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
         document.getElementById("output").innerHTML += row;  
   
         //End code
         });
         });
   }
   getData();
   
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
   