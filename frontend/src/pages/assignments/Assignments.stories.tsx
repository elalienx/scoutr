// Node modules
import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

// Project files
import Assignments from "./Assignments";
import useReadyAssignments from "mocks/useReadyAssignments";
import useLoading from "mocks/useLoading";
import useError from "mocks/useError";
import useEmpty from "mocks/useEmpty";

const meta = {
  title: "Pages/Assignments",
  component: Assignments,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Assignments>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    fetchHook: useReadyAssignments,
  },
};

export const Loading: Story = {
  args: {
    fetchHook: useLoading,
  },
};

export const Error: Story = {
  args: {
    fetchHook: useError,
  },
};

export const Empty: Story = {
  args: {
    fetchHook: useEmpty,
  },
};
