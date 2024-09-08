// Node modules
import { createContext, useContext } from "react";
import { ReactNode, useEffect, useState } from "react";
import { Magic } from "magic-sdk";

// Project files
import AuthStatus from "../types/StatusAuth";

// Properties
interface Props {
  children: ReactNode;
}
interface ContextValue {
  status: AuthStatus;
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
export function AuthProvider({ children }: Props) {
  // Local state
  const [status, setStatus] = useState<AuthStatus>("checking");

  // Properties
  const PUBLIC_KEY = "pk_live_A93E0C24CA99F141";
  const magic = new Magic(PUBLIC_KEY);
  const sessionKey = "magic-link-auth";

  // Methods
  useEffect(() => {
    checkLogin();
  }, []);

  async function checkLogin() {
    const status: AuthStatus = (sessionStorage.getItem(sessionKey) as AuthStatus) || "unlogged";

    setStatus(status);
  }

  async function login(email: string) {
    try {
      await magic.auth.loginWithMagicLink({ email: email });
      sessionStorage.setItem("magic-link-auth", "logged");
      setStatus("logged");
    } catch (error) {
      console.error(error);
    }
  }

  async function logout() {
    try {
      await magic.user.logout();
      sessionStorage.setItem("magic-link-auth", "unlogged");
      setStatus("unlogged");
    } catch (error) {
      console.error(error);
    }
  }

  return <Context.Provider value={{ status, login, logout }}>{children}</Context.Provider>;
}

// For the children
export default function useAuth() {
  const context = useContext(Context);

  return context;
}
