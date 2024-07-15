// Node modules
import { firefox as navigator } from "playwright";

// Project files
import onLogin from "./helpers/onLogin";
import getLoginPage from "./helpers/getLoginPage";
import onVerification from "./helpers/onVerification";

async function getAuth(): Promise<void> {
  // Extract
  const { browser, page } = await getLoginPage(navigator);

  // Transform
  const loginPage = await onLogin(page);
  const verificationPage = await onVerification(loginPage);

  // Load (save)
  await verificationPage.context().storageState({ path: "src/auth/loginAuth.json" });
  await verificationPage.screenshot({ path: "screenshots/login-advanced-3.png" });
  await browser.close();
}

getAuth();
