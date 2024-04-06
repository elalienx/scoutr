// Node modules
import { webkit } from "playwright";

export default async function getPage(url: string): Promise<string> {
  const browser = await webkit.launch();
  const page = await browser.newPage();
  let result = "";

  try {
    await page.goto(url);
    await page.waitForSelector("h1");

    result = await page.content();
  } catch (error) {
    console.error(`Playwright: Cannot navigate to invalid URL "${url}"`);
  } finally {
    await browser.close();
    return result;
  }
}
