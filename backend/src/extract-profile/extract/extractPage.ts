// Node modules
import { Page } from "playwright";

export default async function extractPage(page: Page, url: string): Promise<string> {
  // Properties
  let result = "";
  console.log("scanning url", url);

  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 10000 });
    await page.waitForSelector(".pvs-header__title");

    result = await page.content();
  } catch (error) {
    await page.screenshot({ path: "screenshots/error.png", fullPage: true });
    console.error(`Playwright: Cant' navigate to URL "${url}"`);
  }

  await page.screenshot({ path: "screenshots/debug.png", fullPage: true });
  return result;
}
