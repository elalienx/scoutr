// Project files
import Color from "../../../types/Color";

export function contactColors(value: number): Color {
  const colors: Color[] = ["gray", "green", "cyan", "blue", "red", "gray"];

  return colors[value];
}
export function relevanceColors(value: number): Color {
  const colors: Color[] = ["gray", "red", "orange", "yellow", "green", "blue"];

  return colors[value];
}

export function contactTitle(value: number): string {
  // prettier-ignore
  const label = ["unlabeled", "interviewed", "scheduled", "talking", "declined", "contacted"];

  return label[value];
}

export function relevancetitle(value: number): string {
  // prettier-ignore
  const label = ["unlabeled", "not relevant", "too junior", "maybe", "yes", "super yes"];

  return label[value];
}
