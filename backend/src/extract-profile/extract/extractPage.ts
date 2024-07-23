// Node modules
import { Page } from "playwright";

export default async function extractPage(page: Page, url: string): Promise<string> {
  // Properties
  const timeout10Seconds = 10000;
  let result = "";

  try {
    await page.goto(url, { waitUntil: "domcontentloaded" });
    await page.waitForSelector(".pvs-header__title", { timeout: timeout10Seconds });

    await page.screenshot({ path: "screenshots/debug.png", fullPage: true });
    result = await page.content();
  } catch (error) {
    await page.screenshot({ path: "screenshots/error.png", fullPage: true });
    throw new Error(`Playwright: Cant' navigate to URL "${url}"`);
  }

  return result;
}
