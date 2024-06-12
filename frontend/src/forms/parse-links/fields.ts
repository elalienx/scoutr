// Project fields
import type InputField from "types/InputField";

const fields: InputField[] = [
  {
    id: "unparsed_links",
    type: "text-area",
    label: "Paste one or more LinkedIn links here",
    placeholder:
      "https://www.linkedin.com/in/eduardo-alvarez-nowak/\nhttps://www.linkedin.com/in/lanahaddad87/",
    defaultValue:
      "https://www.linkedin.com/in/fanny-gustafson-stjernborg-8bb896b5/\nhttps://www.linkedin.com/in/gustavosterlind/\nhttps://www.linkedin.com/in/linnea-edebert/\nhttps://www.linkedin.com/in/patric-holmberg-5b5621256/",
    required: true,
    description: "Only paste links and delete any other type of text.",
  },
];

export default fields;
