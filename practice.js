
 var firebaseConfig = {
    apiKey: "AIzaSyByvrfIJZNS_u-ZCjeeJn68duN_dWk_-xY",
    authDomain: "emaralds-and-rubies-f1210.firebaseapp.com",
    databaseURL: "https://emaralds-and-rubies-f1210-default-rtdb.firebaseio.com",
    projectId: "emaralds-and-rubies-f1210",
    storageBucket: "emaralds-and-rubies-f1210.appspot.com",
    messagingSenderId: "803655325973",
    appId: "1:803655325973:web:7c77c9dd45ec3c92fbb11c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser(){
user_name=document.getElementById("user_name").value
firebase.database().ref("/").child(user_name).update({
    purpose:"adding user"
})

  }