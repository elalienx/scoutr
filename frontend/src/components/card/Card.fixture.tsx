// Project files
import ImageURLs from "stories/image_urls.json";
import Card from "./Card";

// Properties
const id = 1;
const date = "2024-04-15";
const assignment = "Data Engineer";
const company = "Folksam";

export default {
  Default: (
    <Card
      id={id}
      date_created={date}
      assignment_name={assignment}
      company_name={company}
      company_image_url={ImageURLs.company_folksam}
    />
  ),
  Empty: (
    <Card
      id={id}
      date_created={date}
      assignment_name={assignment}
      company_name={company}
      company_image_url={""}
    />
  ),
};
