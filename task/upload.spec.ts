import {test} from '@playwright/test';
import {UploadPage} from '../PageObjectModel/UploadPage.ts';
import data from '../testData/uploadData.json';

test('task',async({page})=>{
  const uploadPage=new UploadPage(page);
  await uploadPage.navigate();
  await uploadPage.uploadFile(data.filePath);
  await uploadPage.clickUpload();
  await uploadPage.validateUploadedFile(data.expectedFileName);
  await page.screenshot({ path: './screenshots/task1E2E2.png' });


});