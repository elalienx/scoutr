// Project files
import ErrorReport from "../../types/ErrorReport";
import LinkedInProfile from "../../types/LinkedInProfile";

export default function reportEmptyFields(url: string, profile: LinkedInProfile): ErrorReport {
  const fields = Object.entries(profile);
  const missingFields = fields.filter(([_, value]) => !value);
  const labels = missingFields.map(([key]) => " " + key);
  let severity = 0;
  let message = "No problems found";

  if (missingFields.length > 0) {
    message = "Missing" + labels;
    severity = 1;
  }

  if (missingFields.length == fields.length) {
    message = "Missing all fields";
    severity = 2;
  }

  return {
    url,
    severity,
    message,
  };
}