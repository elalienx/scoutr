// Project file
import waitForSeconds from "scripts/waitForSeconds";
import type Candidate from "types/Candidate";
import type ReportLog from "types/ReportLog";
import ReportSeverity from "types/ReportSeverity";

type ParsedLinks = {
  candidate: Candidate | null;
  report: ReportLog;
};

export default class MockSSEEOneCandidate {
  // Properties
  parsedLinks: ParsedLinks[] = [
    {
      candidate: {
        id: 1,
        assignment_id: 1,
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
        date_created: "2024-01-31 21:00:30.610279",
        linked_in_url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
      },
      report: {
        severity: ReportSeverity.NO_ERROR,
        url: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
        message: "No problems found!",
      },
    },
  ];
  uri: string;

  constructor(uri: string) {
    this.uri = uri;

    this.start();
  }

  // Methods
  async start() {
    await waitForSeconds(0.1);
    this.onmessage({ data: JSON.stringify(this.parsedLinks[0]) });

    await waitForSeconds(0.1);
    this.onerror("this should call onerror() to close connection");
  }

  addEventListener(eventName: string, callback: Function) {
    callback();

    return eventName;
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
