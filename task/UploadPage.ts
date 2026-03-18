import {Page,expect} from '@playwright/test';

export class UploadPage {
  page: Page;
  fileInput;
  uploadButton;
  uploadedFileName;

  constructor(page: Page) {
    this.page=page;
    this.fileInput=page.locator('#file-upload');
    this.uploadButton=page.locator('#file-submit');
    this.uploadedFileName=page.locator('#uploaded-files');
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/upload');
  }

  async uploadFile(filePath: string) {
    await this.fileInput.setInputFiles(filePath);
  }

  async clickUpload() {
    await this.uploadButton.click();
  }

  async validateUploadedFile(expectedName: string) {
    await expect(this.uploadedFileName).toHaveText(expectedName);
  }
}