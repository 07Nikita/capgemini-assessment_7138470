import {test} from "@playwright/test"
import amazon from "../PageObjectModel/amazonPage.ts"

test("amazon-task",async({page})=>{
    await page.goto("https://www.amazon.in/")
    let amazonPage=new amazon(page);
    await amazonPage.navigateToForm();
    await amazonPage.fillTheForm();
    await amazonPage.applyforJob();
    
})