// Node modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";

// Project  files
import "./button.css";
import "./variants.css";

interface Props {
  /** Button contents. */
  label: string;

  /** The click handler. */
  onClick?: () => void;

  /** Is this the principal call to action on the page? */
  primary?: boolean;

  /** Is this the biggest button on the screen. It can be only be use inside a page, not a component. */
  big?: boolean;

  /** The icon category of FontAwesome library. This can be the "fas" solid icons or the "fab" brand icons. */
  icon_prefix?: IconPrefix;

  /** The icon name from the FontAwesome library. */
  icon?: IconName;

  /** Is the button actionable? */
  disabled?: Boolean;
}

/** Primary UI component for user interaction. */
export default function Button(item: Props) {
  const {
    label,
    primary = false,
    big = false,
    icon_prefix = "fas",
    icon = "",
    ...props
  } = item;

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
