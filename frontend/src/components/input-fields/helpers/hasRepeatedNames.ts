export default function hasRepeatedNames(names: string[]) {
  const uniqueNames = new Set();

  for (const name of names) {
    if (uniqueNames.has(name)) return true;
    uniqueNames.add(name);
  }

  return false;
}
