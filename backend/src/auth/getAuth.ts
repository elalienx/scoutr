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
  const profilePageId = "p.identity-headline";
  const verificationPageId = "#input__email_verification_pin";

  try {
    await page.goto(url);
    await onLogin(page);
    await page.waitForSelector("footer");
    await page.screenshot({ path: "screenshots/auth-debug-1.png", fullPage: true });

    if (await page.$(profilePageId)) {
      console.log("Looks like is the profile page");
      await saveAuth(page);
    } else if (await page.$(verificationPageId)) {
      console.log("Looks like is the verification page");
      await onVerification(page);
      await saveAuth(page);
    } else {
      console.log("Another screen appeared, auth not created");
    }
  } catch (error) {
    await page.screenshot({ path: "screenshots/auth-error.png", fullPage: true });
    console.error(`Playwright: Couldn't obtain auth from ${url}`);
  } finally {
    await context.close();
    await browser.close();
  }
}

getAuth("https://www.linkedin.com/login");
