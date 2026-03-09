import {test,expect} from "@playwright/test"
import { createPublicKey } from "node:crypto"
test("contains", async({page,browserName})=>{
    await page.goto("https://www.flipkart.com/")
    
    // page.locator("//button[contains(text(),'✕')]").click()
    page.locator("//input[@name='q']").first().fill("shoes");
    await page.locator('//button[@title="Search for Products, Brands and More" ]').first().click()
    await page.waitForTimeout(6000);
    const women=page.locator("//a[contains(translate(text(),'WOMEN','women'),'women')]");
    await expect(page.locator("//input[@name='q']").first()).toHaveValue("shoes");   
  await expect(women.first()).toBeVisible(); 
  await expect(women).toHaveCount(await women.count()); 
  await page.waitForTimeout(6000);
  await expect(page).toHaveScreenshot("flipkart-shoes.png");

})