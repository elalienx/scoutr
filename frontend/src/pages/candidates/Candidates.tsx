// Node modules
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Project files
import Button from "components/button/Button";
import Loader from "components/loader/Loader";
import NavigationBar from "components/navigation-bar/NavigationBar";
import useDialog from "state/DialogContextAPI";
import Candidate from "types/Candidate";
import Status from "types/Status";

// Page files
import fetchService from "scripts/fetch-service/fetchService";
import contactedCandidates from "scripts/response-rate/contactedCandidates";
import calculatePercentage from "scripts/response-rate/calculatePercentage";
import FormCandidates from "./form-candidates/FormCandidates";
import StateEmpty from "./state-empty/StateEmpty";
import StateError from "./state-error/StateError";
import Table from "./table/Table";
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
  const { showDialog } = useDialog();

  // Local state
  const uri = "/api/candidates/" + assignment_id;
  const { data: hookData, status: hookStatus } = fetchHook(uri);
  const [data, setData] = useState<Candidate[]>([]);
  const [status, setStatus] = useState<Status>("loading");

  // Properties
  const id = Number(assignment_id) || -1;
  const sortedById = data.sort((a, b) => a.id - b.id);
  const contacted = contactedCandidates(sortedById);
  const response_rate = calculatePercentage(contacted.length, sortedById.length);

  // Methods
  useEffect(() => setData(hookData), [hookData]);
  useEffect(() => setStatus(hookStatus), [hookStatus]);
  useEffect(() => {
    if (data.length > 0) setStatus("ready");
  }, [data]);

  // Components
  const Form = <FormCandidates fetchScript={fetchService} id={id} state={[data, setData]} />;
  const Content = (
    <>
      <Table candidates={sortedById} />
      <Button big icon_prefix="fab" icon="linkedin" label={"Add candidates"} onClick={() => showDialog(Form)} primary />
    </>
  );

  // Safeguard
  if (id === -1) return <StateError />;

  return (
    <div id="candidates">
      <NavigationBar assignment_name={"Assignment Page"} company_image_url={""} response_rate={response_rate} />
      <section className={`section ${status}`}>
        {status === "loading" && <Loader />}
        {status === "empty" && <StateEmpty component={Form} />}
        {status === "error" && <StateError />}
        {status === "ready" && Content}
      </section>
    </div>
  );
}
