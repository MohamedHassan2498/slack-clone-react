import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyBEJkOWZfMAt3ip53-RcpIU7PVN8Dfp-vQ",
  authDomain: "react-slack-clone-2498.firebaseapp.com",
  databaseURL: "https://react-slack-clone-2498.firebaseio.com",
  projectId: "react-slack-clone-2498",
  storageBucket: "react-slack-clone-2498.appspot.com",
  messagingSenderId: "500809814040",
  appId: "1:500809814040:web:6ee2feaf4b644ba3f8736d",
  measurementId: "G-BVZ24MB6YR"
};
firebase.initializeApp(config);

export default firebase;
