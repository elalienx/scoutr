// Node modules
import { firefox as navigator } from "playwright";

// Project files
import onLogin from "./helpers/onLogin";
import onVerification from "./helpers/onVerification";
import saveAuth from "./helpers/storeAuth";

async function getAuth(url: string): Promise<void> {
  console.info(`
    Welcome to the LinkedIn Authenticator.

    To access all profile data, please log in with your LinkedIn account. 
    Follow the instructions that will appear shortly.
  `);

  const browser = await navigator.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    await page.goto(url);
    await onLogin(page);
    await page.waitForSelector("footer");

    const isVerification = await page.$("#input__email_verification_pin");
    const isProfile = await page.$("p.identity-headline");

    if (isVerification) {
      await onVerification(page);
      await saveAuth(page, "verification");
    } else if (isProfile) {
      await saveAuth(page, "profile");
    } else {
      throw new Error("Unexpected auth page appeared");
    }
  } catch (error) {
    await page.screenshot({ path: "screenshots/auth.png" });
    console.error(`Playwright: Couldn't obtain auth from ${url} it redicted to ${page.url()}`);
    console.error(error);
  } finally {
    await browser.close();
  }
}

getAuth("https://www.linkedin.com/login");
