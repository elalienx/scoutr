// Node modules
import { Page } from "playwright";

export default async function extractPage(page: Page, url: string): Promise<string> {
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
  }

  return result;
}
