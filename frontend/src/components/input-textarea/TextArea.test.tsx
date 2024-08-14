// Node modules
import { expect, test } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

// Project files
import TextArea from "./TextArea"; // Assuming this is your TextArea component
import onPasteLinks from "./helpers/onPasteLinks";

test("Correctly modifies the link passed", async () => {
  // Arrange
  const pastedText = `https://www.linkedin.com/in/qinyu-jia-843733180?miniProfileUrn=urn%3Ali%3Afsd_profile%3AACoAACrSn_MBinjTWSDksu-XEfhr8C0ZP48pAts&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BznRS%2Bf%2FyRgS3GWBxPDi9vA%3D%3D`;
  const result = `https://www.linkedin.com/in/qinyu-jia-843733180\n`; // because onPasteLinks always add a new line at the end

  render(
    <TextArea
      id="simple-text"
      type="text-area"
      label="Simple text"
      placeholder="Paste simple text"
      defaultValue=""
      description="Enter text"
      options={{ onPaste: onPasteLinks }}
    />
  );

  // Act
  const textArea = screen.getByLabelText("simple-text"); // Target by aria-label, which is set to the 'id' prop
  const clipboardData = { getData: () => pastedText };

  fireEvent.paste(textArea, {
    clipboardData,
  });

  // Assert
  await waitFor(() => {
    expect(textArea.value).toBe(result);
  });
});

test("Does not break if the link is invalid, it just pasted it as it is", async () => {
  // Arrange
  const pastedText = `.com/in/qinyu-jia-843733180?miniProfileUrn=urn%3Ali%3Afsd_%3D%3D`; // bad text on purpose
  const result = `.com/in/qinyu-jia-843733180?miniProfileUrn=urn%3Ali%3Afsd_%3D%3D\n`; // because onPasteLinks always add a new line at the end

  render(
    <TextArea
      id="simple-text"
      type="text-area"
      label="Simple text"
      placeholder="Paste simple text"
      defaultValue=""
      description="Enter text"
      options={{ onPaste: onPasteLinks }}
    />
  );

  // Act
  const textArea = screen.getByLabelText("simple-text"); // Target by aria-label, which is set to the 'id' prop
  const clipboardData = { getData: () => pastedText };

  fireEvent.paste(textArea, {
    clipboardData,
  });

  // Assert
  await waitFor(() => {
    expect(textArea.value).toBe(result);
  });
});
