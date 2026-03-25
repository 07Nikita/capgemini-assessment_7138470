import {Page} from "@playwright/test"

export class LoginPage{
  page:Page

  constructor(page:Page){
    this.page=page
  }

  async clickBankManagerLogin(){
    await this.page.getByRole('button',{name:'Bank Manager Login'}).click()
  }

  async clickCustomerLogin(){
    await this.page.getByRole('button',{name:'Customer Login'}).click()
  }

  async clickHome(){
    await this.page.getByRole('button',{name:'Home'}).click()
  }
}