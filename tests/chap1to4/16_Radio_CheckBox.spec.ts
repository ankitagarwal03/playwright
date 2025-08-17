import {test, expect} from '@playwright/test';

test("validate the radio and checkbox", async({page}) => {
    await page.goto("https://jqueryui.com/checkboxradio/");
    const iframe = await page.frameLocator('[class="demo-frame"]');

    //check the radio button
    const radio = iframe.locator('//legend/following-sibling::label[contains(@for, "radio")]');
    const radioCount = await radio.count();
    for(let i=0; i<radioCount; i++){
        await expect(radio.nth(i)).not.toBeChecked();
        if((await radio.nth(i).innerText()).trim() == "London"){
            await radio.nth(i).check();
            await expect(radio.nth(i)).toBeChecked();
            await page.waitForTimeout(2000);
            break;
        }
    }
    
    //check for multiselect
    const checkBox = iframe.locator('//legend[text()="Hotel Ratings: "]/following-sibling::label[contains(@for, "checkbox")]');
    const checkBoxCount = await checkBox.count();
    for(let i=0; i<checkBoxCount; i++){
        await expect(checkBox.nth(i)).not.toBeChecked();
        if((await checkBox.nth(i).innerText()).trim() == "5 Star"){
            await checkBox.nth(i).check();
            await expect(checkBox.nth(i)).toBeChecked();
            await page.waitForTimeout(2000);
            break;
        }
    }

})