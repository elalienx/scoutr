// Node modules
import { createContext, useContext } from "react";
import { ReactNode, useEffect, useState } from "react";

// Project files
import StatusAuth from "types/StatusAuth";
import { signIn } from "scripts/firebase/auth";
import ResultsAPI from "types/ResultAPI";

// Properties
interface Props {
  children: ReactNode;
}
interface ContextValue {
  status: StatusAuth;
  login: Function;
  logout: Function;
}
const initialValue: ContextValue = {
  status: "checking",
  login: () => {},
  logout: () => {},
};
const Context = createContext(initialValue);

// For the parent
/**
 * Refactor with reducer to have each method on a separable, testable file
 */
export function AuthProvider({ children }: Props) {
  // Local state
  const [status, setStatus] = useState<StatusAuth>("checking");

  // Properties
  const sessionKey = "scoutr-auth-token";

  // Methods
  useEffect(() => {
    checkLogin();
  }, []);

  async function checkLogin() {
    const storageLogin = localStorage.getItem(sessionKey) as StatusAuth;
    const status: StatusAuth = storageLogin || "unlogged";

    setStatus(status);
  }

  async function logout() {
    localStorage.setItem(sessionKey, "unlogged");
    setStatus("unlogged");
  }

  async function login(email: string, password: string) {
    const { data, status, message }: ResultsAPI = await signIn(email, password);

    if (status === "ready") onSuccess(data);
    else onFailure(message);
  }

  function onSuccess(uid: string) {
    localStorage.setItem(sessionKey, uid);
    setStatus("logged");
  }

  function onFailure(message: string) {
    alert(message);
  }

  return <Context.Provider value={{ status, login, logout }}>{children}</Context.Provider>;
}

// For the children
export default function useAuth() {
  const context = useContext(Context);

  return context;
}
