const { test, expect } = require('@playwright/test');
const { basicCalculatorStartPage } = require('../pages/basicCalculatorStartPage')
const websiteURL = 'https://testsheepnz.github.io/BasicCalculator';

test.describe('Build two test suite', () => {
    let page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
      startPage = new basicCalculatorStartPage(page);
  });
 test.beforeEach(async () => {
    await startPage.goto(websiteURL);
    await startPage.selectOption('#selectBuild', '2');
  });
    test('Checks that build two calculator addition function works', async () => {
        await startPage.fill('#number1Field', '1');
        await startPage.fill('#number2Field', '2');
        await startPage.selectOption('#selectOperationDropdown', '0');
        await startPage.click('#calculateButton');
        const answerContent = await startPage.getInputValue('#numberAnswerField');
        expect(answerContent).toBe('3');
    });
    test('Checks that build two calculator concatenate function works', async () => {
      await startPage.fill('#number1Field', '1');
      await startPage.fill('#number2Field','2');
      await startPage.selectOption('#selectOperationDropdown', '4');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('12');
  });
});