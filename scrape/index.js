const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

const URL_TO_SCRAPE =
  "https://glints.com/opportunities/jobs/explore?jobCategories=1&countries=SG";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  await page.goto(URL_TO_SCRAPE);

  const CARD_SELECTOR = ".CompactOpportunityCardsc__JobTitle-sc-1xtox99-7";

  await page.waitForSelector(CARD_SELECTOR);

  const cardsToClick = await page.$$(CARD_SELECTOR);
  let res = [];
  for (let i = 0; i < cardsToClick.length; i++) {
    const card = cardsToClick[i];
    await card.click();

    while ((await browser.pages()).length < 3) {
      await page.waitForTimeout(2000);
    }

    const pages = await browser.pages();
    const currentTab = pages[pages.length - 1];

    const IMAGE_CONTAINER =
      ".JobOverviewStyle__JobOverviewHeaderStyle-sc-1y8r2ks-1";
    await currentTab.waitForSelector(IMAGE_CONTAINER);
    const $ = cheerio.load(await currentTab.content());

    const id = i + 1;
    const title = $(
      ".JobOverviewStyle__JobOverviewHeadingStyle-sc-1y8r2ks-4"
    ).text();
    const ulFirstItem = $(
      "#container > div > div > div.Opportunitysc__JobDetailContainer-sc-1gsvee3-14.ghAfay > div:nth-child(4) > div > div > div.CollapsibleStyle__CollapsibleBody-sc-133mwvh-3.jZAnJE.collapsible-content > span > div > div > div > div > ul:nth-child(3) > li.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-reset.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listLTR > div > span > span"
    ).text();
    const olFirstItem = $(
      "#container > div > div > div.Opportunitysc__JobDetailContainer-sc-1gsvee3-14.ghAfay > div:nth-child(4) > div > div > div.CollapsibleStyle__CollapsibleBody-sc-133mwvh-3.jZAnJE.collapsible-content > span > div > div > div > div > ol > li.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-reset.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listLTR > div > span > span"
    ).text();
    const description =
      olFirstItem.length === 0 || olFirstItem.length > 200
        ? ulFirstItem
        : olFirstItem;
    const tags = $(".tag-content")
      .map(function (i, e) {
        return $(this).text();
      })
      .get();
    const salary = $(".Opportunitysc__FlexBox-sc-1gsvee3-25").text();
    const commitment = $("p[data-gtm-job-type]").text();
    const period = getRandomInt(2, 41) + " weeks";
    const location = "Singapore";
    const vacancies = getRandomInt(1, 11) + "";
    const applications = getRandomInt(0, 8) + "";
    const hirer = {
      name: $(".JobOverviewStyle__JobOverviewLinkStyle-sc-1y8r2ks-5").text(),
      image: $(
        ".JobOverviewStyle__JobOverviewHeaderStyle-sc-1y8r2ks-1 > img"
      ).attr("src"),
      description: $(
        ".Opportunitysc__AboutContainer-sc-1gsvee3-0 .public-DraftEditor-content"
      ).text(),
    };
    const otherInformation = $(".public-DraftEditor-content").html();
    const job = {
      id,
      title,
      description,
      tags,
      salary,
      commitment,
      period,
      location,
      vacancies,
      applications,
      hirer,
      otherInformation,
    };
    res.push(job);

    await currentTab.close();
  }
  console.log(res);

  await browser.close();
})();
