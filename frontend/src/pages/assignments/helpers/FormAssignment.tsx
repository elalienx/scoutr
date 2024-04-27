// Project files
import Button from "components/button/Button";
import InputText from "components/input-text/InputText";

export default function FormAssignment() {
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
          onClick={() => alert("ok")}
        />
        <Button
          label={"Dismiss"}
          primary={false}
          icon="xmark"
          onClick={closeDialog}
        />
      </div>
    </form>
  );
}
