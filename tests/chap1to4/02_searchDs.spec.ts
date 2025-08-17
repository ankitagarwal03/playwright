import {test, expect} from '@playwright/test'


test.describe('smoke',()=>{
    test('search for ds ', async({page}) =>{

        await page.goto('https://www.dealshare.in/');
        
        await page.getByRole('button', {name:'Type Manually'}).click();
    
        await page.getByRole('textbox', {name: 'Search for your area'}).click();
        await page.getByRole('textbox', {name: 'Search for your area'}).fill("302017");
    
        await page.getByText('Jaipur, Rajasthan 302017').click();
    
        await page.getByRole('button', {name:'Confirm Delivery Location'}).click();
    
        console.log("URL ---  = ",page.url());
        // let loc = page.getByPlaceholder("Search for \"Sugar\"").first();
        // loc.click;
        // await page.waitForTimeout(5000);
        // loc.fill("Ankit");s
    
        const grocery = page.locator('//p[text()="Grocery"]');
        await grocery.waitFor({state:'visible'});
        await grocery.click();
    
        // const links =  page.getByText("Grocery").first();
        // await links.waitFor({state:'visible'});
        // await links.click();
    
        await page.waitForTimeout(2000);
        // let cls = para.getAttribute.arguments.class;
        // console.log("class ",cls);
    
        console.log("URL = ", page.url());
        await page.waitForTimeout(1000);
    
        // //take screen shot of the element only
        // await page.locator('#homepage-banner-0').screenshot({path:'./screenShots/element.png'});
    
        // //take screen shot of the page only
        // await page.screenshot({path:'./screenShots/pageElement.png'});
    
        // //take screen shot of the full page
        // await page.screenshot({path:'./screenShots/FullPageElement.png', fullPage:true});
    
        await expect(page).toHaveTitle('Dealshare');
    
    })

})


test.describe('regression', ()=> {

    test('open Google', async({page}) => {
        await page.goto('https://www.google.com');
        await page.waitForTimeout(2000);
        expect(page).toHaveTitle('Google');
    })

    test('open gitHUb', async({page}) =>{
        await page.goto('https://github.com/signup');
        expect(page).toHaveTitle('Sign up to GitHub · GitHub');
    })
})

