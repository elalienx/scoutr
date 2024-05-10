// Node modules
import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

// Project files
import mockUseEmpty from "scripts/fetch-hook/mocks/mockUseEmpty";
import mockUseError from "scripts/fetch-hook/mocks/mockUseError";
import mockUseLoading from "scripts/fetch-hook/mocks/mockUseLoading";
import mockUseReadyAssignments from "scripts/fetch-hook/mocks/mockUseReadyAssignments";
import Assignments from "./Assignments";

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
    fetchHook: mockUseReadyAssignments,
  },
};

export const Loading: Story = {
  args: {
    fetchHook: mockUseLoading,
  },
};

export const Error: Story = {
  args: {
    fetchHook: mockUseError,
  },
};

export const Empty: Story = {
  args: {
    fetchHook: mockUseEmpty,
  },
};
