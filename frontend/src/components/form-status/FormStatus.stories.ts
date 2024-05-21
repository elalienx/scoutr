// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import FormStatus from "./FormStatus";

const meta = {
  title: "Components/Form Status",
  component: FormStatus,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof FormStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Loading: Story = {
  args: {
    status: "loading",
    message: "Creating new assignment",
  },
};

export const Success: Story = {
  args: {
    status: "ready",
    message: "New assignment created",
  },
};

export const Error: Story = {
  args: {
    status: "error",
    message: "Cannot create assignment",
  },
};

export const Hidden: Story = {
  args: {
    status: "form-stand-by",
    message: "",
  },
};
