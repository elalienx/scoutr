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

  /** Is this the principal call to action on the page? */
  primary?: boolean;

  /** Is this the biggest button on the screen. It can be only be use inside a page, not a component. */
  big?: boolean;

  // Icons
  /** The icon category of FontAwesome library. This can be the "fas" solid icons or the "fab" brand icons. */
  icon_prefix?: IconPrefix;

  /** The icon name from the FontAwesome library. */
  icon?: IconName;

  // Extra props
  /** Is the button actionable? */
  disabled?: Boolean;

  /** The click handler. */
  onClick?: () => void;
}

/** Primary UI component for user interaction. */
export default function Button(item: Props) {
  const { label, primary = false, big = false } = item;
  const { icon_prefix = "fas", icon = "" } = item;
  const { ...props } = item;

  // Properties
  const cssPrimary = primary ? "primary" : "";
  const cssSize = big ? "big" : "small";

  return (
    <button className={`button ${cssSize} ${cssPrimary}`} {...props}>
      {icon && <FontAwesomeIcon className="icon" icon={[icon_prefix, icon]} />}
      {label}
    </button>
  );
}
