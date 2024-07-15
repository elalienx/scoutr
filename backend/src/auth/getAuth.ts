// Node modules
import { firefox as navigator, Page } from "playwright";

// Project files
import onLogin from "./helpers/onLogin";
import onVerification from "./helpers/onVerification";
import saveAuth from "./helpers/storeAuth";

async function getAuth(): Promise<void> {
  // Extract
  const browser = await navigator.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.linkedin.com/login");

  try {
    await onLogin(page);
    await page.waitForSelector("body");

    const profilePage = await page.$("p.identity-headline"); // must say "Novare Student for novare's account. Tech lead for Eduardo Alvarez"
    const verificationPage = await page.$("#input__email_verification_pin");

    if (profilePage) {
      await saveAuth(page);
    }

    if (verificationPage) {
      await onVerification(page);
      await saveAuth(page);
    }
  } catch (error) {
    await page.screenshot({ path: "screenshots/auth-error.png", fullPage: true });
    console.error("Playwright: Could not login");
  } finally {
    await browser.close();
  }
}

getAuth();
