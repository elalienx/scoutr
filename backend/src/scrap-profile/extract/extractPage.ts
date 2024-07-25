// Node modules
import { Page } from "playwright";

export default async function extractPage(page: Page, url: string): Promise<string> {
  console.time("extractPage");
  // Properties
  const timoutInMilliseconds = 10_000;
  let result = "";

  try {
    await page.goto(url, { waitUntil: "domcontentloaded" });
    await page.waitForSelector(".pvs-header__title", { timeout: timoutInMilliseconds });

    result = await page.content();
  } catch (error) {
    await page.screenshot({ path: "screenshots/error.png", fullPage: true });
    throw new Error(`Playwright: Cant' navigate to URL "${url}". The auth is probably expired.`);
  } finally {
    console.log("'\x1b[32m%s\x1b[0m'", "=== FINISHED SCRAPING PAGE ===");
    page.goto("about:blank"); // to stop linkedin ad scripts eating resources
  }

  console.timeLog("extractPage");
  console.timeEnd("extractPage");
  return result;
}
