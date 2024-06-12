// Node modules
import { webkit as navigator } from "playwright-extra";
import stealth from "puppeteer-extra-plugin-stealth";

export default async function extractPage(url: string): Promise<string> {
  // activate stealth
  navigator.use(stealth());

  const browser = await navigator.launch();
  const page = await browser.newPage();
  let result = "";

  try {
    await page.goto(url, { waitUntil: "networkidle" });
    await page.screenshot({ path: "stealth.png", fullPage: true });

    result = await page.content();
  } catch (error) {
    console.error(`Playwright: Cant' navigate to URL "${url}"`);
  } finally {
    await browser.close();
  }

  return result;
}
