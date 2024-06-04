// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import ImageURLs from "stories/image_urls.json";
import ItemCompany from "./ItemCompany";

const meta = {
  title: "Components/Item Company",
  component: ItemCompany,
  parameters: { layout: "centered" },
  argTypes: {
    company_image_url: { control: { type: "file", accept: ".jpg, .png" } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ItemCompany>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    item: {
      company_image_url: ImageURLs.company_novare,
      company_name: "Novare Potential",
      company_duration_in_months: 72,
    },
    onClick: () => alert("Clicked"),
  },
};

export const ShortJobDuration: Story = {
  args: {
    item: {
      company_image_url: ImageURLs.company_novare,
      company_name: "Novare Potential",
      company_duration_in_months: 3,
    },
    onClick: () => alert("Clicked"),
  },
};

export const Empty: Story = {
  args: {
    item: {
      company_image_url: "",
      company_name: "Novare Potential",
      company_duration_in_months: 12,
    },
    onClick: () => alert("Clicked"),
  },
};
