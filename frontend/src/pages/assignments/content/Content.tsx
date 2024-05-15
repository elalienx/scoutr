// Project files
import Card from "components/card/Card";
import CardNew from "components/card-new/CardNew";
import fetchService from "scripts/fetch-service/fetchService";
import Assignment from "types/Assignment";
import FormAssignment from "../form-assignment/FormAssignment";
import StateEmpty from "../state-empty/StateEmpty";

interface Props {
  assignments: Assignment[];
}

export default function Content({ assignments }: Props) {
  // Properties
  const sortedById = assignments.sort((a, b) => a.id - b.id);

  // Components
  const Cards = sortedById.map((item) => <Card key={item.id} {...item} />);
  const Form = <FormAssignment fetchScript={fetchService} />;

  // Safeguard
  if (assignments.length === 0) return <StateEmpty component={Form} />;

  return (
    <div className="page-content">
      {Cards}
      <CardNew key={"card-new"} component={Form} />
    </div>
  );
}
