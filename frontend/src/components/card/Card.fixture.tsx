// Project files
import SampleImages from "cosmos/sample-images.json";
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
      company_image_url={SampleImages.company_foklsam}
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
