// Node modules
import { chromium } from "playwright";

export default async function extractPage(url: string): Promise<string> {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  let result = "";

  try {
    await page.goto(url);
    await page.waitForSelector("h1");

    result = await page.content();
  } catch (error) {
    console.error(`Playwright: Cant' navigate to URL "${url}"`);
  } finally {
    await browser.close();
    return result;
  }
}
