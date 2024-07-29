// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import ImageURLs from "stories/image_urls.json";
import ItemCandidate from "./ItemCandidate";

const meta = {
  title: "Components/Item Candidate",
  component: ItemCandidate,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof ItemCandidate>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    candidate: {
      candidate_image_url: ImageURLs.candidate_eduardo,
      candidate_name: "Eduardo Alvarez",
      candidate_job_title: "Frontend Developer",
      linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
      id: 0,
      assignment_id: 0,
      date_created: "",
      company_name: "",
      company_duration_in_months: 0,
      company_image_url: "",
      notes: "",
      relevance: 0,
      contact_status: 0,
      contact_date: "",
    },
  },
};

export const Empty: Story = {
  args: {
    candidate: {
      candidate_image_url: "",
      candidate_name: "Jorge Dominguez Perdomo",
      candidate_job_title: "UX Generalist",
      linked_in_url: "https://www.linkedin.com/in/jorgedp/",
      id: 0,
      assignment_id: 0,
      date_created: "",
      company_name: "",
      company_duration_in_months: 0,
      company_image_url: "",
      notes: "",
      relevance: 0,
      contact_status: 0,
      contact_date: "",
    },
  },
};
