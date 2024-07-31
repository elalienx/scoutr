// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import Loader from "./LoaderSuspense";

const meta = {
  title: "Components/Loader for Suspense",
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
