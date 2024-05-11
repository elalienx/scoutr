// Node modules
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Project files
import Loader from "components/loader/Loader";
import NavigationBar from "components/navigation-bar/NavigationBar";
import fetchService from "scripts/fetch-service/fetchService";
import Candidate from "types/Candidate";
import Status from "types/Status";

// -- Refactor: this must belong to page files
import contactedCandidates from "scripts/response-rate/contactedCandidates";
import calculatePercentage from "scripts/response-rate/calculatePercentage";

// Page files
import FormCandidates from "./form-candidates/FormCandidates";
import StateEmpty from "./state-empty/StateEmpty";
import StateError from "./state-error/StateError";
import "./candidates.css";
import Content from "./content/Content";

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

  // Local state
  const uri = "/api/candidates/" + assignment_id;
  const { data: hookData, status: hookStatus } = fetchHook(uri);
  const [data, setData] = useState<Candidate[]>([]);
  const [status, setStatus] = useState<Status>("loading");

  // Properties
  const id = Number(assignment_id) || -1;
  const contacted = contactedCandidates(data);
  const response_rate = calculatePercentage(contacted.length, data.length);

  // Methods
  useEffect(() => setData(hookData), [hookData]);
  useEffect(() => setStatus(hookStatus), [hookStatus]);
  useEffect(() => {
    if (data.length > 0) setStatus("ready");
  }, [data]);

  // Components
  const Form = <FormCandidates fetchScript={fetchService} id={id} state={[data, setData]} />;

  // Safeguard
  if (id === -1) return <StateError />;

  return (
    <div id="candidates">
      <NavigationBar
        assignment_name={"Candidates"}
        company_image_url={""}
        response_rate={response_rate}
      />
      <section className={`section ${status}`}>
        {status === "loading" && <Loader />}
        {status === "empty" && <StateEmpty component={Form} />}
        {status === "error" && <StateError />}
        {status === "ready" && <Content candidates={data} component={Form} />}
      </section>
    </div>
  );
}
