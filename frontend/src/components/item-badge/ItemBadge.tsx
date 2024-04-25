// Project files
import Badge from "components/badge/Badge";
import Color from "types/Color";
import "./item-badge.css";

interface Props {
  /** What color to use for the Badge. */
  color: Color;

  /**  Badge contents. */
  value: number;

  /** The first line of text. */
  title: string;

  /** The second line of text. This one is optional. */
  subtitle?: string;
}

/** Adds text on a badge to describe the progression or status within a sequence. */
export default function ItemBadge(item: Props) {
  const { value, color, title, subtitle } = item;

  return (
    <div className="item-badge">
      <Badge color={color} value={value} />
      <div className="content">
        <small>{title}</small>
        {subtitle && <small className="label">{subtitle}</small>}
      </div>
    </div>
  );
}
