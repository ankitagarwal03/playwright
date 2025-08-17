import { expect, test } from "@playwright/test";

test('demo of getAttribute and get Test', async({page}) => {
    await page.goto('https://github.com/signup');
    const text = await page.locator('#signup-form-fields').innerText();
    console.log(`Text == ${text}`);

    const classAttribute = await page.locator('#signup-form-fields').first().getAttribute('class');
    console.log(`Attribute == ${classAttribute}`);

});