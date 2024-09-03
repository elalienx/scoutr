// Project files
import FormEdit from "forms/edit/FormEdit";
import mockFetchEditCandidate from "scripts/mocks/mockFetchEditCandidate";
import mockFetchError from "scripts/mocks/mockFetchError";
import type InputField from "types/InputField";

const normal: InputField[] = [
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

const error: InputField[] = [
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
      fields={normal}
    />
  ),
  Error: (
    <FormEdit
      id={1}
      uri="/api/candidates/"
      fetchScript={mockFetchError}
      dispatcher={() => {}}
      fields={error}
    />
  ),
};
