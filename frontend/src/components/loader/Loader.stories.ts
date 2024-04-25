// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import Loader from "./Loader";

const meta = {
  title: "Components/Loader",
  component: Loader,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {},
};
