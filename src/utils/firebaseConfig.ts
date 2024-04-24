import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSsv5QPM7w1nnb4pZG4Da4iBb7VOxChAc",
  authDomain: "pokemon-pokedex-6b581.firebaseapp.com",
  projectId: "pokemon-pokedex-6b581",
  storageBucket: "pokemon-pokedex-6b581.appspot.com",
  messagingSenderId: "1093348190260",
  appId: "1:1093348190260:web:a70674e7f361e238d34261",
  measurementId: "G-9D9YP3YKDZ",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
