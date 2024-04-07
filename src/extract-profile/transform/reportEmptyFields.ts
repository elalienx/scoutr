// Project files
import ErrorReport from "../../types/ErrorReport";
import LinkedInProfile from "../../types/LinkedInProfile";

export default function reportEmptyFields(url: string, profile: LinkedInProfile): ErrorReport {
  const fields = Object.entries(profile);
  const missingFields: string[] = [];
  let severity = 0;
  let message = "No problems found";

  for (let [key, value] of fields) {
    if (!value) missingFields.push(" " + key);
  }

  if (missingFields.length > 0) {
    message = "Missing" + missingFields;
    severity = 1;
  }

  if (missingFields.length == fields.length) {
    message = "Missing all fields";
    severity = 2;
  }

  return {
    linked_in_url: url,
    severity,
    message,
  };
}
