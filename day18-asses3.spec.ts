import {test,expect} from "@playwright/test"
import path from "path"
test("upload",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    let filepath=path.join(__dirname,"upload file/demo2.xlsx")
    await page.locator("#file-upload").setInputFiles(filepath)
    await page.locator("#file-submit").click()
    await expect(page.locator("#uploaded-files"))
        .toContainText("demo2.xlsx")
    await page.screenshot({path:"file.png",fullPage:true})
})