// Project files
import "./loader-suspense.css";

/** A placeholder to show while we dynamically import a module. */
export default function LoaderSuspense() {
  return (
    <div className="loader-suspense">
      <small className="label">Loading...</small>
    </div>
  );
}
