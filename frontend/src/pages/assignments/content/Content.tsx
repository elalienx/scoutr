// Project files
import Card from "components/card/Card";
import CardNew from "components/card-new/CardNew";
import FormNewAssignment from "forms/new-assignment/FormNewAssignment";
import fetchService from "scripts/fetch-service/fetchService";
import type Assignment from "types/Assignment";
import StateEmpty from "../state-empty/StateEmpty";

interface Props {
  assignments: Assignment[];
}

export default function Content({ assignments }: Props) {
  // Components
  const Cards = assignments.map((item) => <Card key={item.id} {...item} />);
  const Form = <FormNewAssignment fetchScript={fetchService} />;

  // Safeguard
  if (assignments.length === 0) return <StateEmpty component={Form} />;

  return (
    <div className="cards">
      {Cards}
      <CardNew key={"card-new"} component={Form} />
    </div>
  );
}
