// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import Button from "./Button";
import { IconName } from "@fortawesome/fontawesome-svg-core";

// Properties
const label: string = "Click me";
const icon: IconName = "plus";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Primary: Story = {
  args: {
    icon: icon,
    label: label,
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    icon: icon,
    label: label,
    primary: false,
  },
};

export const PrimaryBig: Story = {
  args: {
    big: true,
    icon: icon,
    label: label,
    primary: true,
  },
};
