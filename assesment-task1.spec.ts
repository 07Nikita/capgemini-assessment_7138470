import {test} from "@playwright/test"

test("task1", async({page,browserName})=>{
    await page.goto('https://www.icc-cricket.com/rankings')
    await page.locator('//a[@aria-label="womens-batting-rankings"]').click()
    let bat= await page.locator('//span[@class="text-sm leading-140 font-medium capitalize text-primary" and .="Smriti"]').textContent()
    let rank= await page.locator('//section[@id="womens-batting-rankings"]/descendant::span[@class="text-xs font-extrabold uppercase text-primary pr-2"]').first().textContent()
    console.log("Name",bat);
    console.log("rank",rank);
})
    
    