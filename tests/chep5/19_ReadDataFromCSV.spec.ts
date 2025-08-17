import {test, expect} from '@playwright/test';
import fs from 'fs';
import path from 'path';
import {parse} from 'csv-parse/sync';

const filePath = path.resolve(__dirname, '../../testData/testData.csv');
const csvData = fs.readFileSync(filePath);

const records = parse(csvData, {
    columns:true,
    skip_empty_lines: true
});

records.forEach((row, index) => {
    const ratings = Object.values(row).filter(rating => rating && rating.trim());

    test(`validate the radio and checkbox ${row} and ${index+1}`, async({page}) => {
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
                    await page.waitForTimeout(2000);
                    break;
                }
            }
        }
    
    })

});

    
