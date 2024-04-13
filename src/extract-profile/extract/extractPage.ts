// Node modules
import { webkit } from "playwright";

export default async function extractPage(url: string): Promise<string> {
  const browser = await webkit.launch();
  const page = await browser.newPage();
  let result = "";

  try {
    await page.goto(url);
    await page.waitForSelector("body");

    result = await page.content();
  } catch (error) {
    console.error(`Playwright: Cant' navigate to URL "${url}"`);
  } finally {
    await browser.close();
    return result;
  }
}
