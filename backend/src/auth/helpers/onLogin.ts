// Node modules
import { Page } from "playwright";

// Project files
import prompt from "./prompt";

export default async function onLogin(page: Page) {
  // Properties
  const email = await prompt("Email: ");
  const password = await prompt("Password: ");

  await page.fill("#username", email);
  await page.fill("#password", password);
  await page.screenshot({ path: "screenshots/login-advanced-1.png" });
  await page.click("button[aria-label='Sign in']");

  return page;
}
