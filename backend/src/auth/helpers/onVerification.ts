// Node modules
import { Page } from "playwright";

// Project files
import prompt from "./prompt";

export default async function onVerification(page: Page) {
  console.info(
    `LinkedIn detected that you are probably login from a new IP address. 
    It sent you an email with a verification code. (it may arrive to the spam folder)`
  );

  // Properties
  const code = await prompt("Enter the verification code: ");

  await page.fill("#input__email_verification_pin", code);
  await page.click("#email-pin-submit-button");

  return page;
}
