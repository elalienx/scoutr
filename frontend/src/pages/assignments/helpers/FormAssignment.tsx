// Node modules
import { FormEvent, useRef } from "react";

// Project files
import Button from "components/button/Button";
import InputText from "components/input-text/InputText";
import useDialog from "state/DialogContextAPI";
import "./form-assignment.css";

export default function FormAssignment() {
  // Global state
  const { setDialog, dialogRef } = useDialog();

  // Local state
  const AssignmentNameRef = useRef<HTMLInputElement>(null);
  const CompanyRef = useRef<HTMLInputElement>(null);

  // Properties
  const assignment = {
    label: "Assignment name",
    placeholder: "Graphic Designer",
    defaultValue: "",
    required: true,
    reference: AssignmentNameRef,
  };
  const company = {
    label: "Company",
    placeholder: "Spotify",
    defaultValue: "",
    required: true,
    reference: CompanyRef,
  };

  // Methods
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const assignment_name = AssignmentNameRef.current?.value;
    const company_name = CompanyRef.current?.value;

    alert(`Submitting ${assignment_name} for ${company_name}.`);
  }

  function onClose() {
    setDialog(null);
    dialogRef.current.close();
  }

  return (
    <form className="form-assignment" onSubmit={(event) => onSubmit(event)}>
      <h2>
        New
        <br />
        Assignment
      </h2>
      <InputText {...assignment} />
      <InputText {...company} />
      <div className="buttons">
        <Button label={"Create"} primary={true} icon="circle-check" />
        <Button label={"Dismiss"} onClick={onClose} />
      </div>
    </form>
  );
}
