// Node modules
import { firefox as navigator, Page } from "playwright";

export default async function getPageWithContext(filePath: string) {
  // Properties
  let page: Page;

  try {
    const browser = await navigator.launch();
    const context = await browser.newContext({ storageState: filePath });

    page = await context.newPage();
    console.info("Scoutr browser with LinkedIn creadentials is ready");

    // Setup debug listener
    page.on("request", (request) => {
      console.log("Playwright: Browser activity detected", request.url);
    });
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

/**
 * await page.close({ runBeforeUnload: false }); // it may be the fastest way to close the page
 */
