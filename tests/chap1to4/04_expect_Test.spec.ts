import {test, expect} from '@playwright/test'

test('test the expect conditions ', async({page}) => {
    await page.goto('https://github.com/signup');
    const emailElement =  page.getByPlaceholder('Email');
    
    await expect(emailElement).toBeVisible();
    await expect(emailElement).toBeEditable();
    await expect(emailElement).toBeEmpty();
    await expect(emailElement).toBeEnabled();

    //assert the haveText, toHaveTitle, toHaveUrl, toHaveCount
    await expect(page.locator('.signups-rebrand__container-h1')).toHaveText('Create your free account');
    await expect(page.locator('//h2')).toHaveCount(4);
});