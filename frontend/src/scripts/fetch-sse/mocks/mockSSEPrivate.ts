// Project file
import waitForSeconds from "scripts/waitForSeconds";
import type Candidate from "types/Candidate";
import { EventSourceStatus } from "types/EventSourceStatuses";
import type ReportLog from "types/ReportLog";
import ReportSeverity from "types/ReportSeverity";

type ParsedLinks = {
  candidate: Candidate | null;
  report: ReportLog;
};

export default class MockSSEPrivate {
  // Properties
  parsedLinks: ParsedLinks[] = [
    {
      candidate: {
        id: 1,
        assignment_id: 1,
        candidate_name: "Xavier Alvarez Nowak",
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
        date_created: "2024-01-31 21:00:30.610279",
        linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
      },
      report: {
        severity: ReportSeverity.NO_ERROR,
        url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
        message: "No problems found!",
      },
    },
    {
      candidate: null,
      report: {
        url: "https://www.linkedin.com/in/ivanahmadfatoni/",
        severity: ReportSeverity.PRIVATE_PROFILE,
        message: "This profile is private",
      },
    },
    {
      candidate: {
        id: 3,
        assignment_id: 1,
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
        date_created: "2024-01-31 21:00:30.610279",
        linked_in_url: "https://www.linkedin.com/in/lanahaddad87/",
      },
      report: {
        severity: ReportSeverity.NO_ERROR,
        url: "https://www.linkedin.com/in/lanahaddad87/",
        message: "No problems found!",
      },
    },
  ];
  uri: string;

  constructor(uri: string) {
    this.uri = uri;

    this.start();
  }

  // Properties
  readyState = EventSourceStatus.CONNECTING;

  // Methods
  async start() {
    this.readyState = EventSourceStatus.OPEN;

    await waitForSeconds(0.5);
    this.onmessage({ data: JSON.stringify(this.parsedLinks[0]) });

    await waitForSeconds(0.5);
    this.onmessage({ data: JSON.stringify(this.parsedLinks[1]) });

    await waitForSeconds(0.5);
    this.onmessage({ data: JSON.stringify(this.parsedLinks[2]) });

    await waitForSeconds(0.5);
    this.readyState = EventSourceStatus.CLOSED;
    this.onerror("this should call onerror() to close connection");
  }

  onmessage(data: any) {
    return data;
  }

  onerror(message: string) {
    return message;
  }

  /**
   * About close:
   * This is empty on purpose as the mock does not need to close a backend server.
   * However this needs to exist to make the mock compatible with the original EventSource
   */
  close() {
    // on the real EventSource this closes the Server Side Event
  }
}
