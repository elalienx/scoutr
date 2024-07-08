// Node modules
import { webkit as navigator } from "playwright";

export default async function extractPage(url: string): Promise<string> {
  const browser = await navigator.launch();
  const context = await browser.newContext({ storageState: "src/auth/loginAuth.json" });
  const page = await context.newPage();
  let result = "";

  try {
    // load page
    await page.goto(url);
    await page.waitForSelector(".pvs-header__title");

    result = await page.content();
  } catch (error) {
    console.error(`Playwright: Cant' navigate to URL "${url}"`);
  } finally {
    await browser.close();
  }

  return result;
}
