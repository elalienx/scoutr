// Node modules
import { firefox as navigator } from "playwright";

export default async function extractPage(url: string): Promise<string> {
  console.time("Open browser");
  const browser = await navigator.launch();
  const context = await browser.newContext({ storageState: "src/auth/loginAuth.json" });
  const page = await context.newPage();
  let result = "";
  console.timeLog("Open browser");

  try {
    console.time("Go to URL");
    await page.goto(url);
    await page.waitForSelector(".pvs-header__title");
    console.timeLog("Go to URL");

    console.time("Return page");
    result = await page.content();
    console.timeLog("Return page");
  } catch (error) {
    await page.screenshot({ path: "screenshots/error.png", fullPage: true });
    console.error(`Playwright: Cant' navigate to URL "${url}"`);
  } finally {
    console.time("Close browser");
    await context.close();
    await browser.close();
    console.timeLog("Close browser");
  }

  return result;
}
