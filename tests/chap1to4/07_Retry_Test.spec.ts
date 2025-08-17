import {test,expect} from '@playwright/test';

test('Retry the failed test case using config.ts file (retries:)', async({page})=>{
    await page.goto('https://www.google.com');
    expect(page).toHaveTitle('google');
})