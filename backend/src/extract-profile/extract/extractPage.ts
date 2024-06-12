// Node modules
import { chromium } from "playwright-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

export default async function extractPage(url: string): Promise<string> {
  let result: string = "";

  // activate stealth
  chromium.use(StealthPlugin());

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle" });

  result = await page.content();

  await browser.close();
  return result;
}
