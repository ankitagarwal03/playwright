import { test, expect } from '@playwright/test'

test('search for ds ', {tag :['@smokeTest']}, async ({ page }) => {

    await page.goto('https://www.dealshare.in/');

    await page.getByRole('button', { name: 'Type Manually' }).click();

    await page.getByRole('textbox', { name: 'Search for your area' }).click();
    await page.getByRole('textbox', { name: 'Search for your area' }).fill("302017");
    
    
    await page.getByText('Jaipur, Rajasthan 302017').click();
    
    await page.getByRole('button', { name: 'Confirm Delivery Location' }).click();
    
    console.log("URL ---  = ", page.url());

    
    const loc = await page.locator('//div[@class="Categories_categoriesContainer__K_xwI"]//a/p').elementHandles();
    for(const foo of loc){
        console.log(await foo.textContent());
    }

    const loct = page.locator('//div[@class="Categories_categoriesContainer__K_xwI"]//a/p');
    const loctCount = await loct.count();
    for(let i=0 ; i<loctCount; i++){
        let data = await loct.nth(i).innerText();
        console.log(`Footer = ${data}`);
    }

    await expect(page).toHaveTitle('Dealshare');

})
