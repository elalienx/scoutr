// Node modules
import { firefox as navigator, Page } from "playwright";

export default async function getPageWithContext(filePath: string): Promise<Page> {
  // Properties
  let page: Page;

  try {
    const browser = await navigator.launch();
    const context = await browser.newContext({ storageState: filePath });

    page = await context.newPage();
    console.info("Scoutr browser with the LinkedIn credential is ready");
  } catch (error) {
    throw new Error(
      `
        Playwright: Cannot create the page with context.
        Check the login auth file exist at ${filePath}.

        If the file does not exist, create it using "npm run get_auth"
        from the terminal inside the backend container.
      `
    );
  }

  return page;
}
