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
  const profilePageId = "identity-headline";
  const verificationPageId = "#input__email_verification_pin";

  try {
    await page.goto(url);
    await onLogin(page);

    if (page.$(profilePageId)) {
      await saveAuth(page);
    }

    if (page.$(verificationPageId)) {
      await onVerification(page);
      await saveAuth(page);
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
