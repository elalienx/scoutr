// Node modules
import type { Meta, StoryObj } from "@storybook/react";

// Project files
import MiniProgressWorker from "./MiniProgressWorker";
import ReportSeverity from "types/ReportSeverity";

const meta = {
  title: "Components/Mini Progress Report",
  component: MiniProgressWorker,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof MiniProgressWorker>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
const { PRIVATE_PROFILE, TEMPORAL_BAN, MISSING_ALL_FIELDS } = ReportSeverity;

export const PrivateProfile: Story = {
  args: {
    report: {
      url: "http://www.capcom.com",
      severity: PRIVATE_PROFILE,
      message: "Private profile",
    },
  },
};

export const TemporallySuspended: Story = {
  args: {
    report: {
      url: "http://www.konami.com",
      severity: TEMPORAL_BAN,
      message: "Temporally suspendeda",
    },
  },
};

export const UnknownError: Story = {
  args: {
    report: {
      url: "http://www.namco.com",
      severity: MISSING_ALL_FIELDS,
      message: "Missing all fields",
    },
  },
};
