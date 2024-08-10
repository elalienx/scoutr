// Project files
import FormEdit from "forms/edit/FormEdit";
import type InputField from "types/InputField";
import mockFetchEditCandidate from "scripts/fetch-service/mocks/mockFetchEditCandidate";
import mockFetchError from "scripts/fetch-service/mocks/mockFetchError";

const defaultFields: InputField[] = [
  {
    id: "candidate_name",
    type: "input-text",
    label: "Full Name",
    placeholder: "Jhon Doe",
    defaultValue: "Eduardo Alvarez",
  },
  {
    id: "candidate_job_title",
    type: "input-text",
    label: "Job title",
    placeholder: "Developer",
    defaultValue: "Graphic Designer",
  },
];

const errorFields: InputField[] = [
  {
    id: "candidate_name",
    type: "input-text",
    label: "Full Name",
    placeholder: "Jhon Doe",
    defaultValue: "Eduardo Alvarez",
  },
  {
    id: "candidate_job_title",
    type: "input-text",
    label: "Job title",
    placeholder: "Developer",
    defaultValue: "Graphic Designer",
  },
];

export default {
  Default: (
    <FormEdit
      id={1}
      uri="/api/candidates/"
      fetchScript={mockFetchEditCandidate}
      dispatcher={() => {}}
      fields={defaultFields}
    />
  ),
  Error: (
    <FormEdit
      id={1}
      uri="/api/candidates/"
      fetchScript={mockFetchError}
      dispatcher={() => {}}
      fields={errorFields}
    />
  ),
};
