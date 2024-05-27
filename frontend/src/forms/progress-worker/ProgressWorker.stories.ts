// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import ProgressWorker from "./ProgressWorker";
import MockSSEEOneCandidate from "scripts/fetch-sse/mocks/mockSEEOneCandidate";
import MockSSEManyCandidates from "scripts/fetch-sse/mocks/mockSEEManyCandidates";

const meta = {
  title: "Components/Progress Worker",
  component: ProgressWorker,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof ProgressWorker>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    id: 1,
    links: ["one.com"],
    FetchClass: MockSSEEOneCandidate,
    dispatch: () => {},
  },
};

export const ManyCandidates: Story = {
  args: {
    id: 1,
    links: ["one.com", "two.com", "three.com"],
    FetchClass: MockSSEManyCandidates,
    dispatch: () => {},
  },
};

// MockSSEPrivate: Returns 3 candidates, the middle one is a "private profile".
// MockSSEBan: Returns 3 candidates, the last 2 are "banned" to simulate that we exceed the scrapping limit.
