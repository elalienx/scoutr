// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import ImageURLs from "stories/image_urls.json";
import Card from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: { layout: "centered" },
  argTypes: {
    date_created: { control: { disable: true } },
    company_image_url: { control: { type: "file", accept: ".jpg, .png" } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    id: 1,
    date_created: "2024-04-15",
    assignment_name: "Data Engineer",
    company_name: "Folksam",
    company_image_url: ImageURLs.company_foklsam,
  },
};

export const Empty: Story = {
  args: {
    id: 2,
    date_created: "2024-04-15",
    assignment_name: "Data Engineer",
    company_name: "Folksam",
    company_image_url: "",
  },
};
