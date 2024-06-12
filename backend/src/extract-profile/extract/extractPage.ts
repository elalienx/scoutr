// Node modules
import { webkit as navigator } from "playwright-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

export default async function extractPage(url: string): Promise<string> {
  // activate stealth
  navigator.use(StealthPlugin());

  const browser = await navigator.launch();
  const page = await browser.newPage();
  let result = "";

  try {
    console.log("Testing the stealth plugin..");
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
