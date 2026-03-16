import {test} from "@playwright/test"

test("task1", async({page,browserName})=>{
    await page.goto('https://www.icc-cricket.com/rankings')
    await page.locator('//a[@title="full rankings" ]').nth(3).click()
    await page.locator('//button[@title="Load more"]').click()
    let rating=await page.locator('//span[text()="Jadeja"]/ancestor::td/following-sibling::td/descendant::span[@class="text-[10px] lg:text-xs leading-140 font-extrabold uppercase text-blue-950"]').textContent();
    console.log(rating);
    await page.screenshot({path:`screenshot/task2${browserName}.png`})
})
    
