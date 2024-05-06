// Node modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";

// Project  files
import "./button.css";
import "./variants.css";

interface Props {
  // Main elements
  /** Button contents. */
  label: string;

  /** The click handler. */
  onClick?: () => void;

  /** Is this the main button amongst other buttons? */
  primary?: boolean;

  /** Is this the principal call to action on the page? It can be only be one per page. */
  big?: boolean;

  /** Is the button actionable? */
  disabled?: boolean;

  /** The icon category of FontAwesome library. This can be the "fas" solid icons or the "fab" brand icons. */
  icon_prefix?: IconPrefix;

  /** The icon name from the FontAwesome library. */
  icon?: IconName;
}

/** Primary UI component for user interaction. */
export default function Button(item: Props) {
  const { label, onClick } = item;
  const { primary = false, big = false, disabled = false } = item;
  const { icon_prefix = "fas", icon = "" } = item;

  // Properties
  const cssPrimary = primary && "primary";
  const cssSize = !big && "small";

  return (
    <button
      className={`button ${cssSize} ${cssPrimary}`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon className="icon" icon={[icon_prefix, icon]} />}
      {label}
    </button>
  );
}
