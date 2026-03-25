import {Page} from "@playwright/test"

export class ManagerPage{
  page:Page

  constructor(page:Page){
    this.page=page

    // this.page.on('dialog', dialog => dialog.accept());
  }

  async goToAddCustomer(){
    await this.page.getByRole('button',{name:'Add Customer'}).click()
  }

  async addCustomer(first:string,last:string,pin:string){
    await this.page.locator('//input[@placeholder="First Name"]').fill(first)
    await this.page.locator('//input[@placeholder="Last Name"]').fill(last)
    await this.page.locator('//input[@placeholder="Post Code"]').fill(pin)
    await this.page.getByRole('form').getByRole('button',{name:'Add Customer'}).click()
  }

  async goToOpenAccount(){
    await this.page.getByRole('button',{name:'Open Account'}).click()
  }

  async openAccount(customerName:string,currency:string){
    await this.page.locator('#userSelect').selectOption({label:customerName})
    await this.page.locator('#currency').selectOption(currency)
    await this.page.getByRole('button',{name:'Process'}).click()
  }
}