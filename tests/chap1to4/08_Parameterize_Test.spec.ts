import {test, expect} from '@playwright/test'

const titleValues = ['Sign up to GitHub · GitHub', 'Sign up', 'Sign up to GitHub'];

for(const titleVale of titleValues){
    test(`checking the parameterization ${titleVale}`, async({page}) => {

        await page.goto('https://github.com/signup');
        expect(page).toHaveTitle(titleVale);
    
    })

}
