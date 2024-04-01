// Project files
import ErrorReport from "../types/ErrorReport";
import LinkedInProfile from "../types/LinkedInProfile";

export default function reportEmptyFields(url: string, profile: LinkedInProfile): ErrorReport {
  const numberOfFields = Object.keys(profile).length;
  let severity = 3; // start a danger level
  let message = "Missing ";
  let foundErrors = 0;

  for (let key in profile) {
    const value = profile[key];

    if (!value) {
      message += key + " ";
      foundErrors++;
    }
  }

  if (foundErrors == 0) {
    message = "No problems found";
    severity = 0;
  }

  if (foundErrors > 0) {
    severity = 1;
  }

  if (foundErrors == numberOfFields) {
    message = "Missing all fields";
    severity = 2;
  }

  return {
    linked_in_url: url,
    error_severity: severity,
    message: message.trim(),
  };
}
