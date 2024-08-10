// Project files
import type IconPrefix from "types/IconPrefix";
import icons from "./font-awesome.json";
import "./font-awesome.css";

interface Props {
  /** An array with the icon category, called Prefix, and the icon name */
  icon: [IconPrefix, string];

  /** If you want the icon to rotate in its axis. Used for loading animations. */
  spin?: boolean;
}

export default function FontAwesomeIcon({ icon, spin }: Props) {
  const [prefix, name] = icon;

  // Properties
  const placeholder = {
    width: 512,
    path: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",
  };
  // @ts-ignore
  const shape = icons?.[prefix]?.[name] || placeholder;

  return (
    <span className="fontawesome">
      <svg
        className={`icon ${spin && "spin"}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${shape.width} 512`}
      >
        <path d={shape.path} />
      </svg>
    </span>
  );
}
