// Node modules
import { Dispatch, useState } from "react";

// Project files
import superSorter from "scripts/table-sorting/superSorter";
import type TableHeader from "types/TableHeader";
import type Candidate from "types/Candidate";
import type CandidateActions from "types/CandidateActions";
import ButtonHead from "./ButtonHead";
import "./table-head.css";

interface Props {
  /** The names of the header columns. */
  headers: TableHeader[];

  /** The candidates to sort by clicking in each header button. */
  candidates: Candidate[];

  /** A function that uses reducers to update the candidates state. */
  dispatch: Dispatch<CandidateActions>;
}

// 🔔 Refactor: we use dispatch so modify that on TableHead
export default function TableHead({ headers, candidates, dispatch }: Props) {
  // Local state
  const [activeId, setActiveId] = useState<keyof Candidate>("id");

  // Components
  const TableHeads = headers.map((item) => (
    <ButtonHead key={item.id} item={item} activeId={activeId} sorter={sorter} />
  ));

  function sorter(key: keyof Candidate, isAscending: boolean) {
    const result = superSorter(candidates, key, isAscending);

    setActiveId(key);
    dispatch({ type: "set-candidates", payload: result });
  }

  return (
    <thead className="table-head">
      <tr>{TableHeads}</tr>
    </thead>
  );
}
