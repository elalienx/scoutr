// Node modules
import { useState } from "react";

// Project files
import superSorter from "scripts/super-sorter/superSorter";
import type TableHeader from "types/TableHeader";
import type Candidate from "types/Candidate";
import ButtonHead from "./ButtonHead";

interface Props {
  /** The names of the header columns. */
  headers: TableHeader[];

  /** The rows of the table, used to be sorted when a header button is pressed. */
  dataState: [Candidate[], Function];
}

export default function TableHead({ headers, dataState }: Props) {
  const [data, setData] = dataState;

  // Local state
  const [activeId, setActiveId] = useState<keyof Candidate>("id");

  // Components
  const TableHeads = headers.map((item) => (
    <ButtonHead key={item.id} item={item} activeId={activeId} sorter={sorter} />
  ));

  function sorter(key: keyof Candidate, isAscending: boolean) {
    const result = superSorter(data, key, isAscending);

    setActiveId(key);
    setData(result);
  }

  return (
    <thead>
      <tr>{TableHeads}</tr>
    </thead>
  );
}
