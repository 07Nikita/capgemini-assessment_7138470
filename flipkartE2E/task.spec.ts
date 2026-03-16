import {test} from "@playwright/test"
import Flipkart from "../PageObjectModel/taskPage.ts"

test("Flipkart-task",async({page})=>{

    await page.goto("https://Flipkart.com");
    
    let flipkartPage=new Flipkart(page);
    
    await flipkartPage.handlePopup();
    
    await flipkartPage.homecate();
    
    await flipkartPage.store();
    
    await flipkartPage.gudi();
    
    await flipkartPage.addProducts();
    
    await flipkartPage.Quantity()
})