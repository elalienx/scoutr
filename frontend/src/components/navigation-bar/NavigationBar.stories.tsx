// Node modules
import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

// Project files
import NavigationBar from "./NavigationBar";

const meta = {
  title: "Components/Navigation Bar",
  component: NavigationBar,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    assignment_name: "Data Engineer",
    response_rate: 37,
  },
};

export const NoResponses: Story = {
  args: {
    assignment_name: "Data Engineer",
    response_rate: 0,
  },
};

export const Empty: Story = {
  args: {
    assignment_name: "Data Engineer",
    response_rate: -1,
  },
};
