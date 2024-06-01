// Node modules
import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

// Project files
import FormEdit from "./FormEdit";
import mockFetchError from "scripts/fetch-service/mocks/mockFetchError";
import mockFetchEditCandidat from "scripts/fetch-service/mocks/mockFetchEditCandidate";

const meta = {
  title: "Formularies/Edit",
  component: FormEdit,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof FormEdit>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    id: 1,
    uri: "/api/candidates/",
    fetchScript: mockFetchEditCandidat,
    dispatcher: () => {},
    fields: [
      {
        id: "candidate_name",
        type: "input-text",
        label: "Full Name",
        placeholder: "Jhon Doe",
        defaultValue: "Eduardo Alvarez",
      },
      {
        id: "candidate_job_title",
        type: "input-text",
        label: "Job title",
        placeholder: "Developer",
        defaultValue: "Graphic Designer",
      },
    ],
  },
};

export const Error: Story = {
  args: {
    id: 1,
    uri: "",
    fetchScript: mockFetchError,
    dispatcher: () => {},
    fields: [
      {
        id: "candidate_name",
        type: "input-text",
        label: "Full Name",
        placeholder: "Jhon Doe",
        defaultValue: "Eduardo Alvarez",
      },
      {
        id: "candidate_job_title",
        type: "input-text",
        label: "Job title",
        placeholder: "Developer",
        defaultValue: "Graphic Designer",
      },
    ],
  },
};
