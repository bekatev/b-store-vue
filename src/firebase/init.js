import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { reactive } from "vue";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAUzeYUmqjvBh86Uz88tJiRJ558qDQ67oU",
  authDomain: "b-store-vue.firebaseapp.com",
  projectId: "b-store-vue",
  storageBucket: "b-store-vue.appspot.com",
  messagingSenderId: "287383292836",
  appId: "1:287383292836:web:35414f6ba2e3bbd6678f31",
  measurementId: "G-BNMYXZ0ZP7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const userState = reactive({
  user: null,
});

onAuthStateChanged(auth, (user) => {
  userState.user = user;
});

export { db, auth, userState, storage };
