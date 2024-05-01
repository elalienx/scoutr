// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import InputText from "./InputText";

const meta = {
  title: "Input fields/Input Text",
  component: InputText,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    label: "Name",
    placeholder: "Eduardo Alvarez",
    required: true,
    defaultValue: "Cecilia Nowak",
    name: "candidate_name",
  },
};

export const Empty: Story = {
  args: {
    label: "Name",
    placeholder: "Eduardo Alvarez",
    required: true,
    defaultValue: "",
    name: "candidate_name",
  },
};
