
const firebaseConfig = {
    apiKey: "AIzaSyDL2H9c_9LuUq_-V7oqHSWuG-ftJQXpIb8",
    authDomain: "wanderlust-78253.firebaseapp.com",
    databaseURL: "https://wanderlust-78253.firebaseio.com",
    projectId: "wanderlust-78253",
    storageBucket: "wanderlust-78253.appspot.com",
    messagingSenderId: "48070936115",
    appId: "1:48070936115:web:779ebc778452cc8f8a0546",
    measurementId: "G-JQL8HFHSRJ"
};

// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
apiKey: firebaseConfig.apiKey,
authDomain: firebaseConfig.authDomain,
projectId: firebaseConfig.projectId
});

var db = firebase.firestore();



createUser = () => {
    var email = $("#email").val()
    var password = $("#password").val();

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      }).then(() => {
        window.location.replace("homepage.html");
    });
};



firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        window.location.replace("homepage.html");
    } else {
        //emailshow.append(`<p> Not Logged in </p>`);
    }
});


$('#registerButton').click(createUser);