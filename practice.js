var firebaseConfig = {
    apiKey: "AIzaSyCOr0v-okKw_p2P5_cqpJo3z2DEliO-ak4",
    authDomain: "practice-da5d3.firebaseapp.com",
    databaseURL: "https://practice-da5d3-default-rtdb.firebaseio.com",
    projectId: "practice-da5d3",
    storageBucket: "practice-da5d3.appspot.com",
    messagingSenderId: "994653775392",
    appId: "1:994653775392:web:e369b5c2ab59b3b11a3e45"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function adduser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}