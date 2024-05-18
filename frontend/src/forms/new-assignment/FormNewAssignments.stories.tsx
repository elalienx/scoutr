// Node modules
import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

// Project files
import FormNewAssignment from "./FormNewAssignment";
import mockFetchAssignment from "scripts/fetch-service/mocks/mockFetchAssignment";
import mockFetchError from "scripts/fetch-service/mocks/mockFetchError";
import mockFetchAssignmentSlow from "scripts/fetch-service/mocks/mockFetchAssignmentSlow";

const meta = {
  title: "Formularies/New Assignment",
  component: FormNewAssignment,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof FormNewAssignment>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    fetchScript: mockFetchAssignment,
  },
};

export const Error: Story = {
  args: {
    fetchScript: mockFetchError,
  },
};

export const TakesAFewSecondsToSubmit: Story = {
  args: {
    fetchScript: mockFetchAssignmentSlow,
  },
};
