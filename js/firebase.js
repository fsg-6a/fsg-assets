var firebaseConfig = {
    apiKey: "AIzaSyBhKqFKMGqd-HLbciINTKDEks1sbZUmSjo",
    authDomain: "fsg-6a.firebaseapp.com",
    databaseURL: "https://fsg-6a.firebaseio.com",
    projectId: "fsg-6a",
    storageBucket: "fsg-6a.appspot.com",
    messagingSenderId: "252800767978",
    appId: "1:252800767978:web:f9b1da363bf684b2880493"
  };

firebase.initializeApp(firebaseConfig);

function firebase_signUP() {
  // Set user and password to the text-input
  var email = document.getElementById('user').value;
  var password = document.getElementById('password').value;
  var key = document.getElementById('key').value;
  if (key === '1629'){
    console.log(key);
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    });

    firebase.auth();

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        console.log(email);
        window.location.href = 'news.html';
      } else {
        
      }
    });
  }else {
    Swal.fire({
      icon: 'error',
      title: 'Falscher Anmeldecode...',
      text: 'Hast du dich vieleicht vertippt? 😟',
    })
  }
}

function firebase_signIN_alt() {
  // Set user and password to the text-input
  var email = document.getElementById('user').value;
  var password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      console.log(email);
      window.location.href = 'news.html';
    }
  });
}

function firebase_signIN() {
  // Set user and password to the text-input
  var email = document.getElementById('user').value;
  var password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      window.location.href = 'news.html';

    } else {

    }
  });
}

function firebase_sign() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

    } else {
      window.location.href = 'index.html';
    }
  });

}

function firebase_signOUT() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });

  window.location.href = 'index.html';
}

function log() {
  console.log(user);
}
