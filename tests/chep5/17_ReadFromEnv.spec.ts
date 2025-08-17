import {test, expect} from '@playwright/test'

test("read URL from env file", async ({page}) => {

    await page.goto(`${process.env.JQUEY_URL}`);
    console.log(await page.title());

})