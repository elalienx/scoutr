// Node modules
import { useParams } from "react-router-dom";

// Project files
import Button from "components/button/Button";
import Loader from "components/loader/Loader";
import NavigationBar from "components/navigation-bar/NavigationBar";
import StateEmpty from "./helpers/StateEmpty";
import StateError from "./helpers/StateError";
import Table from "./helpers/Table";
import Candidate from "types/Candidate";
import Status from "types/Status";
import "./candidates.css";
import useDialog from "state/DialogContextAPI";
import FormCandidates from "./helpers/FormCandidates";
import { useEffect, useState } from "react";

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
  const sortedById = data.sort((a, b) => a.id - b.id);
  const contacted = sortedById.filter((item) => item.contact_status > 0);
  const response_rate = Math.round(contacted.length / data.length) * 100;

  // Methods
  useEffect(() => setData(hookData), [hookData]);
  useEffect(() => setStatus(hookStatus), [hookStatus]);
  useEffect(() => {
    if (data.length > 0) setStatus("ready");
  });

  // Components
  const ShowForm = () =>
    showDialog(
      <FormCandidates assignment_id={assignment_id} state={[data, setData]} />
    );
  const Content = (
    <>
      <Table candidates={sortedById} />
      <Button
        label={"Add candidates"}
        primary={true}
        size="big"
        icon_prefix="fab"
        icon="linkedin"
        onClick={ShowForm}
      />
    </>
  );

  return (
    <div id="candidates">
      <NavigationBar
        assignment_name={"Assignment Page"}
        company_image_url={""}
        response_rate={response_rate}
      />
      <section className={`section ${status}`}>
        {status === "loading" && <Loader />}
        {status === "empty" && (
          <StateEmpty assignment_id={assignment_id} state={[data, setData]} />
        )}
        {status === "error" && <StateError />}
        {status === "ready" && Content}
      </section>
    </div>
  );
}
