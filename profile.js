console.log("profile.js loaded");
//system updated

 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
    import { getAuth, onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
   import{getDatabase,ref,child,get}from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";
    // Your Firebase config
    const firebaseConfig = {
      apiKey: "AIzaSyBnVtJLGRZtbi6crR_313aE_sgq_FhI29U",
      authDomain: "banana-api-c42f4.firebaseapp.com",
      projectId: "banana-api-c42f4",
      storageBucket: "banana-api-c42f4.appspot.com",
      messagingSenderId: "983621526176",
      appId: "1:983621526176:web:69aad4f3d7f68ec5971fc5",
        databaseURL: "https://banana-api-c42f4-default-rtdb.firebaseio.com"
    };

    //Initialize

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getDatabase(app);

   

    onAuthStateChanged(auth,(user) => {
        if(!user){
            window.location.href = "home.html";
            return;
        }

        document.getElementById("email").innerText =
         sessionStorage.getItem("email") || user.email;

         document.getElementById("username").innerText =
         sessionStorage.getItem("username") || user.username;

         document.getElementById("score").innerText =
         sessionStorage.getItem("score") || "0";

         document.getElementById("level").innerText =
         sessionStorage.getItem("level") || "1";

        
        if(!sessionStorage.getItem("username")){
            const dbRef = ref(db);
            get(child(dbRef,"users/" +user.uid)).then((snapshot) => {
                if(snapshot.exists()) {
                    const info = snapshot.val();

                document.getElementById("username").innerText = info.username;
                 document.getElementById("score").innerText = info.score;
                  document.getElementById("level").innerText = info.level;

                   sessionStorage.getItem("username", info.username);
                  sessionStorage.getItem("score", info.score);
                  sessionStorage.getItem("level", info.level);
                  sessionStorage.getItem("email", info.email);

                }
            
            });
        }
    });
    //logout
    document.getElementById("logoutBtn").addEventListener("click", () =>{
        signOut(auth).then(() => {
            sessionStorage.clear();
            alert("Logged out!");
            window.location.href = "home.html";
        });
    });