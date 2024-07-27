// Node modules
import { Page } from "playwright";

export default async function saveAuth(page: Page, origin: string) {
  const fileName = "LoginAuth.json";

  console.info(`Saving auth as ${fileName} from ${origin}`);
  await page.screenshot({ path: "screenshots/auth.png", fullPage: true });
  await page.context().storageState({ path: fileName });
}
