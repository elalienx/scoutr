/**
 * An interface to ensure a sortable table has both computer names (id) and human names (label)
 */
export default interface TableHeader {
  /** The computer name of the item used in the database. */
  id: string;

  /** The human name of the item to display on the screen. */
  label: string;
}
