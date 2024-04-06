## Routes

| Folder      | Method | Route                         | Description                                                                                                    |
| ----------- | ------ | ----------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Assignments | GET    | `/assignments`                | Retrieve all assignments.                                                                                      |
| Assignments | POST   | `/assignments`                | Add a new assignment and return its ID.                                                                        |
| Candidates  | GET    | `/candidates/:assignment_id`  | Retrieve all candidates belonging to a specific assignment.                                                    |
| Candidates  | POST   | `/parse_links/:assignment_id` | Parses LinkedIn links, stores them in the database based on the assignment ID, and returns the new candidates. |
