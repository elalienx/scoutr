// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import ImageURLs from "stories/image_urls.json";
import ItemCandidate from "./ItemCandidate";

const meta = {
  title: "Components/Item Candidate",
  component: ItemCandidate,
  parameters: { layout: "centered" },
  argTypes: {
    candidate_image_url: { control: { type: "file", accept: ".jpg, .png" } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ItemCandidate>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    candidate_image_url: ImageURLs.candidate_eduardo,
    candidate_name: "Eduardo Alvarez",
    candidate_job_title: "Frontend Developer",
    linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
  },
};

export const JobTitleTrimmed: Story = {
  args: {
    candidate_image_url: ImageURLs.candidate_eduardo,
    candidate_name: "Eduardo Alvarez",
    candidate_job_title:
      "Senior Frontend Developer with a touch of Graphic Design, UI, and UX",
    linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
  },
};

export const Empty: Story = {
  args: {
    candidate_image_url: "",
    candidate_name: "Jorge Dominguez Perdomo",
    candidate_job_title: "UX Generalist",
    linked_in_url: "https://www.linkedin.com/in/jorgedp/",
  },
};
