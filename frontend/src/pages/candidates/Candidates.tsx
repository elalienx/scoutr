// Project files
import Loader from "components/loader/Loader";
import NavigationBar from "components/navigation-bar/NavigationBar";
import Status from "types/Status";
import StateEmpty from "./helpers/StateEmpty";
import StateError from "./helpers/StateError";
import Table from "./helpers/Table";
import "./candidates.css";
import Button from "components/button/Button";
import Candidate from "types/Candidate";

interface Props {
  /** The candidates belonging to an assignment. */
  data: any;

  /** The status of calling the server. */
  status: Status;
}

/** The page with the candidate table where you can add more LinkedIn profiles by pressing one button. */
export default function Candidates(item: Props) {
  // Local state
  const { data, status } = item;

  // Properties
  const candidates: Candidate[] = data;
  const contacted = candidates.filter((item) => item.contact_status > 0);
  const response_rate: number = Math.round(
    (contacted.length / candidates.length) * 100
  );

  // Components
  const Content = (
    <>
      <Table candidates={candidates} />
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
        {status === "empty" && <StateEmpty />}
        {status === "error" && <StateError />}
        {status === "ready" && Content}
      </section>
    </div>
  );
}
