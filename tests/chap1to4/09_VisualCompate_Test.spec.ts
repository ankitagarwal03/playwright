import {test,expect} from '@playwright/test'

test('compare the screenShot', async({page}) => {
    await page.goto('https://www.google.com/');

    await expect(page).toHaveScreenshot('09_pageScreen.png');
    // await page.locator('[aria-controls="Alh6id"]').fill('Test1233');
    // await expect(page).toHaveScreenshot('09_pageScreen.png');

})


