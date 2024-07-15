// Node modules
import { Page } from "playwright";

export default async function saveAuth(page: Page) {
  await page.screenshot({ path: "screenshots/auth-finish.png" });
  await page.context().storageState({ path: "src/auth/loginAuth.json" });
}
