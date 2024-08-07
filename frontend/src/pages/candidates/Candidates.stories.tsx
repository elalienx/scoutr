// Node modules
import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

// Project files
import mockUseEmpty from "scripts/fetch-hook/mocks/mockUseEmpty";
import mockUseError from "scripts/fetch-hook/mocks/mockUseError";
import mockUseLoading from "scripts/fetch-hook/mocks/mockUseLoading";
import mockUseReadyCandidates from "scripts/fetch-hook/mocks/mockUseReadyCandidates";
import Candidates from "./Candidates";

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
    fetchHook: mockUseReadyCandidates,
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
