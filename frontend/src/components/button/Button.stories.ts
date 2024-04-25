// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: { layout: "centered" },
  args: { size: "small" },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Primary: Story = {
  args: {
    label: "Click me",
    primary: true,
    icon: "plus",
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: "Click me",
    icon: "plus",
  },
};

export const PrimaryBig: Story = {
  args: {
    label: "Click me",
    primary: true,
    size: "big",
    icon: "plus",
  },
};

export const SecondaryBig: Story = {
  args: {
    label: "Click me",
    primary: false,
    icon: "plus",
    size: "big",
  },
};
