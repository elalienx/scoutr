// Node modules
import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

// Project files
import Assignments from "./Assignments";
import useMockReadyAssignments from "mocks/useMockReadyAssignments";
import useMockLoading from "mocks/useMockLoading";
import useMockError from "mocks/useMockError";
import useMockEmpty from "mocks/useMockEmpty";

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
    fetchHook: useMockReadyAssignments,
  },
};

export const Loading: Story = {
  args: {
    fetchHook: useMockLoading,
  },
};

export const Error: Story = {
  args: {
    fetchHook: useMockError,
  },
};

export const Empty: Story = {
  args: {
    fetchHook: useMockEmpty,
  },
};
