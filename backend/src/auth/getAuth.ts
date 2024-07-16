// Node modules
import { firefox as navigator } from "playwright";

// Project files
import onLogin from "./helpers/onLogin";
import onVerification from "./helpers/onVerification";
import saveAuth from "./helpers/storeAuth";

async function getAuth(url: string): Promise<void> {
  const browser = await navigator.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    await page.goto(url);
    await onLogin(page);
    await page.waitForSelector("footer");

    const isProfile = page.locator("p.identity-headline");
    const isVerification = page.locator("#input__email_verification_pin");

    if (isProfile) {
      await saveAuth(page, "profile");
    } else if (isVerification) {
      await onVerification(page);
      await saveAuth(page, "verification");
    } else {
      throw new Error("Unexpected auth page appeared");
    }
  } catch (error) {
    await page.screenshot({ path: "screenshots/auth-error.png", fullPage: true });
    console.error(`Playwright: Couldn't obtain auth from ${url}`);
    console.error(error);
  } finally {
    await context.close();
    await browser.close();
  }
}

getAuth("https://www.linkedin.com/login");
