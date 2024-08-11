// Project files
import LinkedInProfile from "types/LinkedInProfile";
import ReportLog from "types/ReportLog";

export default function checkEmptyFields(url: string, profile: LinkedInProfile): ReportLog {
  const fields = Object.entries(profile);
  const missingFields = fields.filter(([_, value]) => !value);
  const labels = missingFields.map(([key]) => " " + key); // check if we keep it as an array and then stringify...
  let severity = 0;
  let message = "No problems found";

  if (missingFields.length > 0) {
    message = "Missing" + labels;
    severity = 1;
  }

  if (missingFields.length === fields.length) {
    message = "Missing all fields";
    severity = 2;
  }

  return {
    url,
    severity,
    message,
  };
}
