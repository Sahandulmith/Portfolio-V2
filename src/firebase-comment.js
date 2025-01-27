import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBERKchqEAYTPzR-A5WjSyn6sOQzZIlkHU",
  authDomain: "portfolioweb-28124.firebaseapp.com",
  projectId: "portfolioweb-28124",
  storageBucket: "portfolioweb-28124.firebasestorage.app",
  messagingSenderId: "145654426341",
  appId: "1:145654426341:web:9f428a916f1bf86ec9420c",
  measurementId: "G-25JGMM916R"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const storage = getStorage(app);

export { db };