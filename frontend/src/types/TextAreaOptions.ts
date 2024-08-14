export default interface TextAreaOptions {
  rows?: number;
  columns?: number;
  maxLength?: number;
  onPaste: Function;
  addNewLineAfterPaste?: boolean;
}
