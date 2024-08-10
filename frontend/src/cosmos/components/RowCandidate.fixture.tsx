// Node modules
import { ReactNode } from "react";

// Project files
import RowCandidate from "components/row-candidate/RowCandidate";
import SampleImages from "cosmos/sample-images.json";
import type Candidate from "types/Candidate";

// Properties
const normal: Candidate = {
  id: 1,
  candidate_name: "Eduardo Alvarez Nowak",
  candidate_job_title: "Tech Lead",
  candidate_image_url: SampleImages.candidate_eduardo,
  company_name: "Novare Potential",
  company_duration_in_months: 34,
  company_image_url: SampleImages.company_novare,
  notes: `Highly qualified, likes to help people and stays up to date with the latest frontend development tools.`,
  relevance: 5,
  contact_status: 1,
  contact_date: "2024-04-02 21:00:30.610279",
  assignment_id: 1,
  date_created: "2024-01-31 21:00:30.610279",
  linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
};
const longText: Candidate = {
  id: 2,
  candidate_name: "Eduardo Xavier Alvarez Nowak",
  candidate_job_title: "Tech Lead specializing in frontend",
  candidate_image_url: SampleImages.candidate_eduardo,
  company_name: "Novare Potential part of Human Capital AB",
  company_duration_in_months: 34,
  company_image_url: SampleImages.company_novare,
  notes: `Highly qualified, likes to help people and stays up to date with the latest frontend development tools. Also likes graphic design and UI/UX.`,
  relevance: 5,
  contact_status: 1,
  contact_date: "2024-04-02 21:00:30.610279",
  assignment_id: 1,
  date_created: "2024-01-31 21:00:30.610279",
  linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
};
const empty: Candidate = {
  id: 3,
  candidate_name: "Eduardo Alvarez Nowak",
  candidate_job_title: "",
  candidate_image_url: "",
  company_name: "",
  company_duration_in_months: 0,
  company_image_url: "",
  notes: "",
  relevance: 0,
  contact_status: 0,
  contact_date: "",
  assignment_id: 1,
  date_created: "2024-01-31 21:00:30.610279",
  linked_in_url: "",
};
const mockDispatch = () => {}; // empty on purpose just to render the component

// Decorator
function DecoratorTable({ children }: { children: ReactNode }) {
  return (
    <table style={{ maxWidth: "960px", width: "100%" }}>
      <tbody>{children}</tbody>
    </table>
  );
}

export default {
  Default: (
    <DecoratorTable>
      <RowCandidate candidate={normal} index={1} dispatch={mockDispatch} />
    </DecoratorTable>
  ),
  "Long texts": (
    <DecoratorTable>
      <RowCandidate candidate={longText} index={1} dispatch={mockDispatch} />
    </DecoratorTable>
  ),
  Empty: (
    <DecoratorTable>
      <RowCandidate candidate={empty} index={1} dispatch={mockDispatch} />
    </DecoratorTable>
  ),
};
