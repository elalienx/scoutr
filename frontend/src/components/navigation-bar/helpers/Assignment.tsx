// Project files

interface Props {
  /** The name of the current assignment. */
  assignment_name: string;
}

export default function Assignment(item: Props) {
  const { assignment_name } = item;

  return (
    <div className="assignment">
      <h1 className="title trim-text">{assignment_name}</h1>
    </div>
  );
}
