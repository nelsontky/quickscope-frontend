const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

const URL_TO_SCRAPE =
  "https://glints.com/opportunities/jobs/explore?jobCategories=1&countries=SG";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  await page.goto(URL_TO_SCRAPE);

  const CARD_SELECTOR =
    ".CompactOpportunityCardsc__CompactJobCardHeader-sc-1xtox99-5";

  await page.waitForSelector(CARD_SELECTOR);

  const cardsToClick = await page.$$(CARD_SELECTOR);

  for (const card of cardsToClick) {
    await card.click();
    await page.waitForTimeout(2000);

    const pages = await browser.pages();
    const currentTab = pages[pages.length - 1];

    const IMAGE_CONTAINER =
      ".JobOverviewStyle__JobOverviewHeaderStyle-sc-1y8r2ks-1";
    await currentTab.waitForSelector(IMAGE_CONTAINER);
    const $ = cheerio.load(await currentTab.content());

    const title = $(
      ".JobOverviewStyle__JobOverviewHeadingStyle-sc-1y8r2ks-4"
    ).text();

    console.log(title);
  }

  await browser.close();
})();
