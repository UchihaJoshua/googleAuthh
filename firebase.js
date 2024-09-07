import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAV9AWIWvzPDx44d8dvV2i-gWIuWXgShsE",
  authDomain: "student-signup-be849.firebaseapp.com",
  projectId: "student-signup-be849",
  storageBucket: "student-signup-be849.appspot.com",
  messagingSenderId: "1011255594643",
  appId: "1:1011255594643:web:c4ea1bd382e19d990c0766"
};


let app;
if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp();
}

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth };

// android: 987642829574-2lh9eglude78j4qd86ik9tqfokpvpmi3.apps.googleusercontent.com