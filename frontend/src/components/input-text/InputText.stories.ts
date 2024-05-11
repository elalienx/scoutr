// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import InputText from "./InputText";

const meta = {
  title: "Input fields/Input Text",
  component: InputText,
  parameters: { layout: "centered", controls: { exclude: "type" } },
  tags: ["autodocs"],
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    id: "candidate_name",
    type: "input-text",
    label: "Name",
    placeholder: "Eduardo Alvarez",
    required: true,
    defaultValue: "Cecilia Nowak",
  },
};

export const Empty: Story = {
  args: {
    id: "candidate_name",
    type: "input-text",
    label: "Name",
    placeholder: "Eduardo Alvarez",
    required: true,
    defaultValue: "",
  },
};
