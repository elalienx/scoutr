/**
 * About:
 * This Story is a .tsx instead of .ts file, because I need to return JSX to wrap the RowCandidate around a HTML table.
 */
// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import ImageURLs from "stories/image_urls.json";
import RowCandidate from "./RowCandidate";

const meta: Meta<typeof RowCandidate> = {
  title: "Tables/Row Candidate",
  component: RowCandidate,
  parameters: { layout: "fullscreen" },
  argTypes: {
    index: { control: { type: "number", min: 1 } },
    candidate: {
      assignment_id: { control: { disable: true } },
      date_created: { control: { disable: true } },
      linked_in_url: { control: { disable: true } },
      candidate_image_url: { control: { type: "file", accept: ".jpg, .png" } },
      company_image_url: { control: { type: "file", accept: ".jpg, .png" } },
      relevance: { control: { type: "range", min: 0, max: 5 } },
      contact_status: { control: { type: "range", min: 0, max: 5 } },
    },
  },
  decorators: [
    (Story) => (
      <table>
        <Story />
      </table>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    index: 1,
    candidate: {
      id: 66,
      candidate_name: "Eduardo Alvarez Nowak",
      candidate_job_title: "Tech Lead",
      candidate_image_url: ImageURLs.candidate_eduardo,
      company_name: "Novare Potential",
      company_duration_in_months: 34,
      company_image_url: ImageURLs.company_novare,
      notes:
        "Highly qualified, likes to help people and stays up to date with the latest frontend development tools.",
      relevance: 5,
      contact_status: 1,
      contact_date: "2024-04-02 21:00:30.610279",
      assignment_id: 1,
      date_created: "2024-01-31 21:00:30.610279",
      linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
    },
  },
};

export const LongTexts: Story = {
  args: {
    index: 2,
    candidate: {
      id: 235,
      candidate_name: "Eduardo Xavier Alvarez Nowak",
      candidate_job_title: "Tech Lead specializing in frontend",
      candidate_image_url: ImageURLs.candidate_eduardo,
      company_name: "Novare Potential part of Human Capital AB",
      company_duration_in_months: 34,
      company_image_url: ImageURLs.company_novare,
      notes:
        "Highly qualified, likes to help people and stays up to date with the latest frontend development tools. Also likes graphic design and UI/UX.",
      relevance: 5,
      contact_status: 1,
      contact_date: "2024-04-02 21:00:30.610279",
      assignment_id: 1,
      date_created: "2024-01-31 21:00:30.610279",
      linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
    },
  },
};

export const Empty: Story = {
  args: {
    index: 3,
    candidate: {
      id: 731,
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
    },
  },
};
