// Node modules
import { firefox as navigator } from "playwright";

export default async function getAuth(email: string, password: string) {
  const browser = await navigator.launch({ headless: true });
  const page = await browser.newPage();
  console.log("getAuth email and password", email, password);

  try {
    // load page
    await page.goto("https://www.linkedin.com/login/");
    await page.waitForSelector("body");
    await page.screenshot({ path: "screenshots/login-1.png" });

    // login
    await page.locator("#username").fill(email);
    await page.locator("#password").fill(password);
    await page.click('button[aria-label="Sign in"]');
    await page.screenshot({ path: "screenshots/login-2.png" });

    // save session
    await page.context().storageState({ path: "src/auth/loginAuth.json" });
  } catch (error) {
    await page.screenshot({ path: "screenshots/login-error.png" });
    console.error("Playwright: Cant' login into Linkedin");
  } finally {
    await browser.close();
  }
}
