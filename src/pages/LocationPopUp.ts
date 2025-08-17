import {expect, Locator, Page} from '@playwright/test'

export class LocationPopUp{

    readonly page:Page
    readonly typeManuallyButton:Locator
    readonly locationPopText:Locator
    readonly searchArea:Locator
    readonly searchResult:Locator
    readonly confirmDeliveryButton:Locator

    constructor(page:Page){
        this.page = page
        this.typeManuallyButton = page.locator("//button[text()='Type Manually']")
        this.locationPopText = page.locator(".text-semi-bold-lg")
        this.searchArea = page.locator("#google-search")
        this.searchResult = page.locator("//div[@class='WebMap_suggestionItem__DdcLI']")
        this.confirmDeliveryButton = page.getByRole('button', {name: 'Confirm Delivery Location'})
    }

    async goToUrl(){
        await this.page.goto(`${process.env.DEALSHARE_URL}`)
    }

    async getPopUpText(){
        return (await this.locationPopText.allInnerTexts()).toString().trim();
    }

    async clickOnTypeManually(){
        await this.typeManuallyButton.click();
    }

    async clickAndEnterPincode(pincode:string){
        await this.searchArea.click();
        await this.searchArea.fill(pincode);
    }

    async selectFirstLocationResult(){
        await expect(this.searchResult.first()).toBeVisible();
        await this.searchResult.first().click();
    }

    async clickOnLocationConfirmButton(){
        await this.confirmDeliveryButton.click();
    }

}