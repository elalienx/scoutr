// Node modules
import { expect, test } from "vitest";

// Project files
import mockFetchOneCandidate from "./mockFetchOneCandidate";
import packageData from "scripts/forms/packageData";
import gatherFormData from "scripts/forms/gatherFormData";
import textAreaToArray from "scripts/forms/textAreaToArray";

test("Show error if URI is not correct", () => {
  // Arrange
  const uri = "/api/parse-links/1"; // is actually parse_links with a underscore
  const formData = {
    unparsed_links: "https://www.linkedin.com/in/eduardo-alvarez-nowak/",
  };
  const options = packageData("POST", formData);
  const result = "URI is invalid. Check for typos or update the test if the endpoint changed.";

  // Act
  const test = mockFetchOneCandidate(uri, options);

  // Assert
  expect(test).rejects.toThrowError(result);
});

test("Show error if form data is not valid", () => {
  // Arrange
  // Mock the form HTML Form
  document.body.innerHTML = `
    <form id="test-form">
      <textarea name="unparsed_links">
        https://www.instagram.com/in/eduardo-alvarez-nowak/
      </textarea>
    </form>
    `; // Wrong URL on purpose (Instagram instead of LinkedIn)
  const uri = "/api/parse_links/1";
  const form = document.getElementById("test-form") as HTMLFormElement;
  const formData = gatherFormData(form);
  const parsedLinks = textAreaToArray(formData.unparsed_links);
  const body = { links: parsedLinks };
  const options = packageData("POST", body);
  const result = "Data send to the server is invalid. Check for typos or update the test if the endpoint changed.";

  // Act
  const test = mockFetchOneCandidate(uri, options);

  // Assert
  expect(test).rejects.toThrowError(result);
});

test("Returns a one valid candidate with ID if everything is correct", async () => {
  // Arrange
  // Mock the form HTML Form
  document.body.innerHTML = `
    <form id="test-form">
      <textarea name="unparsed_links">
        https://www.linkedin.com/in/eduardo-alvarez-nowak/
      </textarea>
    </form>
    `;
  const uri = "/api/parse_links/1";
  const form = document.getElementById("test-form") as HTMLFormElement;
  const formData = gatherFormData(form);
  const parsedLinks = textAreaToArray(formData.unparsed_links);
  const body = { links: parsedLinks };
  const options = packageData("POST", body);
  const resultName = "Eduardo Alvarez Nowak";
  const resultURL = "https://www.linkedin.com/in/eduardo-alvarez-nowak/";

  // Act
  const test = await mockFetchOneCandidate(uri, options);
  const candidate1 = test.data[0];

  // Assert
  expect(candidate1.candidate_name).toBe(resultName);
  expect(candidate1.linked_in_url).toBe(resultURL);
});
