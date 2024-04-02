// Project files
import CandidateRow from "../../types/CandidateRow";
import LinkedInProfile from "../../types/LinkedInProfile";

interface missingKeys {
  url: string;
  assignment_id: number;
}

export default function profileToCandidate(profile: LinkedInProfile, missingKeys: missingKeys): any[] {
  const profileAsArray: CandidateRow = [
    missingKeys.assignment_id,
    missingKeys.url,
    profile.candidate_name,
    profile.candidate_job_title,
    profile.candidate_image_url,
    profile.company_name,
    profile.company_duration_in_months,
    profile.company_image_url,
  ];

  return profileAsArray;
}
