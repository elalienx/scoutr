// Project files
import Dialog from "components/dialog/Dialog";
import useAuth from "state/AuthContextAPI";

// Routes
import LoggedRoutes from "routes/LoggedRoutes";
import UnloggedRoutes from "routes/UnloggedRoutes";

export default function App() {
  // Global state
  const { status } = useAuth();

  return (
    <div id="app">
      {status === "logged" && <LoggedRoutes />}
      {status === "unlogged" && <UnloggedRoutes />}
      <Dialog />
    </div>
  );
}
