// Node modules
import { createContext, useContext } from "react";
import { ReactNode, useEffect, useState } from "react";

// Project files
import StatusAuth from "types/StatusAuth";
import { signIn } from "scripts/firebase/auth";

// Properties
interface Props {
  children: ReactNode;
}
interface ContextValue {
  status: StatusAuth;
  login: Function;
  saveLogin: Function;
  logout: Function;
}
const initialValue: ContextValue = {
  status: "checking",
  login: () => {},
  saveLogin: () => {},
  logout: () => {},
};
const Context = createContext(initialValue);

// For the parent
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

  async function login(email: string, password: string) {
    try {
      console.log("preparing to authenticate user");
      await signIn(email, password);
    } catch (error) {
      console.error(error);
    }
  }

  async function saveLogin() {
    localStorage.setItem(sessionKey, "logged");
    setStatus("logged");
  }

  async function logout() {
    try {
      localStorage.setItem(sessionKey, "unlogged");
      setStatus("unlogged");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Context.Provider value={{ status, login, saveLogin, logout }}>{children}</Context.Provider>
  );
}

// For the children
export default function useAuth() {
  const context = useContext(Context);

  return context;
}
