// Node modules
import { chromium as navigator } from "playwright-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

export default async function extractPage(url: string): Promise<string> {
  // activate stealth
  navigator.use(StealthPlugin());

  const browser = await navigator.launch({ headless: true });
  const page = await browser.newPage();
  let result = "";

  try {
    await page.goto(url, { waitUntil: "networkidle" });

    result = await page.content();
  } catch (error) {
    console.error(`Playwright: Cant' navigate to URL "${url}"`);
  } finally {
    await browser.close();
  }

  return result;
}
