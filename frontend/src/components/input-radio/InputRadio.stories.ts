// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import InputRadio from "./InputRadio";

const meta = {
  title: "Input fields/Input Radio",
  component: InputRadio,
  parameters: { layout: "centered", controls: { exclude: ["type", "required", "placeholder"] } },
  tags: ["autodocs"],
} satisfies Meta<typeof InputRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    id: "relevance",
    type: "radio",
    label: "Relevance",
    placeholder: "",
    required: true,
    value: 3,
    description: "Higher valus means a more valuable candidate.",
    options: [
      { name: "Remove relevance", value: 0 },
      { name: "Not relevant", value: 1 },
      { name: "Too junior", value: 2 },
      { name: "Maybe", value: 3 },
      { name: "Yes", value: 4 },
      { name: "Super yes", value: 5 },
    ],
  },
};
