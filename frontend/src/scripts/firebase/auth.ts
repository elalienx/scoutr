// Node modules
import { signInWithEmailAndPassword } from "firebase/auth";

// Project files
import { auth } from "./fireabase";

export async function signIn(email: string, password: string) {
  console.log("sign in with email", email);

  try {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    const user = credential.user;

    console.log(user);
  } catch (error) {
    console.error(error);
  }
}
