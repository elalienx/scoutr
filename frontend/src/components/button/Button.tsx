// Node modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";

// Project  files
import "./button.css";
import "./variants.css";

interface Props {
  /** Button contents. */
  label: string;

  /** Is this the principal call to action on the page? */
  primary?: boolean;

  /** The icon category of FontAwesome. This can be the "fas" solid icons or the "fab" brand icons. */
  icon_prefix?: IconPrefix;

  /** The icon name from the FontAwesome library. */
  icon?: IconName;

  /** How large should the button be? */
  size?: "small" | "big";

  /** Optional click handler. */
  onClick?: () => void;
}

/** Primary UI component for user interaction. */
export default function Button(item: Props) {
  const {
    label,
    primary = false,
    icon_prefix = "fas",
    icon = "",
    size = "small",
    ...props
  } = item;

  // Properties
  const classNamePrimary = primary ? "primary" : "";

  return (
    <button className={`button ${size} ${classNamePrimary}`} {...props}>
      {icon && <FontAwesomeIcon className="icon" icon={[icon_prefix, icon]} />}
      {label}
    </button>
  );
}
