// Project files
import Card from "components/card/Card";
import CardNew from "components/card-new/CardNew";
import Loader from "components/loader/Loader";
import Footer from "./helpers/Footer";
import Hero from "./helpers/Hero";
import StateEmpty from "./helpers/StateEmpty";
import StateError from "./helpers/StateError";
import Assignment from "types/Assignment";
import ResultsAPI from "types/ResultsAPI";
import Status from "types/Status";
import "./assignments.css";

interface Props {
  /** A React custom hook to fetch data. It returns a ResultsAPI interface. */
  fetchHook: (url: string) => ResultsAPI;
}

/** The homepage of Scoutr and the place to create new assignments. */
export default function Assignments({ fetchHook }: Props) {
  // Local state
  const { data, status } = fetchHook("/api/assignments");

  // Properties
  const assignmentsById = data.sort((a, b) => a.id - b.id);

  // Components
  const Cards = assignmentsById.map((item) => <Card key={item.id} {...item} />);
  Cards.push(<CardNew key={"card-new"} />);

  return (
    <div id="assignments">
      <Hero />
      <section className={`section ${status}`}>
        {status === "loading" && <Loader />}
        {status === "empty" && <StateEmpty />}
        {status === "error" && <StateError />}
        {status === "ready" && Cards}
      </section>
      <Footer />
    </div>
  );
}
