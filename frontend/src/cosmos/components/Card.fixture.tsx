// Node modules
import { BrowserRouter } from "react-router-dom";

// Project files
import Card from "components/card/Card";
import SampleImages from "cosmos/sample-images.json";

// Properties
const id = 1;
const date = "2024-04-15";
const assignment = "Data Engineer";
const company = "Folksam";

/**
 * About BrowserRouter
 * We wrap Card in BrowserRouter because it has a Link component that requires it.
 */
export default {
  Default: (
    <BrowserRouter>
      <Card
        id={id}
        date_created={date}
        assignment_name={assignment}
        company_name={company}
        company_image_url={SampleImages.company_foklsam}
      />
    </BrowserRouter>
  ),
  "No image": (
    <BrowserRouter>
      <Card
        id={id}
        date_created={date}
        assignment_name={assignment}
        company_name={company}
        company_image_url={""}
      />
    </BrowserRouter>
  ),
};
