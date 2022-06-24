import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "../constant";

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
