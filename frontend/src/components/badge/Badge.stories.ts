// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import Badge from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Red: Story = {
  args: {
    color: "red",
    value: 1,
  },
};

export const Orange: Story = {
  args: {
    color: "orange",
    value: 2,
  },
};

export const Yellow: Story = {
  args: {
    color: "yellow",
    value: 3,
  },
};

export const Green: Story = {
  args: {
    color: "green",
    value: 4,
  },
};

export const Cyan: Story = {
  args: {
    color: "cyan",
    value: 5,
  },
};

export const Blue: Story = {
  args: {
    color: "blue",
    value: 6,
  },
};

export const Purple: Story = {
  args: {
    color: "purple",
    value: 7,
  },
};

export const Gray: Story = {
  args: {
    color: "gray",
    value: 8,
  },
};
