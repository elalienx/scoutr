// Project files
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import monthsToYears from "scripts/monthsToYears";
import "./item-company.css";

interface Props {
  /** URL of the company's logo the candidate is currently working. */
  company_image_url: string;

  /** The name of the company the candidate is currently working. */
  company_name: string;

  /** Duration the candidate has been working at the current company, in months. */
  company_duration_in_months: number;
}

/** Shows the company details of the candidate. */
export default function ItemCompany(item: Props) {
  const { company_image_url, company_name, company_duration_in_months } = item;

  // Properties
  const monthsInAYear = 12;
  const durationInyears = monthsToYears(company_duration_in_months);
  const markTextInRed = company_duration_in_months < monthsInAYear;

  return (
    <div className="item-company">
      <ImageThumbnail src={company_image_url} alt="The company logo" />
      <div className="content">
        <span className="title trim-text">{company_name}</span>
        <small className={`label trim-text ${markTextInRed && "red"}`}>
          {durationInyears}
        </small>
      </div>
    </div>
  );
}
