// Project files
import Loader from "components/loader/Loader";
import Assignment from "types/Assignment";
import Status from "types/Status";
import Content from "./content/Content";
import Footer from "./footer/Footer";
import Hero from "./hero/Hero";
import StateError from "./state-error/StateError";
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
  const { data, status } = fetchHook("/api/assignments");

  return (
    <div id="assignments">
      <Hero />
      <section className={`section ${status}`}>
        {status === "loading" && <Loader />}
        {status === "error" && <StateError />}
        {status === "ready" && <Content assignments={data} />}
      </section>
      <Footer />
    </div>
  );
}
