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
  const months = company_duration_in_months;
  const monthsInAYear = 12;
  const durationInyears = monthsToYears(months);
  let cssColorHighlight = "@";

  if (months === 0) cssColorHighlight = "red";
  if (months > 0 && months < monthsInAYear) cssColorHighlight = "yellow";

  return (
    <div className="item-company">
      <ImageThumbnail src={company_image_url} alt="The company logo" />
      <div className="content">
        <span onClick={() => onClick("company_name")} className="title trim-text">
          {company_name || "---"}
        </span>
        <small
          onClick={() => onClick("company_duration_in_months")}
          className={`label trim-text ${cssColorHighlight}`}
        >
          {durationInyears}
        </small>
      </div>
    </div>
  );
}
