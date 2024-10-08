// Node modules
import { Page } from "playwright";

export default async function saveAuthFile(page: Page, origin: string) {
  const fileName = "LoginAuth.json";

  console.info(`Saved auth as ${fileName} from ${origin}`);
  await page.screenshot({ path: "screenshots/auth.png", fullPage: true });
  await page.context().storageState({ path: fileName });
}
