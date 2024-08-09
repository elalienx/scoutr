// Project files
import NavigationBar from "./NavigationBar";

// Properties
const assignment = "Data Engineer";

export default {
  Default: <NavigationBar assignment_name={assignment} response_rate={37} />,
  "No responses": <NavigationBar assignment_name={assignment} response_rate={0} />,
  Empty: <NavigationBar assignment_name={assignment} response_rate={-1} />,
};
