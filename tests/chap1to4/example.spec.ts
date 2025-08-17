import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  await expect(page).toHaveTitle(/Playwright/);
});

test('dealshare test', async ({ page }) => {

  await test.step("Open URL", async() =>{
    await page.goto('https://www.dealshare.in/');
  });

  await test.step("click on \"type manually\"", async() =>{
    await page.getByRole('button', { name: 'Type Manually' }).click();
  });
  
  await test.step("search for area", async() =>{
    await page.getByRole('textbox', { name: 'Search for your area' }).click();
    await page.getByRole('textbox', { name: 'Search for your area' }).fill('302017');  
  });

  await test.step("select the first option", async() =>{
    await page.getByText('Jaipur, Rajasthan 302017,').click();
    await page.getByRole('button', { name: 'Confirm Delivery Location' }).click();
  });

  await test.step("click on image and assert the title", async() =>{
    await page.locator('section:nth-child(4) > .Slider_slides__9cO3A > div:nth-child(2) > img').click();
    await expect(page).toHaveTitle(/Dealshare/);
  });
  
});
