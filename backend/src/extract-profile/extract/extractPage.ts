// Node modules
import { webkit as navigator } from "playwright";

export default async function extractPage(url: string): Promise<string> {
  const browser = await navigator.launch();
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
    return result; // Backend backlog #1: return in finally overwrites the control flow statements inside try and catch.
  }
}
