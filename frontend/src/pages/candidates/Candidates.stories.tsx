// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import Candidates from "./Candidates";
import useMockLoading from "mocks/useMockLoading";
import useMockError from "mocks/useMockError";
import useMockEmpty from "mocks/useMockEmpty";
import useMockReadyCandidates from "mocks/useMockReadyCandidates";

const meta = {
  title: "Pages/Candidates",
  component: Candidates,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Candidates>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    fetchHook: useMockReadyCandidates,
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
