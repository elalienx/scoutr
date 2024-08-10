// Project files
import Button from "components/button/Button";

// Properties
const label = "Click me";
const icon = "plus";

export default {
  Primary: <Button label={label} icon={icon} primary />,
  "Primary (big)": <Button label={label} icon={icon} primary big />,
  Secondary: <Button label={label} icon={icon} />,
  Disabled: <Button label={label} icon={icon} disabled />,
};
