// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import ImageURLs from "stories/image_urls.json";
import NavigationBar from "./NavigationBar";

const meta = {
  title: "Components/Navigation Bar",
  component: NavigationBar,
  parameters: { layout: "fullscreen" },
  argTypes: {
    company_image_url: { control: { type: "file", accept: ".jpg, .png" } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    assignment_name: "Data Engineer",
    company_image_url: ImageURLs.company_foklsam,
    response_rate: 37,
  },
};

export const NoResponses: Story = {
  args: {
    assignment_name: "Data Engineer",
    company_image_url: ImageURLs.company_foklsam,
    response_rate: 0,
  },
};

export const Empty: Story = {
  args: {
    assignment_name: "Data Engineer",
    company_image_url: "",
    response_rate: -1,
  },
};
