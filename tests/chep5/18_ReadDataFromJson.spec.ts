import {test, expect} from '@playwright/test';

import testData from '../../testData/testData.json'

const dataStar = Object.entries(testData);

for(const [key, ratings] of dataStar){
    test(`validate the radio and checkbox ${key}`, async({page}) => {
        await page.goto(`${process.env.JQUEY_URL}`);
        const iframe = await page.frameLocator('[class="demo-frame"]');
    
        //check for multiselect
        const checkBox = iframe.locator('//legend[text()="Hotel Ratings: "]/following-sibling::label[contains(@for, "checkbox")]');
        const checkBoxCount = await checkBox.count();
        
        for(const rating of ratings){
            for(let i=0; i<checkBoxCount; i++){
                if((await checkBox.nth(i).innerText()).trim() == rating){
                    await expect(checkBox.nth(i)).not.toBeChecked();
                    await checkBox.nth(i).check();
                    await expect(checkBox.nth(i)).toBeChecked();
                    await page.waitForTimeout(1000);
                    break;
                }
            }
        }
    
    })
}
