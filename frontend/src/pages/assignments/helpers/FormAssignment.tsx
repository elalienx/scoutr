// Project files
import Button from "components/button/Button";
import InputText from "components/input-text/InputText";
import useDialog from "state/DialogContextAPI";
import "./form-assignment.css";

export default function FormAssignment() {
  // Global state
  const { setDialog, dialogRef } = useDialog();

  // Properties
  const assignment = {
    label: "Assignment name",
    placeholder: "Graphic Designer",
    defaultValue: "",
    required: true,
  };
  const company = {
    label: "Company",
    placeholder: "Spotify",
    defaultValue: "",
    required: true,
  };

  // Methods
  function onClose() {
    setDialog(null);
    dialogRef.current.close();
  }

  return (
    <form className="form-assignment">
      <h2>
        New
        <br />
        Assignment
      </h2>
      <InputText {...assignment} />
      <InputText {...company} />
      <div className="buttons">
        <Button
          label={"Create"}
          primary={true}
          icon="circle-check"
          onClick={() => alert("createk")}
        />
        <Button
          label={"Dismiss"}
          primary={false}
          icon="xmark"
          onClick={onClose}
        />
      </div>
    </form>
  );
}
