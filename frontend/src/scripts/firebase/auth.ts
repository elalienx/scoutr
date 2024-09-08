// Node modules
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";

// Project files
import ResultsAPI from "types/ResultAPI";
import { auth } from "./fireabase";

export async function signIn(email: string, password: string): Promise<ResultsAPI> {
  let result: ResultsAPI = { data: undefined, message: "Unknown error", status: "error" };

  try {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    const { uid } = credential.user;

    result.status = "ready";
    result.data = uid;
  } catch (error: unknown) {
    const firebaseError = error as FirebaseError;

    result.message = firebaseError.message;
  }

  return result;
}
