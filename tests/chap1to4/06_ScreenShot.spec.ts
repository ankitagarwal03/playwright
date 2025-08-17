import { test, expect } from '@playwright/test'

test('search for ds ', async ({ page }) => {

    await page.goto('https://www.dealshare.in/');

    await page.getByRole('button', { name: 'Type Manually' }).click();

    await page.getByRole('textbox', { name: 'Search for your area' }).click();
    await page.getByRole('textbox', { name: 'Search for your area' }).fill("302017");

    await page.getByText('Jaipur, Rajasthan 302017').click();

    await page.getByRole('button', { name: 'Confirm Delivery Location' }).click();

    console.log("URL ---  = ", page.url());
    
    //take screen shot of the element only
    await page.locator('#homepage-banner-0').screenshot({path:'./screenShots/element.png'});

    //take screen shot of the page only
    await page.screenshot({path:'./screenShots/pageElement.png'});

    //take screen shot of the full page
    await page.screenshot({path:'./screenShots/FullPageElement.png', fullPage:true});

    await expect(page).toHaveTitle('Dealshare');

})
