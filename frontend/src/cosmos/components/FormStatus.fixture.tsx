// Project files
import FormStatus from "components/form-status/FormStatus";

export default {
  Loading: <FormStatus status={"loading"} message={"Creating new assignment"} />,
  Success: <FormStatus status={"complete"} message={"New assignment created"} />,
  Error: <FormStatus status={"error"} message={"Cannot create assignment"} />,
  Hidden: <FormStatus status={"stand-by"} message={""} />,
};
