// Node modules
import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

// Project files
import FormAssignment from "./FormAssignment";

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
export const SubmitDefault: Story = {
  args: {},
};

export const SubmitLoading: Story = {
  args: {},
};

export const SubmitError: Story = {
  args: {},
};
