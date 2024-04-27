// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import ImageURLs from "stories/image_urls.json";
import Assignments from "./Assignments";

const meta = {
  title: "Pages/Assignments",
  component: Assignments,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Assignments>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    customHook: {
      data: [
        {
          id: 1,
          date_created: "2024-01-31 21:00:30.610279",
          assignment_name: "Data Engineer",
          company_name: "Folksam",
          company_image_url: ImageURLs.company_foklsam,
        },
        {
          id: 2,
          date_created: "2024-02-01 21:00:30.610279",
          assignment_name: "Developer Architect",
          company_name: "Folksam",
          company_image_url: ImageURLs.company_foklsam,
        },
        {
          id: 3,
          date_created: "2024-02-02 21:00:30.610279",
          assignment_name: "Master Data Specialist",
          company_name: "McDonalds",
          company_image_url: ImageURLs.company_mcdonalds,
        },
        {
          id: 4,
          date_created: "2024-02-02 21:00:30.610279",
          assignment_name: "Pega Lead System Architech",
          company_name: "Nordea Bank",
          company_image_url: ImageURLs.company_nordea,
        },
      ],
      status: "content",
      message: "",
    },
  },
};

export const Loading: Story = {
  args: {
    customHook: { data: [], message: [], status: "loading" },
  },
};

export const Error: Story = {
  args: {
    customHook: { data: [], message: [], status: "error" },
  },
};

export const Empty: Story = {
  args: {
    customHook: { data: [], message: [], status: "empty" },
  },
};
