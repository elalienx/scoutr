// Node modules
import { ReactNode, useReducer } from "react";

// Project files
import Table from "components/table/Table";
import SampleImages from "scripts/fetch-hook/mocks/sample-images.json";
import CandidatesReducer from "state/CandidatesReducer";
import type Candidate from "types/Candidate";

// Properties
const fewCandidates: Candidate[] = [
  {
    id: 1,
    candidate_name: "Eduardo Alvarez Nowak",
    candidate_job_title: "Tech Lead",
    candidate_image_url: SampleImages.candidate_eduardo,
    company_name: "Novare Potential",
    company_duration_in_months: 34,
    company_image_url: SampleImages.company_novare,
    notes: `Highly qualified, likes to help people and stays up to date with the latest frontend development tools.`,
    relevance: 3,
    contact_status: 4,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
  },
  {
    id: 2,
    candidate_name: "Sussana Vara",
    candidate_job_title: "Partner",
    candidate_image_url: SampleImages.candidate_susanna,
    company_name: "Novare Potential",
    company_duration_in_months: 80,
    company_image_url: SampleImages.company_novare,
    notes: "A servant type of leader.",
    relevance: 4,
    contact_status: 1,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/susanna-vaara-0b33b03a/",
  },
  {
    id: 3,
    candidate_name: "Lana Haddad",
    candidate_job_title: "Senior Talent Acquisition Specialist",
    candidate_image_url: "",
    company_name: "Novare Potential",
    company_duration_in_months: 85,
    company_image_url: SampleImages.company_novare,
    notes: `More than 8 years of HR recruitment experience in multiples industries like tech, restaurants, health sector, education, white collar, blue collar, executive search, and more. Great salary negotiation skills.`,
    relevance: 5,
    contact_status: 0,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/lanahaddad87/",
  },
];
const manyCandidates: Candidate[] = [
  {
    id: 1,
    candidate_name: "Eduardo Alvarez Nowak",
    candidate_job_title: "Tech Lead",
    candidate_image_url: SampleImages.candidate_eduardo,
    company_name: "Novare Potential",
    company_duration_in_months: 34,
    company_image_url: SampleImages.company_novare,
    notes: `Highly qualified, likes to help people and stays up to date with the latest frontend development tools.`,
    relevance: 3,
    contact_status: 4,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
  },
  {
    id: 2,
    candidate_name: "Sussana Vara",
    candidate_job_title: "Partner",
    candidate_image_url: SampleImages.candidate_susanna,
    company_name: "Novare Potential",
    company_duration_in_months: 80,
    company_image_url: SampleImages.company_novare,
    notes: "A servant type of leader.",
    relevance: 4,
    contact_status: 1,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/susanna-vaara-0b33b03a/",
  },
  {
    id: 3,
    candidate_name: "Lana Haddad",
    candidate_job_title: "Senior Talent Acquisition Specialist",
    candidate_image_url: "",
    company_name: "Novare Potential",
    company_duration_in_months: 85,
    company_image_url: SampleImages.company_novare,
    notes: `More than 8 years of HR recruitment experience in multiples industries like tech, restaurants, health sector, education, white collar, blue collar, executive search, and more. Great salary negotiation skills.`,
    relevance: 5,
    contact_status: 0,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/lanahaddad87/",
  },
  {
    id: 4,
    candidate_name: "Eduardo Alvarez Nowak",
    candidate_job_title: "Tech Lead",
    candidate_image_url: SampleImages.candidate_eduardo,
    company_name: "Novare Potential",
    company_duration_in_months: 34,
    company_image_url: SampleImages.company_novare,
    notes: `Highly qualified, likes to help people and stays up to date with the latest frontend development tools.`,
    relevance: 3,
    contact_status: 4,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
  },
  {
    id: 5,
    candidate_name: "Sussana Vara",
    candidate_job_title: "Partner",
    candidate_image_url: SampleImages.candidate_susanna,
    company_name: "Novare Potential",
    company_duration_in_months: 80,
    company_image_url: SampleImages.company_novare,
    notes: "A servant type of leader.",
    relevance: 4,
    contact_status: 1,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/susanna-vaara-0b33b03a/",
  },
  {
    id: 6,
    candidate_name: "Lana Haddad",
    candidate_job_title: "Senior Talent Acquisition Specialist",
    candidate_image_url: "",
    company_name: "Novare Potential",
    company_duration_in_months: 85,
    company_image_url: SampleImages.company_novare,
    notes: `More than 8 years of HR recruitment experience in multiples industries like tech, restaurants, health sector, education, white collar, blue collar, executive search, and more. Great salary negotiation skills.`,
    relevance: 5,
    contact_status: 0,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/lanahaddad87/",
  },
  {
    id: 7,
    candidate_name: "Eduardo Alvarez Nowak",
    candidate_job_title: "Tech Lead",
    candidate_image_url: SampleImages.candidate_eduardo,
    company_name: "Novare Potential",
    company_duration_in_months: 34,
    company_image_url: SampleImages.company_novare,
    notes: `Highly qualified, likes to help people and stays up to date with the latest frontend development tools.`,
    relevance: 3,
    contact_status: 4,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
  },
  {
    id: 8,
    candidate_name: "Sussana Vara",
    candidate_job_title: "Partner",
    candidate_image_url: SampleImages.candidate_susanna,
    company_name: "Novare Potential",
    company_duration_in_months: 80,
    company_image_url: SampleImages.company_novare,
    notes: "A servant type of leader.",
    relevance: 4,
    contact_status: 1,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/susanna-vaara-0b33b03a/",
  },
  {
    id: 9,
    candidate_name: "Lana Haddad",
    candidate_job_title: "Senior Talent Acquisition Specialist",
    candidate_image_url: "",
    company_name: "Novare Potential",
    company_duration_in_months: 85,
    company_image_url: SampleImages.company_novare,
    notes: `More than 8 years of HR recruitment experience in multiples industries like tech, restaurants, health sector, education, white collar, blue collar, executive search, and more. Great salary negotiation skills.`,
    relevance: 5,
    contact_status: 0,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/lanahaddad87/",
  },
  {
    id: 10,
    candidate_name: "Lana Haddad",
    candidate_job_title: "Senior Talent Acquisition Specialist",
    candidate_image_url: "",
    company_name: "Novare Potential",
    company_duration_in_months: 85,
    company_image_url: SampleImages.company_novare,
    notes: `More than 8 years of HR recruitment experience in multiples industries like tech, restaurants, health sector, education, white collar, blue collar, executive search, and more. Great salary negotiation skills.`,
    relevance: 5,
    contact_status: 0,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/lanahaddad87/",
  },
  {
    id: 11,
    candidate_name: "Eduardo Alvarez Nowak",
    candidate_job_title: "Tech Lead",
    candidate_image_url: SampleImages.candidate_eduardo,
    company_name: "Novare Potential",
    company_duration_in_months: 34,
    company_image_url: SampleImages.company_novare,
    notes: `Highly qualified, likes to help people and stays up to date with the latest frontend development tools.`,
    relevance: 3,
    contact_status: 4,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
  },
  {
    id: 12,
    candidate_name: "Sussana Vara",
    candidate_job_title: "Partner",
    candidate_image_url: SampleImages.candidate_susanna,
    company_name: "Novare Potential",
    company_duration_in_months: 80,
    company_image_url: SampleImages.company_novare,
    notes: "A servant type of leader.",
    relevance: 4,
    contact_status: 1,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/susanna-vaara-0b33b03a/",
  },
  {
    id: 13,
    candidate_name: "Lana Haddad",
    candidate_job_title: "Senior Talent Acquisition Specialist",
    candidate_image_url: "",
    company_name: "Novare Potential",
    company_duration_in_months: 85,
    company_image_url: SampleImages.company_novare,
    notes: `More than 8 years of HR recruitment experience in multiples industries like tech, restaurants, health sector, education, white collar, blue collar, executive search, and more. Great salary negotiation skills.`,
    relevance: 5,
    contact_status: 0,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/lanahaddad87/",
  },
  {
    id: 14,
    candidate_name: "Eduardo Alvarez Nowak",
    candidate_job_title: "Tech Lead",
    candidate_image_url: SampleImages.candidate_eduardo,
    company_name: "Novare Potential",
    company_duration_in_months: 34,
    company_image_url: SampleImages.company_novare,
    notes: `Highly qualified, likes to help people and stays up to date with the latest frontend development tools.`,
    relevance: 3,
    contact_status: 4,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
  },
  {
    id: 15,
    candidate_name: "Sussana Vara",
    candidate_job_title: "Partner",
    candidate_image_url: SampleImages.candidate_susanna,
    company_name: "Novare Potential",
    company_duration_in_months: 80,
    company_image_url: SampleImages.company_novare,
    notes: "A servant type of leader.",
    relevance: 4,
    contact_status: 1,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/susanna-vaara-0b33b03a/",
  },
  {
    id: 16,
    candidate_name: "Lana Haddad",
    candidate_job_title: "Senior Talent Acquisition Specialist",
    candidate_image_url: "",
    company_name: "Novare Potential",
    company_duration_in_months: 85,
    company_image_url: SampleImages.company_novare,
    notes: `More than 8 years of HR recruitment experience in multiples industries like tech, restaurants, health sector, education, white collar, blue collar, executive search, and more. Great salary negotiation skills.`,
    relevance: 5,
    contact_status: 0,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/lanahaddad87/",
  },
  {
    id: 17,
    candidate_name: "Eduardo Alvarez Nowak",
    candidate_job_title: "Tech Lead",
    candidate_image_url: SampleImages.candidate_eduardo,
    company_name: "Novare Potential",
    company_duration_in_months: 34,
    company_image_url: SampleImages.company_novare,
    notes: `Highly qualified, likes to help people and stays up to date with the latest frontend development tools.`,
    relevance: 3,
    contact_status: 4,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
  },
  {
    id: 18,
    candidate_name: "Sussana Vara",
    candidate_job_title: "Partner",
    candidate_image_url: SampleImages.candidate_susanna,
    company_name: "Novare Potential",
    company_duration_in_months: 80,
    company_image_url: SampleImages.company_novare,
    notes: "A servant type of leader.",
    relevance: 4,
    contact_status: 1,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/susanna-vaara-0b33b03a/",
  },
  {
    id: 19,
    candidate_name: "Lana Haddad",
    candidate_job_title: "Senior Talent Acquisition Specialist",
    candidate_image_url: "",
    company_name: "Novare Potential",
    company_duration_in_months: 85,
    company_image_url: SampleImages.company_novare,
    notes: `More than 8 years of HR recruitment experience in multiples industries like tech, restaurants, health sector, education, white collar, blue collar, executive search, and more. Great salary negotiation skills.`,
    relevance: 5,
    contact_status: 0,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/lanahaddad87/",
  },
  {
    id: 20,
    candidate_name: "Lana Haddad",
    candidate_job_title: "Senior Talent Acquisition Specialist",
    candidate_image_url: "",
    company_name: "Novare Potential",
    company_duration_in_months: 85,
    company_image_url: SampleImages.company_novare,
    notes: `More than 8 years of HR recruitment experience in multiples industries like tech, restaurants, health sector, education, white collar, blue collar, executive search, and more. Great salary negotiation skills.`,
    relevance: 5,
    contact_status: 0,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/lanahaddad87/",
  },
  {
    id: 21,
    candidate_name: "Eduardo Alvarez Nowak",
    candidate_job_title: "Tech Lead",
    candidate_image_url: SampleImages.candidate_eduardo,
    company_name: "Novare Potential",
    company_duration_in_months: 34,
    company_image_url: SampleImages.company_novare,
    notes: `Highly qualified, likes to help people and stays up to date with the latest frontend development tools.`,
    relevance: 3,
    contact_status: 4,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
  },
  {
    id: 22,
    candidate_name: "Sussana Vara",
    candidate_job_title: "Partner",
    candidate_image_url: SampleImages.candidate_susanna,
    company_name: "Novare Potential",
    company_duration_in_months: 80,
    company_image_url: SampleImages.company_novare,
    notes: "A servant type of leader.",
    relevance: 4,
    contact_status: 1,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/susanna-vaara-0b33b03a/",
  },
  {
    id: 23,
    candidate_name: "Lana Haddad",
    candidate_job_title: "Senior Talent Acquisition Specialist",
    candidate_image_url: "",
    company_name: "Novare Potential",
    company_duration_in_months: 85,
    company_image_url: SampleImages.company_novare,
    notes: `More than 8 years of HR recruitment experience in multiples industries like tech, restaurants, health sector, education, white collar, blue collar, executive search, and more. Great salary negotiation skills.`,
    relevance: 5,
    contact_status: 0,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/lanahaddad87/",
  },
  {
    id: 24,
    candidate_name: "Eduardo Alvarez Nowak",
    candidate_job_title: "Tech Lead",
    candidate_image_url: SampleImages.candidate_eduardo,
    company_name: "Novare Potential",
    company_duration_in_months: 34,
    company_image_url: SampleImages.company_novare,
    notes: `Highly qualified, likes to help people and stays up to date with the latest frontend development tools.`,
    relevance: 3,
    contact_status: 4,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
  },
  {
    id: 25,
    candidate_name: "Sussana Vara",
    candidate_job_title: "Partner",
    candidate_image_url: SampleImages.candidate_susanna,
    company_name: "Novare Potential",
    company_duration_in_months: 80,
    company_image_url: SampleImages.company_novare,
    notes: "A servant type of leader.",
    relevance: 4,
    contact_status: 1,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/susanna-vaara-0b33b03a/",
  },
  {
    id: 26,
    candidate_name: "Lana Haddad",
    candidate_job_title: "Senior Talent Acquisition Specialist",
    candidate_image_url: "",
    company_name: "Novare Potential",
    company_duration_in_months: 85,
    company_image_url: SampleImages.company_novare,
    notes: `More than 8 years of HR recruitment experience in multiples industries like tech, restaurants, health sector, education, white collar, blue collar, executive search, and more. Great salary negotiation skills.`,
    relevance: 5,
    contact_status: 0,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/lanahaddad87/",
  },
  {
    id: 27,
    candidate_name: "Eduardo Alvarez Nowak",
    candidate_job_title: "Tech Lead",
    candidate_image_url: SampleImages.candidate_eduardo,
    company_name: "Novare Potential",
    company_duration_in_months: 34,
    company_image_url: SampleImages.company_novare,
    notes: `Highly qualified, likes to help people and stays up to date with the latest frontend development tools.`,
    relevance: 3,
    contact_status: 4,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
  },
  {
    id: 28,
    candidate_name: "Sussana Vara",
    candidate_job_title: "Partner",
    candidate_image_url: SampleImages.candidate_susanna,
    company_name: "Novare Potential",
    company_duration_in_months: 80,
    company_image_url: SampleImages.company_novare,
    notes: "A servant type of leader.",
    relevance: 4,
    contact_status: 1,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/susanna-vaara-0b33b03a/",
  },
  {
    id: 29,
    candidate_name: "Lana Haddad",
    candidate_job_title: "Senior Talent Acquisition Specialist",
    candidate_image_url: "",
    company_name: "Novare Potential",
    company_duration_in_months: 85,
    company_image_url: SampleImages.company_novare,
    notes: `More than 8 years of HR recruitment experience in multiples industries like tech, restaurants, health sector, education, white collar, blue collar, executive search, and more. Great salary negotiation skills.`,
    relevance: 5,
    contact_status: 0,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/lanahaddad87/",
  },
  {
    id: 30,
    candidate_name: "Lana Haddad",
    candidate_job_title: "Senior Talent Acquisition Specialist",
    candidate_image_url: "",
    company_name: "Novare Potential",
    company_duration_in_months: 85,
    company_image_url: SampleImages.company_novare,
    notes: `More than 8 years of HR recruitment experience in multiples industries like tech, restaurants, health sector, education, white collar, blue collar, executive search, and more. Great salary negotiation skills.`,
    relevance: 5,
    contact_status: 0,
    contact_date: "2024-04-02 21:00:30.610279",
    assignment_id: 1,
    date_created: "2024-01-31 21:00:30.610279",
    linked_in_url: "https://www.linkedin.com/in/lanahaddad87/",
  },
];

// Decorators
function DecoratorPage({ children }: { children: ReactNode }) {
  return (
    <div className="page" style={{ maxHeight: "100vh" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {children}
      </div>
    </div>
  );
}

/**
 * About:
 * In addition to the decorator, this component is wrapped around a React function,
 * to access the React state as <Table/> uses React Memo to memorize the mutations
 * done using the dispatch.
 */
export default {
  Default: () => {
    // Global state
    const [candidates, dispatch] = useReducer(CandidatesReducer, fewCandidates);

    return (
      <DecoratorPage>
        <Table state={[candidates, dispatch]} />
      </DecoratorPage>
    );
  },
  "Long scrollable table": () => {
    // Global state
    const [candidates, dispatch] = useReducer(CandidatesReducer, manyCandidates);

    return (
      <DecoratorPage>
        <Table state={[candidates, dispatch]} />
      </DecoratorPage>
    );
  },
};
