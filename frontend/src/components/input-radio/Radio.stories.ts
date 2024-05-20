// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import Radio from "./Radio";

const meta = {
  title: "Input fields/Radio",
  component: Radio,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    value: 1,
    name: "Maybe",
    checked: false,
  },
};

export const Active: Story = {
  args: {
    value: 2,
    name: "Yes",
    checked: true,
  },
};
