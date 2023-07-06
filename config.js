import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = {
   
        apiKey: "AIzaSyDHpGxtfiJoGXMgw5YVRy--8Q_XTi6JtM4",
        authDomain: "test-d00b2.firebaseapp.com",
        projectId: "test-d00b2",
        storageBucket: "test-d00b2.appspot.com",
        messagingSenderId: "53178786694",
        appId: "1:53178786694:web:e63be09a1b1e3160b0c207",
        measurementId: "G-DLTMMKLDY8"
      };

      if (!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
      }

