
import { test, expect } from '@playwright/test';
import fs from 'fs';

test('E2E File Upload → Validate Uploaded File Name', async ({ page }) => {
  const testData = JSON.parse(
    fs.readFileSync('C:/Users/nikit/Desktop/daily/testdata/asses.jsontestdata/asses.json', 'utf-8')
  );
  const filePath: string = testData.filePath;
  const expectedFileName: string = testData.expectedFileName;
  await page.goto('https://the-internet.herokuapp.com/upload');
  await page.locator('//input[@id="file-upload"]').setInputFiles(filePath);
  await page.click('//input[@id="file-submit"]');
  await page.waitForURL('**/upload');
await page.waitForTimeout(2000);
await page.screenshot({ path: './screenshots/task1E2E2.png' });


});