import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBxyansn4eekeJptylwgS_zxgZ49r3iEEo",
  authDomain: "clone-86393.firebaseapp.com",
  projectId: "clone-86393",
  storageBucket: "clone-86393.appspot.com",
  messagingSenderId: "1095486935460",
  appId: "1:1095486935460:web:08e268261f090bb40b3131",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export { db };