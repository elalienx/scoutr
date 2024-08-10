// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import ImageURLs from "stories/image_urls.json";
import ItemCompany from "./ItemCompany";

const meta = {
  title: "Components/Item Company",
  component: ItemCompany,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof ItemCompany>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    candidate: {
      id: 0,
      assignment_id: 0,
      candidate_image_url: "",
      candidate_job_title: "",
      candidate_name: "",
      company_duration_in_months: 72,
      company_image_url: ImageURLs.company_novare,
      company_name: "Novare Potential",
      contact_date: "",
      contact_status: 0,
      date_created: "",
      linked_in_url: "",
      notes: "",
      relevance: 0,
    },
  },
};

export const ShortJobDuration: Story = {
  args: {
    candidate: {
      id: 0,
      assignment_id: 0,
      candidate_image_url: "",
      candidate_job_title: "",
      candidate_name: "",
      company_duration_in_months: 3,
      company_image_url: ImageURLs.company_novare,
      company_name: "Novare Potential",
      contact_date: "",
      contact_status: 0,
      date_created: "",
      linked_in_url: "",
      notes: "",
      relevance: 0,
    },
  },
};

export const Empty: Story = {
  args: {
    candidate: {
      id: 0,
      assignment_id: 0,
      candidate_image_url: "",
      candidate_job_title: "",
      candidate_name: "",
      company_duration_in_months: 12,
      company_image_url: "",
      company_name: "Novare Potential",
      contact_date: "",
      contact_status: 0,
      date_created: "",
      linked_in_url: "",
      notes: "",
      relevance: 0,
    },
  },
};
