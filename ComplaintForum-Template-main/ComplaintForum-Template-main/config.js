import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyDoAyy9xXBToW8FxGLJLfgEC1BJAGu_cRE",
  authDomain: "project-71-20ab5.firebaseapp.com",
  projectId: "project-71-20ab5",
  storageBucket: "project-71-20ab5.appspot.com",
  messagingSenderId: "186566259852",
  appId: "1:186566259852:web:960d59a8fd3cda230d37a9"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

