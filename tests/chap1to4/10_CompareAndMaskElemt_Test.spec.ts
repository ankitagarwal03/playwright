import{test,expect} from '@playwright/test'

test('compate The element screenShot', async({page})=> {
    await page.goto('https://www.google.com/');

    // await page.locator("//div[@class='FPdoLc lJ9FBc']//input[@class='RNmpXc']").click();

    await expect(page).toHaveScreenshot("full_page.png", {
        mask:[page.locator('.uU7dJb'), page.locator("//div[@class='FPdoLc lJ9FBc']//input[@class='RNmpXc']")]
    });

    await expect(page.locator('.RNNXgb')).toHaveScreenshot('10_searchElement.png');


})

