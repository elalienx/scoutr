// Node modules
import { Page } from "playwright";

// Project files
import prompt from "./prompt";

export default async function onVerification(page: Page) {
  // Properties
  const code = await prompt("Enter the security code: ");

  await page.fill("#input__email_verification_pin", code);
  await page.screenshot({ path: "screenshots/login-advanced-2.png" });
  await page.click("#email-pin-submit-button");

  return page;
}
