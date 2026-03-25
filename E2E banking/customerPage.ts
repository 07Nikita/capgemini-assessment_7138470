import {Page,Locator} from "@playwright/test"

export class CustomerPage{
  page:Page
  balance:Locator

  constructor(page:Page){
    this.page=page
    this.balance=page.locator('strong.ng-binding').nth(1)
  }

  async selectCustomer(name:string){
    await this.page.locator('#userSelect').selectOption({label:name})
  }

  async login(){
    await this.page.getByRole('button',{ name:'Login'}).click()
  }

  async goToDeposit(){
    await this.page.getByRole('button',{name:'Deposit'}).click()
  }

  async deposit(amount:string){
    await this.page.locator('//input[@placeholder="amount"]').fill(amount)
    await this.page.getByRole('form').getByRole('button',{name:'Deposit'}).click()
  }

  async goToWithdraw(){
    await this.page.getByRole('button',{name:'Withdrawl'}).click()
  }

  async withdraw(amount:string){
    await this.page.locator('//input[@placeholder="amount"]').fill(amount)
    await this.page.getByRole('form').getByRole('button',{name:'Withdraw'}).click()
  }

  async logout(){
    await this.page.getByRole('button',{name:'Logout'}).click()
  }
}