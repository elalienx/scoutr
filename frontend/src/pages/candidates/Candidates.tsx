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
  const { data: candidates, status } = fetchHook(uri);

  // Properties
  const sortedById = candidates.sort((a, b) => a.id - b.id);
  const contacted = sortedById.filter((item) => item.contact_status > 0);
  const response_rate = Math.round(contacted.length / candidates.length) * 100;

  // Components
  const Content = (
    <>
      <Table candidates={sortedById} />
      <Button
        label={"Add candidates"}
        primary={true}
        size="big"
        icon_prefix="fab"
        icon="linkedin"
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
        {status === "empty" && <StateEmpty assignment_id={assignment_id} />}
        {status === "error" && <StateError />}
        {status === "ready" && Content}
      </section>
    </div>
  );
}
