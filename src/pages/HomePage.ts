import {expect, Locator, Page} from '@playwright/test'

export class HomePage{

    readonly page:Page
    readonly deliveryByText:Locator
    readonly firstSection:Locator

    constructor(page:Page){
        this.page = page
        this.deliveryByText = page.locator(".Address_addressBold__GlDKW")
        this.firstSection = page.locator(".Slider_slides__9cO3A.no-scrollbar")

    }

    async verifyDeliveryByTextVisible(){
        return this.deliveryByText;
    }

    async getFirstSection(){
        return this.firstSection.first();
    }

}