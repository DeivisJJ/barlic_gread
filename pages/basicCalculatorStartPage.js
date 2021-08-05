

exports.basicCalculatorStartPage = class basicCalculatorStartPage {
    constructor(page) {
        this.page = page;}

    async goto(websiteURL) {
    await this.page.goto(websiteURL);
    }

    async selectOption(dropdownSelector, optionNumber) {
    await this.page.selectOption(dropdownSelector, optionNumber);
    }

    async fill(inputFieldSelector, number) {
    await this.page.fill(inputFieldSelector, number);
    }

    async click(buttonSelector) {
    await this.page.click(buttonSelector);
    }

    async getInputValue(inputValue) {
    return await this.page.inputValue(inputValue);
    }

    async initiateSearch(searchCriteria) {
    await this.page.fill('#search_form_input_homepage', searchCriteria);
    await this.page.click("#search_button_homepage");
    await this.page.waitForNavigation();
    }
} 