// Node modules
import { firefox as navigator } from "playwright";

// Project files
import onLogin from "./helpers/onLogin";
import onVerification from "./helpers/onVerification";
import saveAuth from "./helpers/storeAuth";

async function getAuth(url: string): Promise<void> {
  // Extract
  const browser = await navigator.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    await page.goto(url);
    await onLogin(page);
    await page.waitForSelector("footer");

    const isProfilePage = page.locator("p.identity-headline");
    const isVerificationPage = page.locator("#input__email_verification_pin");

    if (isProfilePage) {
      console.log("isProfilPate");
      await saveAuth(page);
    } else if (isVerificationPage) {
      console.log("isVerificationPage");
      await onVerification(page);
      await saveAuth(page);
    } else {
      throw new Error("Another authentification page appeared");
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
