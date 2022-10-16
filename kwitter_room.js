const firebaseConfig = {
      apiKey: "AIzaSyBZKYn1smMGx_vfjlMQc4vjD_dy7BfvFtY",
      authDomain: "kwitter-base-c74fe.firebaseapp.com",
      databaseURL: "https://kwitter-base-c74fe-default-rtdb.firebaseio.com",
      projectId: "kwitter-base-c74fe",
      storageBucket: "kwitter-base-c74fe.appspot.com",
      messagingSenderId: "289110158574",
      appId: "1:289110158574:web:927db6d41db134600d97ff",
      measurementId: "G-QSTPLHER6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();
