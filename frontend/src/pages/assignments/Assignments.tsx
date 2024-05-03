// Project files
import Card from "components/card/Card";
import CardNew from "components/card-new/CardNew";
import Loader from "components/loader/Loader";
import Assignment from "types/Assignment";
import Status from "types/Status";

// Page files
import Footer from "./footer/Footer";
import FormAssignment from "./form-assignment/FormAssignment";
import Hero from "./hero/Hero";
import StateEmpty from "./state-empty/StateEmpty";
import StateError from "./state-error/StateError";
import "scripts/fontAwesome";
import "./assignments.css";

interface Props {
  /** A React custom hook to fetch data. The return complies with the ResultsAPI interface. */
  fetchHook: (url: string) => {
    data: Assignment[];
    status: Status;
    message: string;
  };
}

/** The homepage of Scoutr and the place to create new assignments. */
export default function Assignments({ fetchHook }: Props) {
  // Local state
  const uri = "/api/assignments";
  const { data, status } = fetchHook(uri);

  // Properties
  const sortedById = data.sort((a, b) => a.id - b.id);

  // Components
  const Form = <FormAssignment />;
  const Content = sortedById.map((item) => <Card key={item.id} {...item} />);
  Content.push(<CardNew key={"card-new"} component={Form} />);

  return (
    <div id="assignments">
      <Hero />
      <section className={`section ${status}`}>
        {status === "loading" && <Loader />}
        {status === "empty" && <StateEmpty component={Form} />}
        {status === "error" && <StateError />}
        {status === "ready" && Content}
      </section>
      <Footer />
    </div>
  );
}
