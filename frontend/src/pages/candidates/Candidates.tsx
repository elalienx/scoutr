// Project files
import Loader from "components/loader/Loader";
import NavigationBar from "components/navigation-bar/NavigationBar";
import StateEmpty from "./helpers/StateEmpty";
import StateError from "./helpers/StateError";
import Table from "./helpers/Table";
import "./candidates.css";
import Button from "components/button/Button";
import Candidate from "types/Candidate";
import ResultsAPI from "types/ResultsAPI";
import Status from "types/Status";

interface Props {
  /** A React custom hook to fetch data. It returns data, status, and message. */
  hook: () => ResultsAPI;
}

/** The page with the candidate table where you can add more LinkedIn profiles by pressing one button. */
export default function Candidates({ hook }: Props) {
  // Local state
  const { data, status }: { data: Candidate[]; status: Status } = hook();

  // Properties
  const candidatesById = data.sort((a, b) => a.id - b.id);
  const contacted = candidatesById.filter((item) => item.contact_status > 0);
  const response_rate: number = Math.round(
    (contacted.length / candidatesById.length) * 100
  );

  // Components
  const Content = (
    <>
      <Table candidates={candidatesById} />
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
