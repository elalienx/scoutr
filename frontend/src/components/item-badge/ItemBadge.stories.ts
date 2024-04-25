// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import ItemBadge from "./ItemBadge";

const meta = {
  title: "Components/Item Badge",
  component: ItemBadge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof ItemBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const SingleLine: Story = {
  args: {
    color: "red",
    value: 1,
    title: "Too junior",
  },
};

export const DoubleLine: Story = {
  args: {
    color: "cyan",
    value: 2,
    title: "Scheduled",
    subtitle: "APR 12",
  },
};
