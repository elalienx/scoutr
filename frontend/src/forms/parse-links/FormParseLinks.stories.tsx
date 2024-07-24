// Node modules
import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

// Project files
import MockSSEEOneCandidate from "scripts/fetch-sse/mocks/mockSSEOneCandidate";
import MockSSEUnknownError from "scripts/fetch-sse/mocks/mockSSEUnknownError";
import FormParseLinks from "./FormParseLinks";
import MockSSEManyCandidates from "scripts/fetch-sse/mocks/mockSSEManyCandidates";

const meta = {
  title: "Formularies/Form Parse Links",
  component: FormParseLinks,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof FormParseLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    id: 1,
    FetchClass: MockSSEEOneCandidate,
    dispatch: () => {},
  },
};

export const MultipleCandidates: Story = {
  args: {
    id: 1,
    FetchClass: MockSSEManyCandidates,
    dispatch: () => {},
  },
};

export const UnknownError: Story = {
  args: {
    id: 1,
    FetchClass: MockSSEUnknownError,
    dispatch: () => {},
  },
};
