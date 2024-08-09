// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import ImageURLs from "stories/image_urls.json";
import HeaderCandidate from "./HeaderCandidate";

const meta = {
  title: "Tables/Header Candidate",
  component: HeaderCandidate,
  parameters: { layout: "centered" },
  argTypes: {
    candidate_image_url: { control: { type: "file", accept: ".jpg, .png" } },
    company_image_url: { control: { type: "file", accept: ".jpg, .png" } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderCandidate>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    index: 1,
    candidate_image_url: ImageURLs.candidate_eduardo,
    company_image_url: ImageURLs.company_novare,
  },
};

export const OnlyProfile: Story = {
  args: {
    index: 2,
    candidate_image_url: ImageURLs.candidate_eduardo,
    company_image_url: "",
  },
};

export const OnlyLogo: Story = {
  args: {
    index: 3,
    candidate_image_url: "",
    company_image_url: ImageURLs.company_novare,
  },
};

export const Empty: Story = {
  args: {
    index: 4,
    candidate_image_url: "",
    company_image_url: "",
  },
};
