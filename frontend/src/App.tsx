// Project files
import Dialog from "components/dialog/Dialog";
import useAuth from "state/AuthContextAPI";

// Routes
import LoggedRoutes from "routes/LoggedRoutes";
import UnloggedRoutes from "routes/UnloggedRoutes";

export default function App() {
  // Global state
  const { isLogged } = useAuth();

  // Properties
  const game = import.meta.env.VITE_SOME_KEY || "Concord";

  return (
    <div id="app">
      <h1>{game}</h1>
      {isLogged && <LoggedRoutes />}
      {!isLogged && <UnloggedRoutes />}
      <Dialog />
    </div>
  );
}
