// Node modules
import { createContext, useContext } from "react";
import { ReactNode, useEffect, useState } from "react";

// Properties
interface Props {
  children: ReactNode;
}
interface ContextValue {
  isLogged: boolean;
  login: Function;
  logout: Function;
}
const initialValue: ContextValue = {
  isLogged: false,
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
  const [isLogged, setIsLogged] = useState(false); // check if starting as "unlogged" causes problem, then fallback to "stand-by"

  // Properties
  const storageKey = "scoutr-auth-token";

  // Methods
  useEffect(() => {
    checkLogin();
  }, []);

  async function checkLogin() {
    const storageLogin = Boolean(localStorage.getItem(storageKey));

    setIsLogged(storageLogin);
  }

  function login(uid: string) {
    localStorage.setItem(storageKey, uid);
    setIsLogged(true);
  }

  async function logout() {
    localStorage.removeItem(storageKey);
    setIsLogged(false);
  }

  return <Context.Provider value={{ isLogged, login, logout }}>{children}</Context.Provider>;
}

// For the children
export default function useAuth() {
  const context = useContext(Context);

  return context;
}
