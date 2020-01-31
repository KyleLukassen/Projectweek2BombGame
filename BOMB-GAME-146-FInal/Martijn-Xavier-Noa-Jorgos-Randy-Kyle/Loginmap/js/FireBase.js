var app_firebase = {};

function initializeApp(){
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyALet4_PXFsGFhDuT7kxBfqnG3R1hyv7LE",
    authDomain: "test-65e27.firebaseapp.com",
    databaseURL: "https://test-65e27.firebaseio.com",
    projectId: "test-65e27",
    storageBucket: "test-65e27.appspot.com",
    messagingSenderId: "851918526375",
    appId: "1:851918526375:web:b92c0a13fd03afd136c882",
    measurementId: "G-9KWGTB8EEB"
  };
   
  firebase.initializeApp(firebaseConfig);

  app_firebase = firebase;
}

initializeApp();