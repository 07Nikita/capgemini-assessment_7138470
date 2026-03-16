import {Locator,Page} from "@playwright/test"

class Flipkart{
    popup:Locator
    home:Locator
    gudiStore:Locator
    gudiCloth:Locator
    page:Page
    Product1:Locator
    Product2:Locator
    page2:Page
    cart:Locator


    constructor(page:Page){
        this.page=page
        this.popup=page.locator('//span[@class="b3wTlE"]')
        this.home=page.locator('//img[@style="width:36px;height:36px"]').nth(5)
        this.gudiStore=page.locator('//a[@href="/gudipadwa2026-at-store?param=7561&BU=Home"]');
        this.gudiCloth=page.locator('//a[@href="/all/~cs-bjn56jm6a4/pr?sid=all&collection-tab-name=Gudi+padwa+&pageCriteria=default&Param=356643&BU=Home"]');
        this.Product1=page.locator('//div[@class="RGLWAk"]').nth(4);
        this.Product2=page.locator('//div[@class="RGLWAk"]').nth(7);
        this.page2=page;
        this.cart=page.locator("//a[@class='WGWdFn']")
        
    }


    async handlePopup(){
        if(await this.popup.isVisible()){
        await this.popup.click();
    }
    }

    async homecate(){
        await this.home.waitFor({ state: "visible" })
        await this.home.click()
    }

    async store(){
        await this.gudiStore.waitFor({ state: "visible" })
        await this.gudiStore.click()
    }

    async gudi(){
        await this.gudiCloth.waitFor({ state: "visible" })
        await this.gudiCloth.click()
    }

    async addProducts(){
        const [product1page]=await Promise.all([
            this.page.waitForEvent("popup"),
            this.Product1.click()
        ])
        this.page2=product1page
        await this.page2.waitForLoadState()
        await this.page2.getByText("Add to cart").click();
        
        await this.page2.close()
        const [product2page]=await Promise.all([
            this.page.waitForEvent("popup"),
            this.Product2.click()
        ])

        this.page2=product2page
        await this.page2.waitForLoadState()
        await this.page2.getByText("Add to cart").click();
        await this.page2.close()
    }
    async Quantity(){
        await this.cart.click();
        await this.page.locator('//input[@class="j93Ywx"]').first().fill("5");
        await this.page.locator('//input[@class="j93Ywx"]').last().fill("3");
        await this.page.screenshot({path: `./screenshot/flipkarttask.png`})
        await this.page.locator('//button[@class="dSM5Ub JMrpad KcXDCU"]').click()


    }
}
export default Flipkart;