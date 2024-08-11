// Noe modules
import { useState } from "react";

// Project files
import type TableHeader from "types/TableHeader";

interface Props {
  /**  The label and id of the header button. */
  item: TableHeader;

  /** The state of the of the currently active button to perform actions if this is the current active one. */
  activeId: string;

  /** A callback to the sorter function located on the parent component.  */
  sorter: Function;
}

export default function ButtonHead({ item, activeId, sorter }: Props) {
  const { id, label } = item;

  // Local state
  const [order, setOrder] = useState(id === activeId);

  // Properties
  const icon = order ? "🔼" : "🔽";

  // Methods
  function onClick() {
    const toggleOrder = !order;

    setOrder(toggleOrder);
    sorter(id, toggleOrder);
  }

  return (
    <th onClick={onClick}>
      <span className="label">{label}</span>
      {id === activeId && <span className="icon">{icon}</span>}
    </th>
  );
}
