// Node modules
import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

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
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/path/1"]}>
        <Routes>
          <Route path="/path/:assignment_id" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
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
