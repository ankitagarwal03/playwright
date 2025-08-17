import {test, expect} from '@playwright/test'
test('check alerts ', async ({page,browser})=> {
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
    
    page.once('dialog', dialog=>{
        dialog.accept();
        console.log("Dialog type = ",dialog.type());
        console.log("alert text = ",dialog.message());
    })
    
    await page.getByText("See an example alert", {exact: true}).click();
})

test('prompt browser context ', async ({page,browser})=> {
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
    
    page.once('dialog', async(dialog)=>{
        console.log("Dialog type = ",dialog.type());
        console.log("alert text = ",dialog.message());
        await dialog.accept('play');
    })
    
    await page.getByText("See a sample prompt", {exact: true}).click();
})