import {test} from "@playwright/test"

test("task1", async({page,browserName})=>{
    await page.goto('https://www.olympics.com/en/olympic-games/tokyo-2020')
    await page.locator('//a[@data-cy="link" and .="All Athletes" ]').click()
    let gold=await page.locator('//h3[text()="Emma MCKEON"]/ancestor::div[@data-row-id="athlete-row-2"]/following-sibling::div/descendant::span[@data-cy="ocs-text-module" ]').first().textContent();
    console.log(gold);
    await page.screenshot({path:`screenshot/task1${browserName}.png`})
})