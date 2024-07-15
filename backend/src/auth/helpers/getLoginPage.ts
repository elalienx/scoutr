import { BrowserType } from "playwright";

export default async function getLoginPage(navigator: BrowserType) {
  const browser = await navigator.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.linkedin.com/login");

  return { browser, page };
}
