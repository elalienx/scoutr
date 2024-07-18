// Node modules
import { expect, test } from "vitest";

// Project files
import removeQueryFromURL from "./removeQueryFromURL";

test("Passing a linkedin url taken from the news feed, returns the profile url", () => {
  // Arrange
  /** Important note: URL's with the query "?miniProfileUrn" return without "/" at the end. This is ok and works fine. */
  const values = {
    a: "https://www.linkedin.com/in/marioromero/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BYpXwcGm5RBqQSkV5%2F3NZ1g%3D%3D",
    b: "https://www.linkedin.com/in/helenanovikova?miniProfileUrn=urn%3Ali%3Afsd_profile%3AACoAAC2z2N8B-i_ybJBhyGJoZz71O_VQ8g2Zb9o&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BYpXwcGm5RBqQSkV5%2F3NZ1g%3D%3D",
    c: "https://www.linkedin.com/in/fernandolopeze?miniProfileUrn=urn%3Ali%3Afsd_profile%3AACoAAASFmskBcRqvmrYe_ph6CnZn1z1qkBGLcoY&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BIl0m9mPbRgqv6geKTb%2Bi%2Bw%3D%3D",
  };
  const resultA = "https://www.linkedin.com/in/marioromero/";
  const resultB = "https://www.linkedin.com/in/helenanovikova";
  const resultC = "https://www.linkedin.com/in/fernandolopeze";

  // Act
  const testA = removeQueryFromURL(values.a);
  const testB = removeQueryFromURL(values.b);
  const testC = removeQueryFromURL(values.c);

  // Assert
  expect(testA).toBe(resultA);
  expect(testB).toBe(resultB);
  expect(testC).toBe(resultC);
});

test("Passing a linkedin url taken from the search page, returns the profile url", () => {
  // Arrange
  /** Important note: URL's with the query "?miniProfileUrn" return without "/" at the end. This is ok and works fine. */
  const values = {
    a: "https://www.linkedin.com/in/amalia-berglof?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABySbWkBUfJ6woWdZYdJDepdst8QaPfUIKE&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Be3ZPsWpgQ9ijsiNaABU7lw%3D%3D",
    b: "https://www.linkedin.com/in/amalia-thore-93365663?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAA1xurcBBpze_Si7udo4w6srek5FE2GYjAs&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Be3ZPsWpgQ9ijsiNaABU7lw%3D%3D",
  };
  const resultA = "https://www.linkedin.com/in/amalia-berglof";
  const resultB = "https://www.linkedin.com/in/amalia-thore-93365663";

  // Act
  const testA = removeQueryFromURL(values.a);
  const testB = removeQueryFromURL(values.b);

  // Assert
  expect(testA).toBe(resultA);
  expect(testB).toBe(resultB);
});

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
