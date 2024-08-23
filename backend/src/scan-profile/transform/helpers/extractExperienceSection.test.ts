// Node modules
import { expect, test } from "vitest";
import { load } from "cheerio";

// Project files
import extractExperienceSection from "./extractExperienceSection";

test("Should extract the experience section of a LinkedIn profile", () => {
  // Arrange
  const value = load(`
    <html>
        <body>
            <section>
                <div id="social"><!-- empty on purpose --></div>
            </section>
            <section>
                <div id="experience"><!-- empty on purpose --></div>
                <ul>
                    <li>novare</li>
                    <li>che vera</li>
                </ul>
            </section>
            <section>
                <div id="education"><!-- empty on purpose --></div>
                <ul>
                    <li>KTH</li>
                    <li>University of Guayaquil</li>
                </ul>
            </section>
        </body>
    </html>`);
  const result = `<html><head></head><body>novare</body></html>`; // Cheerio always wraps up the contents in HTML, HEAD, and BODY tags.

  // Act
  const experience = extractExperienceSection(value);
  const test = experience.html();

  // Assert
  expect(test).toBe(result);
});
