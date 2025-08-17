import {test, expect} from '@playwright/test'

test('test the dropDown', async({page}) => {
    await page.goto('https://github.com/signup');

    let country = page.locator("//ul[@aria-label='Select Country/Region options']/li/button");
    await page.locator("//button[@aria-labelledby='country-dropdown-label']").click();

    // let country = page.locator("//ul[@aria-label='Select Country/Region options']/li//span[@class='ActionListItem-label']");
    let counteyName = (await country.allInnerTexts()).toString().trim();
    // console.log("country ", counteyName);

    let len = counteyName.length;   
    for(let i=0; i<len; i++){
        const name = await country.nth(i).innerText();
        console.log("name = "+name.trim());

        if(name.trim() == 'Austria'){
            console.log("FOUND the country -- ");
            await country.nth(i).click();
            // await page.locator('button:has(span.ActionListItem-label:has-text("Austria"))').click();
            break;
        }
    }

    expect(counteyName).toContain('Uganda');
    
});
