// Node modules
import { FormEvent, useRef } from "react";

// Project files
import Button from "components/button/Button";
import InputText from "components/input-text/InputText";
import useDialog from "state/DialogContextAPI";
import useFetch from "hooks/useFetch";
import "./form-assignment.css";

export default function FormAssignment() {
  // Global state
  const { setDialog, dialogRef } = useDialog();

  // Local state
  const AssignmentNameRef = useRef<HTMLInputElement>(null);
  const CompanyRef = useRef<HTMLInputElement>(null);

  // Properties
  const data = {
    assignment: {
      label: "Assignment name",
      placeholder: "Graphic Designer",
      defaultValue: "",
      required: true,
      reference: AssignmentNameRef,
    },
    company: {
      label: "Company",
      placeholder: "Spotify",
      defaultValue: "",
      required: true,
      reference: CompanyRef,
    },
  };

  // Methods
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const assignment_name = AssignmentNameRef.current?.value;
    const company_name = CompanyRef.current?.value;
    const company_image_url = ""; // because the database needs it.
    const data = { assignment_name, company_name, company_image_url };

    console.log(`Submitting ${assignment_name} for ${company_name}.`);
    await fetch("/api/assignments", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    });
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
      <InputText {...data.assignment} />
      <InputText {...data.company} />
      <div className="buttons">
        <Button label={"Create"} primary={true} icon="circle-check" />
        <Button label={"Dismiss"} onClick={onClose} />
      </div>
    </form>
  );
}
