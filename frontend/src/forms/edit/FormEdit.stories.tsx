// Node modules
import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

// Project files
import FormEdit from "./FormEdit";
import mockFetchError from "scripts/fetch-service/mocks/mockFetchError";
import CandidatesReducer from "state/CandidatesReducer";

const meta = {
  title: "Components/Formulary (Edit)",
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
export const Error: Story = {
  args: {
    id: 1,
    uri: "",
    fetchScript: mockFetchError,
    dispatcher: CandidatesReducer,
    fields: [
      {
        id: "name",
        type: "input-text",
        label: "Name",
        placeholder: "Eduardo",
        defaultValue: "Xavier",
      },
    ],
  },
};
