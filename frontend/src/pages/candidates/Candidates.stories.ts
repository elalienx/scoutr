// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import ImageURLs from "stories/image_urls.json";
import Candidates from "./Candidates";

const meta = {
  title: "Pages/Candidates",
  component: Candidates,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Candidates>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    data: [
      {
        id: 1,
        candidate_name: "Eduardo Alvarez Nowak",
        candidate_job_title: "Tech Lead",
        candidate_image_url: ImageURLs.candidate_eduardo,
        company_name: "Novare Potential",
        company_duration_in_months: 34,
        company_image_url: ImageURLs.company_novare,
        notes:
          "Highly qualified, likes to help people and stays up to date with the latest frontend development tools.",
        relevance: 3,
        contact_status: 4,
        contact_date: "2024-04-02 21:00:30.610279",
        projectId: 1,
        date_created: "2024-01-31 21:00:30.610279",
        linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
      },
      {
        id: 2,
        candidate_name: "Sussana Vara",
        candidate_job_title: "Partner",
        candidate_image_url: ImageURLs.candidate_susanna,
        company_name: "Novare Potential",
        company_duration_in_months: 80,
        company_image_url: ImageURLs.company_novare,
        notes: "A servant type of leader.",
        relevance: 4,
        contact_status: 1,
        contact_date: "2024-04-02 21:00:30.610279",
        projectId: 1,
        date_created: "2024-01-31 21:00:30.610279",
        linked_in_url: "https://www.linkedin.com/in/susanna-vaara-0b33b03a/",
      },
      {
        id: 3,
        candidate_name: "Lana Haddad",
        candidate_job_title: "Senior Talent Acquisition Specialist",
        candidate_image_url: ImageURLs.candidate_lana,
        company_name: "Novare Potential",
        company_duration_in_months: 85,
        company_image_url: ImageURLs.company_novare,
        notes:
          "More than 8 years of HR recruitment experience in multiples industries like tech, restaurants, health sector, education, white collar, blue collar, executive search, and more. Great salary negotiation skills.",
        relevance: 5,
        contact_status: 0,
        contact_date: "2024-04-02 21:00:30.610279",
        projectId: 1,
        date_created: "2024-01-31 21:00:30.610279",
        linked_in_url: "https://www.linkedin.com/in/lanahaddad87/",
      },
    ],
    status: "content",
  },
};

export const Loading: Story = {
  args: {
    data: [],
    status: "loading",
  },
};

export const Error: Story = {
  args: {
    data: [],
    status: "error",
  },
};

export const Empty: Story = {
  args: {
    data: [],
    status: "empty",
  },
};
