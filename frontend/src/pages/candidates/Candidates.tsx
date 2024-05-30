// Node modules
import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";

// Project files
import Loader from "components/loader/Loader";
import NavigationBar from "components/navigation-bar/NavigationBar";
import Page404 from "pages/page-404/Page404";
import calculatePercentage from "scripts/response-rate/calculatePercentage";
import contactedCandidates from "scripts/response-rate/contactedCandidates";
import repliedCandidates from "scripts/response-rate/repliedCandidates";
import CandidatesReducer from "state/CandidatesReducer";
import type Candidate from "types/Candidate";
import type Status from "types/Status";
import Content from "./content/Content";
import StateError from "./state-error/StateError";
import "./candidates.css";

interface Props {
  /** A React custom hook to fetch data. The return complies with the ResultsAPI interface. */
  fetchHook: (url: string) => {
    data: Candidate[];
    status: Status;
    message: string;
  };
}

/** The page with the candidate table where you can add more LinkedIn profiles by pressing one button. */
export default function Candidates({ fetchHook }: Props) {
  // Global state
  const { assignment_id } = useParams();
  const { data, status } = fetchHook("/api/candidates/" + assignment_id);

  // Local state
  const [candidates, dispatch] = useReducer(CandidatesReducer, data);

  // Properties
  const id = Number(assignment_id) || undefined;
  const contacted = contactedCandidates(candidates);
  const replied = repliedCandidates(candidates);
  const response_rate = calculatePercentage(replied, contacted);

  // Methods
  useEffect(() => dispatch({ type: "set-candidates", payload: data }), [data]);

  // Safeguard
  if (!id) return <Page404 />;

  return (
    <div id="candidates">
      <NavigationBar assignment_name={"Candidates"} response_rate={response_rate} />
      <section className="section">
        {status === "loading" && <Loader />}
        {status === "error" && <StateError />}
        {status === "ready" && <Content id={id} state={[candidates, dispatch]} />}
      </section>
    </div>
  );
}
