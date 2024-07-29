// Project files
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import monthsToYears from "scripts/dates/monthsToYears";
import type Candidate from "types/Candidate";
import "./item-company.css";

interface Props {
  /** Candidare data focused on business information */
  candidate: Candidate;
}

/** Shows the company details of the candidate. */
export default function ItemCompany({ candidate }: Props) {
  const { company_image_url, company_name, company_duration_in_months } = candidate;

  // Properties
  const MONTHS_IN_A_YEAR = 12;
  const months = company_duration_in_months;
  const durationInYears = monthsToYears(months);
  const durationToShow = months === 0 ? "---" : durationInYears;
  const durationLessThanAYear = months > 0 && months < MONTHS_IN_A_YEAR;
  const durationHighlight = durationLessThanAYear && "yellow";

  return (
    <div className="item-company">
      <ImageThumbnail src={company_image_url} alt="The company logo" />
      <div className="content">
        <span className="title trim-text">{company_name || "---"}</span>
        <small className={`label trim-text ${durationHighlight}`}>{durationToShow}</small>
      </div>
    </div>
  );
}
