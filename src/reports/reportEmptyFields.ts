// Project files
import ErrorReport from "../types/ErrorReport";
import LinkedInProfile from "../types/LinkedInProfile";

export default function reportEmptyFields(url: string, profile: LinkedInProfile): ErrorReport {
  const numberOfFields = Object.keys(profile).length;
  let missingFields: string[] = [];
  let severity = 0;
  let message = "No problems found";
  let foundErrors = 0;

  for (let key in profile) {
    const value = profile[key];

    if (!value) {
      missingFields.push(" " + key);
      foundErrors++;
    }
  }

  if (foundErrors > 0) {
    message = "Missing" + missingFields;
    severity = 1;
  }

  if (foundErrors == numberOfFields) {
    message = "Missing all fields";
    severity = 2;
  }

  return {
    linked_in_url: url,
    error_severity: severity,
    message: message,
  };
}
