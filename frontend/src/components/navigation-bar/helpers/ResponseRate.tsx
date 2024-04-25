interface Props {
  /** How many candidates have responded to us after initial contact? A value of -1 indicates we haven't started to contact anyone yet. */
  response_rate: number;
}

export default function ResponseRate(item: Props) {
  const { response_rate } = item;

  return (
    <div className="response-rate">
      <span className="value">{response_rate}</span>
      <span className="symbol">%</span>
      <small className="label">Response rate</small>
    </div>
  );
}
