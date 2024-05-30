// Project files
import type Color from "types/Color";

interface coloredLabels {
  label: string;
  color: Color;
}

export const contactData: coloredLabels[] = [
  {
    label: "Unlabeled",
    color: "gray",
  },
  {
    label: "Interviewed",
    color: "green",
  },
  {
    label: "Scheduled",
    color: "cyan",
  },
  {
    label: "Talking",
    color: "blue",
  },
  {
    label: "Declined",
    color: "red",
  },
  {
    label: "Contacted",
    color: "gray",
  },
];

export const relevanceData: coloredLabels[] = [
  {
    label: "Unlabeled",
    color: "gray",
  },
  {
    label: "Not relevant",
    color: "red",
  },
  {
    label: "Too junior",
    color: "orange",
  },
  {
    label: "Maybe",
    color: "yellow",
  },
  {
    label: "Yes",
    color: "green",
  },
  {
    label: "Super yes",
    color: "blue",
  },
];
