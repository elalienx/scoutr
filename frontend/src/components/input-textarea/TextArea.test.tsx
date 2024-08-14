// Node modules
import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

// Project files
import TextArea from "./TextArea"; // Assuming this is your TextArea component

test("Correctly modifies the text passed", () => {
  // Arrange
  const pastedText = "hello";
  const result = "HELLO"; // will be converted to uppercase

  function makeUppercase(text: string): string {
    return String(text).toUpperCase();
  }

  render(
    <TextArea
      id="simple-text"
      type="text-area"
      label="Simple text"
      placeholder="Paste simple text"
      defaultValue=""
      description="Enter text"
      options={{ onPaste: makeUppercase }}
    />
  );

  // Act
  const textArea = screen.getByLabelText("simple-text");
  const clipboardData = { getData: () => pastedText };

  fireEvent.paste(textArea, {
    clipboardData,
  });

  // Assert
  expect(textArea.value).toBe(result);
});

test("Correctly modifies the text passed and adds a new line after ir", () => {
  // Arrange
  const pastedText = "with_new_line";
  const result = `WITH_NEW_LINE\n`;

  function makeUppercase(text: string): string {
    return String(text).toUpperCase();
  }

  render(
    <TextArea
      id="simple-text"
      type="text-area"
      label="Simple text"
      placeholder="Paste simple text"
      defaultValue=""
      description="Enter text"
      options={{ onPaste: makeUppercase, addNewLineAfterPaste: true }}
    />
  );

  // Act
  const textArea = screen.getByLabelText("simple-text");
  const clipboardData = { getData: () => pastedText };

  fireEvent.paste(textArea, {
    clipboardData,
  });

  // Assert
  expect(textArea.value).toBe(result);
});
