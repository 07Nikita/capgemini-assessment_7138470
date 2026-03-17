import {Locator,Page} from "@playwright/test"
class amazon{
    career:Locator
    page:Page
    role:Locator
    unirole:Locator
    country:Locator
    state:Locator
    city:Locator
    emptype:Locator
    category:Locator
    careerarea:Locator
    team:Locator
    roletype:Locator
    job:Locator
    apply:Locator
    page2:Page

    constructor(page:Page){
        this.page=page
        this.career=page.locator('//a[@class="nav_a" and .="Careers"]')
        this.role=page.locator('//a[@aria-label="Student opportunities"]')
        this.unirole=page.locator('//a[@href="#search"]')
        this.country=page.locator('(//div[@class="filter-value-module_label__Pet6N css-gb1y2i"])[3]')
        this.state=page.getByText('Ile-de-France')
        this.city=page.getByText('Brétigny-sur-Orge')
        this.emptype=page.getByText('Full time')
        this.category=page.getByText('Fulfillment & Operations Management')
        this.careerarea=page.getByText('Distribution & fulfillment')
        this.team=page.getByText('Internships for students')
        this.roletype=page.getByText('Individual contributor')
        this.job=page.locator('//a[@href="/jobs/3134150"]')
        this.page2=page;
        this.apply=page.locator('//a[@href="https://www.amazon.jobs/applicant/jobs/3134150/apply"]')
    }

    async navigateToForm(){
        await this.career.click()
        await this.role.click()
        await this.unirole.click()
    }

    async fillTheForm(){
        await this.country.waitFor({ state: "visible" })
        await this.country.click()
        await this.state.click()
        await this.city.click()
        await this.emptype.click()
        await this.category.click()
        await this.careerarea.click()
        await this.team.last().click()
        await this.roletype.click()
    }

    async applyforJob(){
        let [Jobpage]=await Promise.all([
            this.page.waitForEvent("popup"),
            // this.page.locator('//a[@href="/jobs/3134150"]').click()
            this.job.click()

        ])
        this.page2=Jobpage
        await this.page2.waitForLoadState()
        await this.page2.locator('//a[@href="https://www.amazon.jobs/applicant/jobs/3134150/apply"]').click();
        await this.page2.screenshot({path: `./screenshot/amazontask.png`})
    }


}
export default amazon