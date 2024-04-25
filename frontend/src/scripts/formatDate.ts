export default function formatDate(dateAsString: string): string {
  // safeguard
  if (!Date.parse(dateAsString)) return "";

  const date = new Date(dateAsString);
  const locale = "en-us";
  const options = { month: "short", day: "2-digit" } as const;
  const result = date.toLocaleDateString(locale, options);

  return result;
}
