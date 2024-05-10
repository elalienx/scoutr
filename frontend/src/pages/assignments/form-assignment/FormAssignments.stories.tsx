// Node modules
import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

// Project files
import FormAssignment from "./FormAssignment";
import fetchAssignment from "scripts/fetch-service/mocks/fetchAssignment";
import fetchAssignmentSlow from "scripts/fetch-service/mocks/fetchAssignmentSlow";
import fetchError from "scripts/fetch-service/mocks/fetchError";

const meta = {
  title: "Formularies/New Assignment",
  component: FormAssignment,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof FormAssignment>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    fetchScript: fetchAssignment,
  },
};

export const Error: Story = {
  args: {
    fetchScript: fetchError,
  },
};

export const Takes5SecondsToSubmit: Story = {
  args: {
    fetchScript: fetchAssignmentSlow,
  },
};
