import {test,expect} from "@playwright/test"
import path from "path"
test("download",async({page})=>{
    await page.goto("https://demoqa.com/upload-download")
    let [download]=await Promise.all([
        page.waitForEvent("download"),
        page.locator("#downloadButton").click()
    ])
    let downloadfolder="C:/Users/nikit/Desktop/daily/downloads"
    let filename = await download.suggestedFilename()
    await download.saveAs(path.join(downloadfolder, filename))
    await page.locator("#uploadFile")
        .setInputFiles(path.join(downloadfolder, filename))
    await expect(page.locator("#uploadedFilePath"))
        .toContainText(filename)
    await page.screenshot({ path:"upload-success.png",fullPage:true })
})