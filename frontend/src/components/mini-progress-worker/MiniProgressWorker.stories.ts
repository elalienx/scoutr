// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import MiniProgressWorker from "./MiniProgressWorker";

const meta = {
  title: "Components/Mini Progress Report",
  component: MiniProgressWorker,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof MiniProgressWorker>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const PrivateProfile: Story = {
  args: {
    url: "http://www.capcom.com",
    severity: 3,
    message: "Private profile",
  },
};

export const TemporallySuspended: Story = {
  args: {
    url: "http://www.konami.com",
    severity: 4,
    message: "Temporally suspendeda",
  },
};
