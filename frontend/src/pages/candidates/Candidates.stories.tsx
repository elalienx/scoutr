// Node modules
import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

// Project files
import Candidates from "./Candidates";
import useLoading from "mocks/useLoading";
import useError from "mocks/useError";
import useEmpty from "mocks/useEmpty";
import useReadyCandidates from "mocks/useReadyCandidates";

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
    fetchHook: useReadyCandidates,
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
