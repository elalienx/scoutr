// Node modules
import { webkit } from "playwright";

export default async function extractPage(url: string): Promise<string> {
  const browser = await webkit.launch();
  const page = await browser.newPage();

  try {
    await page.goto(url);
    await page.waitForSelector("h1");

    return await page.content();
  } catch (error) {
    throw new Error(error);
  } finally {
    await browser.close();
  }
}
