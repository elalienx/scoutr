/**
 * Sorts an array of objects of type T based on the specified property and order without mutating the original array.
 *
 * @param array: The array of objects to sort.
 * @param key: The property of the object to sort by.
 * @param isAscending: A boolean to determine if we sort ascending or descending.
 *
 * @returns A new sorted array.
 */
function superSorter<T extends object>(array: T[], key: keyof T, isAscending = true): T[] {
  // Properties
  const sortOrder = isAscending ? 1 : -1;
  const clonedArray = [...array];

  return clonedArray.sort((a, b) => {
    const result = a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
    return result * sortOrder;
  });
}

export default superSorter;
