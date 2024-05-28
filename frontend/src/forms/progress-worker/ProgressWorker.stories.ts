// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import ProgressWorker from "./ProgressWorker";
import MockSSEEOneCandidate from "scripts/fetch-sse/mocks/mockSEEOneCandidate";
import MockSSEManyCandidates from "scripts/fetch-sse/mocks/mockSEEManyCandidates";
import MockSSEPrivate from "scripts/fetch-sse/mocks/mockSEEPrivate";
import MockSSEBan from "scripts/fetch-sse/mocks/mockSSEBan";

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
    links: ["eduardo.com"],
    FetchClass: MockSSEEOneCandidate,
    dispatch: () => {},
  },
};

export const ManyCandidates: Story = {
  args: {
    id: 1,
    links: ["eduardo.com", "sussana.com", "lana.com"],
    FetchClass: MockSSEManyCandidates,
    dispatch: () => {},
  },
};

export const PrivateProfile: Story = {
  args: {
    id: 1,
    links: ["eduardo.com", "ivan.com", "lana.com"],
    FetchClass: MockSSEPrivate,
    dispatch: () => {},
  },
};

export const Banned: Story = {
  args: {
    id: 1,
    links: ["eduardo.com", "sussana.com", "lana.com"],
    FetchClass: MockSSEBan,
    dispatch: () => {},
  },
};
