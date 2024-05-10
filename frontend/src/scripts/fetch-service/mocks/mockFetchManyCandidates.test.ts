// Node modules
import { expect, test } from "vitest";

// Project files
import mockFetchManyCandidates from "./mockFetchManyCandidates";
import packageData from "scripts/forms/packageData";
import gatherFormData from "scripts/forms/gatherFormData";
import textAreaToArray from "scripts/forms/textAreaToArray";

test("Show error if form data is not valid", () => {
  // Arrange
  // Mock the form HTML Form
  document.body.innerHTML = `
    <form id="test-form">
      <textarea name="unparsed_links">
        https://www.linkedin.com/in/eduardo-alvarez-nowak/https://www.linkedin.com/in/susanna-vaara-0b33b03a/
        https://www.linkedin.com/in/lanahaddad87/
      </textarea>
    </form>
    `; // Wrong URL on purpose (Susanna's link is combined Eduardo's link on purpose)
  const uri = "/api/parse_links/1";
  const form = document.getElementById("test-form") as HTMLFormElement;
  const formData = gatherFormData(form);
  const parsedLinks = textAreaToArray(formData.unparsed_links);
  const body = { links: parsedLinks };
  const options = packageData("POST", body);
  const result = "Data send to the server is invalid. Check for typos or update the test if the endpoint changed.";

  // Act
  const test = mockFetchManyCandidates(uri, options);

  // Assert
  expect(test).rejects.toThrowError(result);
});

test("Returns a many valid candidates with ID's if everything is correct", async () => {
  // Arrange
  // Mock the form HTML Form
  document.body.innerHTML = `
    <form id="test-form">
      <textarea name="unparsed_links">
        https://www.linkedin.com/in/eduardo-alvarez-nowak/,
        https://www.linkedin.com/in/susanna-vaara-0b33b03a/
        https://www.linkedin.com/in/lanahaddad87/
      </textarea>
    </form>
    `; // notice that the first candidate is separated by comma and the second with a new line, both are valid
  const uri = "/api/parse_links/1";
  const form = document.getElementById("test-form") as HTMLFormElement;
  const formData = gatherFormData(form);
  const parsedLinks = textAreaToArray(formData.unparsed_links);
  const body = { links: parsedLinks };
  const options = packageData("POST", body);
  const resultName1 = "Eduardo Alvarez Nowak";
  const resultURL1 = "https://www.linkedin.com/in/eduardo-alvarez-nowak/";
  const resultName2 = "Sussana Vara";
  const resultURL2 = "https://www.linkedin.com/in/susanna-vaara-0b33b03a/";
  const resultName3 = "Lana Haddad";
  const resultURL3 = "https://www.linkedin.com/in/lanahaddad87/";

  // Act
  const test = await mockFetchManyCandidates(uri, options);
  const candidate1 = test.data[0];
  const candidate2 = test.data[1];
  const candidate3 = test.data[2];

  // Assert
  // Eduardo's profile
  expect(candidate1.candidate_name).toBe(resultName1);
  expect(candidate1.linked_in_url).toBe(resultURL1);
  // Sussanas's profile
  expect(candidate2.candidate_name).toBe(resultName2);
  expect(candidate2.linked_in_url).toBe(resultURL2);
  // Lana's profile
  expect(candidate3.candidate_name).toBe(resultName3);
  expect(candidate3.linked_in_url).toBe(resultURL3);
});
