import {test, expect} from '@playwright/test';
import { LocationPopUp } from "../../src/pages/LocationPopUp";
import { HomePage } from '../../src/pages/homePage';
import { assert } from 'console';


test('Home Page Text',{tag :['@smokeTest']}, async({ page })=>{
    const locationPopUp = new LocationPopUp(page);
    const homePage = new HomePage(page);

    await locationPopUp.goToUrl();
    
    const popText = await locationPopUp.getPopUpText();
    console.log(popText)
    expect(popText).toContain("We need your current location to deliver you accurately");

    await locationPopUp.clickOnTypeManually();
    
    //enter the pincode
    await locationPopUp.clickAndEnterPincode(`${process.env.PINCODE}`);
    await locationPopUp.selectFirstLocationResult();
    await locationPopUp.clickOnLocationConfirmButton();

    //verify the delivery by text is visible
    const deliveryText = await homePage.verifyDeliveryByTextVisible();
    await expect(deliveryText).toContainText(/Delivery by|Store is Closed|Delivering to|Delivery in/);

    //verify is first section of home page is visible
    const firstSection = await homePage.getFirstSection();
    expect(firstSection).toBeVisible();

});

