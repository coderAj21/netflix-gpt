import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBu2l0dtoWxJ74b_j0EjWrpO8zHD7UrsNw",
  authDomain: "netflixgpt-1e7e2.firebaseapp.com",
  projectId: "netflixgpt-1e7e2",
  storageBucket: "netflixgpt-1e7e2.appspot.com",
  messagingSenderId: "948105342788",
  appId: "1:948105342788:web:c5dfdb9f59256207ad7111",
  measurementId: "G-6EMPTDGHH4"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();