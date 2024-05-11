// Node modules
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
import Page404 from "pages/page404/Page404";

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
  const { data: serverData, status: serverStatus } = fetchHook(uri);
  const [data, setData] = useState(serverData);
  const [status, setStatus] = useState(serverStatus);

  // Properties
  const id = Number(assignment_id) || -1;
  const contacted = contactedCandidates(data);
  const response_rate = calculatePercentage(contacted.length, data.length);

  // Methods
  useEffect(() => {
    setData(serverData);
    setStatus(serverStatus);
  }, [serverData]);
  useEffect(() => {
    if (data.length > 0) setStatus("ready");
  }, [data]);

  // Components
  const Form = <FormCandidates fetchScript={fetchService} id={id} state={[data, setData]} />;

  // Safeguard
  if (id === -1) return <Page404 />;

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
