// Node modules
import { webkit } from "playwright-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

export default async function extractPage(url: string): Promise<string> {
  // activate stealth
  webkit.use(StealthPlugin());

  webkit.launch({ headless: true }).then(async (browser) => {
    const page = await browser.newPage();

    console.log("Testing the stealth plugin..");
    await page.goto(url, { waitUntil: "networkidle" });
    await page.screenshot({ path: "stealth.png", fullPage: true });
    console.log("All done, check the screenshot. ✨");

    await browser.close();
    return;
  });
}
