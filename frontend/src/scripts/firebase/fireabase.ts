// Node modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Properties
const firebaseConfig = {
  apiKey: "AIzaSyBMYIcBwTaT-o8tDtVY9vWemL3aW-kRDZ8",
  authDomain: "meet-scoutr.firebaseapp.com",
  projectId: "meet-scoutr",
  storageBucket: "meet-scoutr.appspot.com",
  messagingSenderId: "841529203014",
  appId: "1:841529203014:web:38079c32fe44c7381c2d47",
};

const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
