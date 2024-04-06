# Schema

## Summary

| Table          | Description                                                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 💼 Assignments | Stores information about each assignment as a separate project, with individual records for each assignment's candidates.      |
| 👨🏻 Candidates  | Stores details of all candidates, with the foreign key `assignment_id` linking each candidate to its corresponding assignment. |
| 📈 Error logs  | Records encountered errors during candidate parsing processes.                                                                 |

**⚠️ Note:**

Candidates may be stored in multiple assignments, as it is common practice to present them to multiple companies. Each one with different notes, rating and contact depending on the client.

## 💼 Assignments

| Key                  | Type   | Description                                        |
| -------------------- | ------ | -------------------------------------------------- |
| id                   | number | Unique identifier for each assignment.             |
| date_created         | date   | Date when the assignment was created.              |
| 💼 assignment_name   | string | The name of the assignment or role to fulfill.     |
| 🏢 company_name      | string | The name of the company hiring for the assignment. |
| 🏢 company_image_url | string | The URL of the company's logo.                     |

**Legend:**

- 💼 Related to assignments.
- 🏢 Related to the company hiring for the assignment.

## 👨🏻 Candidates

| Key                           | Type   | Description                                                                                                               |
| ----------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------- |
| id                            | number | Unique identifier for each candidate.                                                                                     |
| assignment_id 🔑💼            | number | Foreign key linking candidates to assignments.                                                                            |
| date_created                  | date   | Date when the candidate profile was added to the database.                                                                |
| linked_in_url                 | string | URL of the candidate's LinkedIn profile.                                                                                  |
| 👨🏻 candidate_name             | string | Full name of the candidate.                                                                                               |
| 👨🏻 candidate_job_title        | string | Job title of the candidate.                                                                                               |
| 👨🏻 candidate_image_url        | string | URL of the candidate's profile picture.                                                                                   |
| 🏢 company_name               | string | The name of the company the candidate is currently working.                                                               |
| 🏢 company_duration_in_months | number | Duration the candidate has been working at the current company, in months.                                                |
| 🏢 company_image_url          | string | URL of the company's logo.                                                                                                |
| notes                         | string | Any additional notes about the candidate added by the recruiter.                                                          |
| relevance                     | number | Rating from 1 to 5 indicating the candidate's relevance to the assignment, with higher values being more relevant.        |
| contact_status                | number | Rating from 1 to 6 indicating the status of contact with the candidate, with lower values indicating more recent contact. |
| contact_date                  | date   | Date of the most recent contact with the candidate.                                                                       |

**Contact date example**:

If the candidate was added on Jan 1 and the first contact was on Jan 15, the `date_created` would remain Jan 1 and the `contact_date` would be updated to Jan 15. Subsequent contacts, such as the next day, would be recorded as `contact_date` Jan 16.

**Legend:**

- 🔑: Foregin key.
- 💼 Related to assignments.
- 🏢 Related to the company where the candidate is currently employed.
- 👨🏻 Related to the candidate's personal information.

## 📈 Error logs

| Key           | Type   | Description                                                                                                             |
| ------------- | ------ | ----------------------------------------------------------------------------------------------------------------------- |
| id            | number | Unique identifier for each error log entry.                                                                             |
| date_created  | date   | Date and time when the error log was generated.                                                                         |
| linked_in_url | string | URL of the LinkedIn profile that triggered the error, facilitating later analysis.                                      |
| severity      | number | Severity level indicating the impact of the error: 1 Missing fields, 2 All fields missing but no crash, 3 System crash. |
| message       | string | Detailed error message provided by the subsystem that encountered the error.                                            |

## ⚠️ Notes

- Add a toggle switch that changes from simplified JavaScript types and real Postgress types.
