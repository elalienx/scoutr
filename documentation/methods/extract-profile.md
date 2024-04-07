# Extract profile

## Extract Page

Generates a virtual web browser to navigate to the requested URL, waits until its loaded, extracts all HTML nodes, and returns them as a string.

### Input

| Name | Type   | Description                                      | Example                     |
| ---- | ------ | ------------------------------------------------ | --------------------------- |
| url  | string | URL of the webpage from which data is extracted. | [linkedin.com/in/eduardo]() |

### Output

| Name | Type   | Description          | Example                        |
| ---- | ------ | -------------------- | ------------------------------ |
| page | string | An entire HTML page. | `<html><body>Hi</body></html>` |

### Code

```typescript
// Node modules
import { webkit } from "playwright";

export default async function getPage(url: string): Promise<string> {
  const browser = await webkit.launch();
  const page = await browser.newPage();
  let result = "";

  try {
    await page.goto(url);
    await page.waitForSelector("h1");

    result = await page.content();
  } catch (error) {
    console.error(`Playwright: Cannot navigate to invalid URL "${url}"`);
  } finally {
    await browser.close();
    return result;
  }
}
```
