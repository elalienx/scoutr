// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import TextArea from "./TextArea";

const meta = {
  title: "Input fields/Text area",
  component: TextArea,
  parameters: {
    layout: "centered",
    controls: { controls: { exclude: "type" } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    id: "unparsed_links",
    type: "text-area",
    label: "Links",
    placeholder: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
    required: true,
    value:
      "https://www.linkedin.com/in/susanna-vaara-0b33b03a/\nhttps://www.linkedin.com/in/farzad-golchin-1926461b/",
  },
};

export const DefaultWithDescription: Story = {
  args: {
    id: "unparsed_links",
    type: "text-area",
    label: "Links",
    placeholder: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
    required: true,
    value:
      "https://www.linkedin.com/in/susanna-vaara-0b33b03a/\nhttps://www.linkedin.com/in/farzad-golchin-1926461b/",
    description: "Only paste links and delete any other type of text.",
  },
};

export const Empty: Story = {
  args: {
    id: "unparsed_links",
    type: "text-area",
    label: "Links",
    placeholder: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
    required: true,
    value: "",
  },
};
