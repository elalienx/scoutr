// Node modules
import { firefox as navigator } from "playwright";
import readline from "readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function authAdvanced(): Promise<void> {
  // Launch browser
  const browser = await navigator.launch({ headless: false }); // Use headless: false for debugging
  const context = await browser.newContext();
  const page = await context.newPage();

  // Prompt user for email and password
  const email = await prompt("Enter your email: ");
  const password = await prompt("Enter your password: ");

  // Navigate to the login page
  await page.goto("https://www.linkedin.com/login");
  await page.screenshot({ path: "screenshots/login-advanced-1A-before.png" });

  // Fill in login details and submit
  await page.fill("#username", email);
  await page.fill("#password", password);
  await page.screenshot({ path: "screenshots/login-advanced-1B-after.png" });
  await page.click("button[aria-label='Sign in']");

  // Wait for the security check prompt (this selector should match the element that asks for the code)
  await page.waitForSelector("#input__email_verification_pin");
  await page.screenshot({ path: "screenshots/login-advanced-2A-before.png" });

  // Prompt user to enter the code
  const code = await prompt("Enter the security code: ");

  // Fill in the security code
  await page.fill("#input__email_verification_pin", code);
  await page.screenshot({ path: "screenshots/login-advanced-2B-after.png" });
  await page.click("#email-pin-submit-button");

  // Save auth
  await page.screenshot({ path: "screenshots/login-advanced-3-complete.png" });
  await page.context().storageState({ path: "src/auth/loginAuth.json" });

  // Close the browser
  await browser.close();
}

async function prompt(query: string): Promise<string> {
  const line = readline.createInterface({ input, output });
  const answer = await line.question(query);
  line.close();

  return answer;
}

authAdvanced();
