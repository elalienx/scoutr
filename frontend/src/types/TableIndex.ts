/**
 * Because we cannot promise the database will give sequential id's to candidates, when users are adding and deleting candidates on multiple projects,
 * This table will generate a table index to display that will keep the index instact, even if you sort the table.
 *
 * Key "candidate_id": The original candidate id to use as a lookup function.
 * Value: The order that it was added to the table when created.
 */
export default interface TableIndex {
  [candidate_id: number]: number;
}
