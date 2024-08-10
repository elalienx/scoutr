interface Props {
  /** How many candidates have responded to us after initial contact? A value of -1 indicates we haven't started to contact anyone yet. */
  response_rate: number;

  /** A specific CSS class pass by the parent to alter the visiblity when the response rate is 0 */
  cssClass: string;
}

export default function ResponseRate({ response_rate, cssClass }: Props) {
  return (
    <div className={`response-rate ${cssClass}`}>
      <span className="value">{response_rate}</span>
      <span className="symbol">%</span>
      <small className="label">Response rate</small>
    </div>
  );
}
