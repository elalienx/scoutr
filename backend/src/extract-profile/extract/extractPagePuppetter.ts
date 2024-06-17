// Node modules
import puppeteer from "puppeteer";

export default async function extractPagePuppetter(url: string): Promise<string> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let result = "";

  try {
    await page.goto(url);
    await page.waitForSelector("h1");

    result = await page.content();
  } catch (error) {
    console.error(`Puppeteer: Cant' navigate to URL "${url}"`);
  } finally {
    await browser.close();
  }

  console.log("Puppeteer result");
  console.log(result);

  return result;
}
