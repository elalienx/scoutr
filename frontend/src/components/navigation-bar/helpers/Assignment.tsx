// Project files
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";

interface Props {
  /** The name of the current assignment. */
  assignment_name: string;

  /** The company logo. */
  company_image_url: string;
}

export default function Assignment(item: Props) {
  const { assignment_name, company_image_url } = item;

  return (
    <div className="assignment">
      <ImageThumbnail
        className="logo"
        src={company_image_url}
        alt="Logo of the company giving the assigment"
      />
      <h1 className="title trim-text">{assignment_name}</h1>
    </div>
  );
}
