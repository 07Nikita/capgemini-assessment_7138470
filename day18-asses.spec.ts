import { test, expect } from '@playwright/test'
import exceljs from 'exceljs'
test('Register',async({page})=>{
    const workbook = new exceljs.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../testdata/readexcel.xlsx"))
    const sheet = workbook.getWorksheet(1)
    for (let i=2; i<=sheet?.actualRowCount;i++) {
        const firstName = sheet.getRow(i).getCell(1).value
        const lastName = sheet.getRow(i).getCell(2).value
        const email = sheet.getRow(i).getCell(3).value
        const gender = sheet.getRow(i).getCell(4).value
        const mobile = sheet.getRow(i).getCell(5).value
        await page.goto("https://demoqa.com/automation-practice-form")
        await page.locator("#firstName").fill(firstName)
        await page.locator("#lastName").fill(lastName)
        await page.locator("#userEmail").fill(email)
        if (gender==="Male") {
            await page.locator("label[for='gender-radio-1']").click()
        } else if (gender==="Female") {
            await page.locator("label[for='gender-radio-2']").click()
        }
        await page.locator("#userNumber").fill(mobile)
        await page.locator("#submit").click()
        await expect(page.locator("#example-modal-sizes-title-lg"))
            .toHaveText("Thanks for submitting the form")
        await page.locator("#closeLargeModal").click()
    }
})