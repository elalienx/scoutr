// Project files
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import monthsToYears from "scripts/dates/monthsToYears";
import type Candidate from "types/Candidate";
import "./item-company.css";

interface Props {
  /** Candidare data focused on personal information */
  item: Candidate;

  /** A click event to edit missing information. */
  onClick: Function;
}

/** Shows the company details of the candidate. */
export default function ItemCompany({ item, onClick }: Props) {
  const { company_image_url, company_name, company_duration_in_months } = item;

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
        <span onClick={() => onClick("company_name")} className="title trim-text editable">
          {company_name || "---"}
        </span>
        <small
          onClick={() => onClick("company_duration_in_months")}
          className={`label trim-text ${durationHighlight} editable`}
        >
          {durationToShow}
        </small>
      </div>
    </div>
  );
}
