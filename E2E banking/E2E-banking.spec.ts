//! E2E Banking Scenario

import {test,expect} from "@playwright/test"
import {LoginPage} from "../PageObjectModel/loginPage"
import {ManagerPage} from "../PageObjectModel/managerPage"
import {CustomerPage} from "../PageObjectModel/customerPage"
import fs from "fs"
import path from "path"

let datafile = fs.readFileSync(path.join(__dirname, "../testdata/banking.json"))
let data = JSON.parse(datafile)

test("E2E banking",async({page})=>{
  const login = new LoginPage(page)
  const manager = new ManagerPage(page)
  const customer = new CustomerPage(page)

  await page.goto(data.url)

  await expect(page).toHaveURL(data.url)

  await login.clickBankManagerLogin()

  await manager.goToAddCustomer()

  await manager.addCustomer(
    data.customer.firstName,
    data.customer.lastName,
    data.customer.postCode
  )

  await manager.goToOpenAccount()

  const fullName=`${data.customer.firstName} ${data.customer.lastName}`

  await manager.openAccount(fullName, data.account.currency)

  await login.clickHome()

  await login.clickCustomerLogin()

  await customer.selectCustomer(fullName)

  await customer.login()

  await customer.goToDeposit()

  await customer.deposit(data.transaction.depositAmount)

  await customer.goToWithdraw()

  await page.waitForTimeout(1000)

  
  await customer.withdraw(data.transaction.withdrawAmount)

  const expectedBalance=parseInt(data.transaction.depositAmount)-parseInt(data.transaction.withdrawAmount)
  await page.waitForTimeout(1000)

  await expect(customer.balance).toHaveText(expectedBalance.toString())

  await customer.logout()

  await page.screenshot({
    path: "screenshots/bankingE2E.png",
    fullPage: true
  })

})