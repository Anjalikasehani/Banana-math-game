// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBVdANMNkm3gmhk0ScteccjEvHvIDcfFrk",
    authDomain: "banana-math-game.firebaseapp.com",
    projectId: "banana-math-game",
    storageBucket: "banana-math-game.firebasestorage.app",
    messagingSenderId: "558087165121",
    appId: "1:558087165121:web:e6547fea924d0e2fa43040"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //get ref database service
  const db = getDatabase(app)

  document.getElementById("submit").addEventListener('click', function(event){
    set(ref(db, 'user/' * document.getElementById("username").value){

        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    })
    alert("Login Successfully!");
  })

  