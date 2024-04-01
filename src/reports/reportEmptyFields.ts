// Project files
import ErrorReport from "../types/ErrorReport";
import LinkedInProfile from "../types/LinkedInProfile";

export default function reportEmptyFields(linked_in_url: string, profile: LinkedInProfile): ErrorReport {
  const fields = Object.entries(profile);
  const missingFields: string[] = [];
  let error_severity = 0;
  let error_message = "No problems found";

  for (let [key, value] of fields) {
    if (!value) missingFields.push(" " + key);
  }

  if (missingFields.length > 0) {
    error_message = "Missing" + missingFields;
    error_severity = 1;
  }

  if (missingFields.length == fields.length) {
    error_message = "Missing all fields";
    error_severity = 2;
  }

  return {
    linked_in_url,
    error_severity,
    error_message,
  };
}
