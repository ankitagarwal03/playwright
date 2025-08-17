import {test,expect} from '@playwright/test'
import { TIMEOUT } from 'dns';

test('Test the timeout in playwright', async({page}) =>{
    test.setTimeout(12000); // set the test specific timeout
    await page.goto('https://www.google.com/');

    // await page.waitForTimeout(10000);
    await page.locator("//div[@class='FPdoLc lJ9FBc']//input[@class='RNmpXc1']").click();
    await page.locator("//div[@class='FPdoLc lJ9FBc']//input[@class='RNmpXc']").click({timeout : 10000});

    await expect(page).toHaveTitle('Google', {timeout : 5000});




})