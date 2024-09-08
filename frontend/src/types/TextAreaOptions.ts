export default interface TextAreaOptions {
  rows?: number;
  columns?: number;
  maxLength?: number;
  addNewLineAfterPaste?: boolean;
  onPaste: Function;
}
