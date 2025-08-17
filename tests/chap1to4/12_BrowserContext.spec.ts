import {test, expect} from '@playwright/test'
test('check browser context ', async ({page,browser})=> {
    await page.goto('https://www.google.com');
    await page.locator("[aria-controls='Alh6id']").click();

    await expect(page).toHaveTitle("Google");

    //make another session using context from browser
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();
    await page2.goto("https://github.com/signup");

    const page3 = await context2.newPage();
    await page3.goto("https://github.com");


})