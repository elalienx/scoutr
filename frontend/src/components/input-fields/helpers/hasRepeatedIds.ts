export default function hasRepeatedIds(ids: string[]) {
  const uniqueIds = new Set();

  for (const id of ids) {
    if (uniqueIds.has(id)) return true;
    uniqueIds.add(id);
  }

  return false;
}
