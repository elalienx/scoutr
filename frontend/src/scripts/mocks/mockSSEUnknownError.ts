// Project file
import waitForSeconds from "scripts/waitForSeconds";
import type Candidate from "types/Candidate";
import type ReportLog from "types/ReportLog";
import ReportSeverity from "types/ReportSeverity";

type ParsedLinks = {
  candidate: Candidate | null;
  report: ReportLog;
};

export default class MockSSEUnknownError {
  // Properties
  parsedLinks: ParsedLinks[] = [
    {
      candidate: null,
      report: {
        severity: ReportSeverity.ALL_FIELDS_MISSING,
        url: "https://www.linkedin.com/in/lanahaddad87/",
        message: "Missing all fields",
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
