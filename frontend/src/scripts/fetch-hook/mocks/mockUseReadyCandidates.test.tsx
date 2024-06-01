// Node modules
import { expect, test } from "vitest";

// Project files
import mockUseReadyCandidates from "./mockUseReadyCandidates";
import StatusPage from "types/Status";
import Candidate from "types/Candidate";

test("Expect return content if passed a valid url", () => {
  // Arrange
  const uri = "api/example/";
  const resultStatus: StatusPage = "ready";
  const resultData: Candidate[] = [
    {
      id: 1,
      candidate_name: "Eduardo Alvarez Nowak",
      candidate_job_title: "Tech Lead",
      candidate_image_url:
        "https://media.licdn.com/dms/image/C4E03AQHwKgpnjrXkZA/profile-displayphoto-shrink_400_400/0/1643017689481?e=1718841600&v=beta&t=oXzvwBCY0QRE9ZnWl5CCqyBmDZFS2c_Jk9fDpndKzf8",
      company_name: "Novare Potential",
      company_duration_in_months: 34,
      company_image_url:
        "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=1721260800&v=beta&t=ZRqH0M228v3G2tsbV5UsqqbmXstjR5_GQ69QLuw0eR8",
      notes:
        "Highly qualified, likes to help people and stays up to date with the latest frontend development tools.",
      relevance: 3,
      contact_status: 4,
      contact_date: "2024-04-02 21:00:30.610279",
      projectId: 1,
      date_created: "2024-01-31 21:00:30.610279",
      linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
    },
    {
      id: 2,
      candidate_name: "Sussana Vara",
      candidate_job_title: "Partner",
      candidate_image_url:
        "https://media.licdn.com/dms/image/D5603AQF_QPzYf-dJDg/profile-displayphoto-shrink_400_400/0/1697639168537?e=1719446400&v=beta&t=_BQWtHxKlLQYZQi1YSwkZLNaeEUsYvCtwz7Ck0Jr-NA",
      company_name: "Novare Potential",
      company_duration_in_months: 80,
      company_image_url:
        "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=1721260800&v=beta&t=ZRqH0M228v3G2tsbV5UsqqbmXstjR5_GQ69QLuw0eR8",
      notes: "A servant type of leader.",
      relevance: 4,
      contact_status: 1,
      contact_date: "2024-04-02 21:00:30.610279",
      projectId: 1,
      date_created: "2024-01-31 21:00:30.610279",
      linked_in_url: "https://www.linkedin.com/in/susanna-vaara-0b33b03a/",
    },
    {
      id: 3,
      candidate_name: "Lana Haddad",
      candidate_job_title: "Senior Talent Acquisition Specialist",
      candidate_image_url:
        "https://media.licdn.com/dms/image/C5603AQEhqKQ3aIFArw/profile-displayphoto-shrink_400_400/0/1580204916994?e=1719446400&v=beta&t=kZxSDBsc0G7Lx1HuQwemHuM7CHCvzi22VmLkd7XDvgI",
      company_name: "Novare Potential",
      company_duration_in_months: 85,
      company_image_url:
        "https://media.licdn.com/dms/image/C4E0BAQHElmOdWZ-xZA/company-logo_100_100/0/1631374829245/novare_potential_logo?e=1721260800&v=beta&t=ZRqH0M228v3G2tsbV5UsqqbmXstjR5_GQ69QLuw0eR8",
      notes:
        "More than 8 years of HR recruitment experience in multiples industries like tech, restaurants, health sector, education, white collar, blue collar, executive search, and more. Great salary negotiation skills.",
      relevance: 5,
      contact_status: 0,
      contact_date: "2024-04-02 21:00:30.610279",
      projectId: 1,
      date_created: "2024-01-31 21:00:30.610279",
      linked_in_url: "https://www.linkedin.com/in/lanahaddad87/",
    },
  ];

  // Act
  const test = mockUseReadyCandidates(uri);

  // Assert
  expect(test.status).toEqual(resultStatus);
  expect(test.data).toEqual(resultData);
});
