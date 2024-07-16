// Node modules
import { expect, test } from "vitest";

// Project files
import removeQueryFromURL from "./removeQueryFromURL";

test("Passing an empty string does not crash", () => {
  // Arrange
  const value = "";
  const result = "";

  // Act
  const test = removeQueryFromURL(value);

  // Assert
  expect(test).toBe(result);
});

test("Passing a URL withouth queries return the URL withouth alterations", () => {
  // Arrange
  const value = "http://www.eduardo.com/";
  const result = "http://www.eduardo.com/";

  // Act
  const test = removeQueryFromURL(value);

  // Assert
  expect(test).toBe(result);
});

test("Passing a URL with 1 query, removes it", () => {
  // Arrange
  const value = "http://www.eduardo.com/?page=123";
  const result = "http://www.eduardo.com/";

  // Act
  const test = removeQueryFromURL(value);

  // Assert
  expect(test).toBe(result);
});

test("Passing a URL with multiple queries, removes them", () => {
  // Arrange
  const value = "http://www.eduardo.com/?page=123&limit=10";
  const result = "http://www.eduardo.com/";

  // Act
  const test = removeQueryFromURL(value);

  // Assert
  expect(test).toBe(result);
});

test("Passing a linkedin url taken from the news feed, returns the profile url", () => {
  // Arrange
  const valueA =
    "https://www.linkedin.com/in/marioromero/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BYpXwcGm5RBqQSkV5%2F3NZ1g%3D%3D";
  const resultA = "https://www.linkedin.com/in/marioromero/";
  const valueB =
    "https://www.linkedin.com/in/helenanovikova?miniProfileUrn=urn%3Ali%3Afsd_profile%3AACoAAC2z2N8B-i_ybJBhyGJoZz71O_VQ8g2Zb9o&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BYpXwcGm5RBqQSkV5%2F3NZ1g%3D%3D";
  const resultB = "https://www.linkedin.com/in/helenanovikova";

  // Act
  const testA = removeQueryFromURL(valueA);
  const testB = removeQueryFromURL(valueB);

  // Assert
  expect(testA).toBe(resultA);
  expect(testB).toBe(resultB);
});

test("Passing a linkedin url taken from the search page, returns the profile url", () => {
  // Arrange
  const valueA =
    "https://www.linkedin.com/in/amalia-berglof?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABySbWkBUfJ6woWdZYdJDepdst8QaPfUIKE&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Be3ZPsWpgQ9ijsiNaABU7lw%3D%3D";
  const resultA = "https://www.linkedin.com/in/amalia-berglof";
  const valueB =
    "https://www.linkedin.com/in/amalia-thore-93365663?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAA1xurcBBpze_Si7udo4w6srek5FE2GYjAs&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Be3ZPsWpgQ9ijsiNaABU7lw%3D%3D";
  const resultB = "https://www.linkedin.com/in/amalia-thore-93365663";

  // Act
  const testA = removeQueryFromURL(valueA);
  const testB = removeQueryFromURL(valueB);

  // Assert
  expect(testA).toBe(resultA);
  expect(testB).toBe(resultB);
});
