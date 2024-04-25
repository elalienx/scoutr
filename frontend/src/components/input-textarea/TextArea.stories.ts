// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import TextArea from "./TextArea";

const meta = {
  title: "Form controls/Text area",
  component: TextArea,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    label: "Links",
    placeholder: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
    required: true,
    defaultValue:
      "https://www.linkedin.com/in/susanna-vaara-0b33b03a/\nhttps://www.linkedin.com/in/farzad-golchin-1926461b/",
  },
};

export const Empty: Story = {
  args: {
    label: "Links",
    placeholder: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
    required: true,
    defaultValue: "",
  },
};
