// Node modules
import puppeteer from "puppeteer";

export default async function scrapLinkedIn(url) {
  console.log("scrapLinkedIn(url) 14-headless-new url", url);

  console.log("Launching Puppeteer...");
  const browser = await puppeteer.launch({ headless: "new" });
  console.log("Puppeteer launched successfully!");

  const page = await browser.newPage();

  await page.goto(url);

  const htmlContent = await page.content();
  console.log("Puppeteer htmlContent:");
  console.log(htmlContent);

  // Wait for the "Sign in to view full profile" modal to know that the profile loaded
  await page.waitForSelector(".contextual-sign-in-modal__screen"); // Wait for the content to load

  // Extract and print the text of article titles
  const nameTag = "h1";
  const jobTitleTag = "h2.top-card-layout__headline";
  const picTag = ".top-card__profile-image-container img";
  const experienceTag = ".experience__list .profile-section-card";
  const jobCompanyTag = `${experienceTag} .experience-item__subtitle`;
  const jobDurationTag = `${experienceTag} .date-range`;

  const name = await page.$eval(nameTag, (item) => item.textContent.trim());
  const jobTitle = await page.$eval(jobTitleTag, (item) =>
    item.textContent.trim()
  );
  const pic = await page.$eval(picTag, (item) => item.src);
  const jobCompany = await page.$eval(jobCompanyTag, (item) =>
    item.textContent.trim()
  );
  const jobDateRange = await page.$eval(jobDurationTag, (item) =>
    item.textContent.trim()
  );
  const jobDateToArray = jobDateRange.split("\n");
  const jobDuration = jobDateToArray.length > 1 ? jobDateToArray[1].trim() : "";

  await browser.close();

  return {
    name: name,
    job_title: jobTitle,
    linked_in: url,
    job_company: jobCompany,
    job_duration: jobDuration,
    pic: pic,
  };
}
