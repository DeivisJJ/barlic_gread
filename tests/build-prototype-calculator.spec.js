const { test, expect } = require('@playwright/test');
const { basicCalculatorStartPage } = require('../pages/basicCalculatorStartPage')
const websiteURL = 'https://testsheepnz.github.io/BasicCalculator';

test.describe('Build prototype test suite', () => {
    let page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
      startPage = new basicCalculatorStartPage(page);
  });
 test.beforeEach(async () => {
    await startPage.goto(websiteURL);
    await startPage.selectOption('#selectBuild', '0');
  });
    test('Checks that build prototype calculator works', async () => {
        await startPage.fill('#number1Field', '1');
        await startPage.fill('#number2Field','2');
        await startPage.selectOption('#selectOperationDropdown', '2');
        await startPage.click('#calculateButton');
        const answerContent = await startPage.getInputValue('#numberAnswerField');
        expect(answerContent).toBe('2');
    });
});