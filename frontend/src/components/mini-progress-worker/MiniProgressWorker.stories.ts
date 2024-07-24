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
export const Default: Story = {
  args: {
    reports: [
      {
        url: "http://www.nintendo.com",
        severity: ReportSeverity.NO_ERROR,
        message: "Private profile",
      },
    ],
  },
};

export const ManyCandidates: Story = {
  args: {
    reports: [
      {
        url: "http://www.nintendo.com",
        severity: ReportSeverity.NO_ERROR,
        message: "No errors",
      },
      {
        url: "http://www.sega.com",
        severity: ReportSeverity.NO_ERROR,
        message: "Missing: common sense to skip the 32x",
      },
      {
        url: "http://www.sony.com",
        severity: ReportSeverity.NO_ERROR,
        message: "No errors",
      },
    ],
  },
};

export const PrivateProfile: Story = {
  args: {
    reports: [
      {
        url: "http://www.capcom.com",
        severity: ReportSeverity.PRIVATE_PROFILE,
        message: "Private profile",
      },
    ],
  },
};

export const TemporallySuspended: Story = {
  args: {
    reports: [
      {
        url: "http://www.konami.com",
        severity: ReportSeverity.TEMPORAL_BAN,
        message: "Temporally suspendeda",
      },
    ],
  },
};

export const UnknownError: Story = {
  args: {
    reports: [
      {
        url: "http://www.namco.com",
        severity: ReportSeverity.ALL_FIELDS_MISSING,
        message: "Missing all fields",
      },
    ],
  },
};

export const OnErrorOfEachKind: Story = {
  args: {
    reports: [
      {
        url: "http://www.nintendo.com",
        severity: ReportSeverity.NO_ERROR,
        message: "No errors",
      },
      {
        url: "http://www.capcom.com",
        severity: ReportSeverity.PRIVATE_PROFILE,
        message: "Private profile",
      },
      {
        url: "http://www.konami.com",
        severity: ReportSeverity.TEMPORAL_BAN,
        message: "Temporally suspendeda",
      },
      {
        url: "http://www.namco.com",
        severity: ReportSeverity.ALL_FIELDS_MISSING,
        message: "Missing all fields",
      },
    ],
  },
};
