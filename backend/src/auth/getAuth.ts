// Node modules
import { firefox as navigator } from "playwright";

// Project files
import onLogin from "./helpers/onLogin";
import onVerification from "./helpers/onVerification";
import saveAuth from "./helpers/storeAuth";

async function getAuth(): Promise<void> {
  // Extract
  const browser = await navigator.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const profilePageId = "identity-headline";
  const verificationPageId = "#input__email_verification_pin";

  await page.goto("https://www.linkedin.com/login");

  try {
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
    console.error("Playwright: Could not obtain auth");
  } finally {
    await browser.close();
  }
}

getAuth();
