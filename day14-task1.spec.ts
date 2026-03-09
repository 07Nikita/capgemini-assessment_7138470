import {test,expect} from "@playwright/test"
test('task', async({page,browserName})=>{
    await page.setDefaultTimeout(20000)
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    await page.getByRole("textbox",{name:"Name"}).fill("nikita")
    await page.getByRole("textbox",{name:"Email Id"}).fill("nikita12@gmail.com")
    await page.getByRole("textbox",{name:"Password"}).fill("grdgtgh")
    await page.getByRole("button",{name:"Register"}).click()
    await expect(page).toHaveScreenshot('image.png');
    await expect(page.getByRole("textbox",{name:"Email Id"})).toBeVisible()
    await expect(page.getByRole("button",{name:"Login"})).toBeEnabled()
    await page.screenshot({path:`screenshot/task${browserName}.png`})

    
})

