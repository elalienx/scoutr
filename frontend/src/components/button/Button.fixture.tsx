// Project files
import Button from "./Button";
import { IconName } from "@fortawesome/fontawesome-svg-core";

// Properties
const label: string = "Click me";
const icon: IconName = "plus";

export default {
  Primary: <Button label={label} icon={icon} primary />,
  "Primary (big)": <Button label={label} icon={icon} primary big />,
  Secondary: <Button label={label} icon={icon} />,
  Disabled: <Button label={label} icon={icon} disabled />,
};
