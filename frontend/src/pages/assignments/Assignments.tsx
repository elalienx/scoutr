// Project files
import Card from "components/card/Card";
import CardNew from "components/card-new/CardNew";
import Loader from "components/loader/Loader";
import Footer from "./helpers/Footer";
import Hero from "./helpers/Hero";
import StateEmpty from "./helpers/StateEmpty";
import StateError from "./helpers/StateError";
import Assignment from "types/Assignment";
import Status from "types/Status";
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
  const { data: assignments, status } = fetchHook(uri);

  // Properties
  const sortedById = assignments.sort((a, b) => a.id - b.id);

  // Components
  const Content = sortedById.map((item) => <Card key={item.id} {...item} />);
  Content.push(<CardNew key={"card-new"} />);

  return (
    <div id="assignments">
      <Hero />
      <section className={`section ${status}`}>
        {status === "loading" && <Loader />}
        {status === "empty" && <StateEmpty />}
        {status === "error" && <StateError />}
        {status === "ready" && Content}
      </section>
      <Footer />
    </div>
  );
}
