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
    test('Test if build prototype calculator works with add', async () => {
        await startPage.fill('#number1Field', '2.5');
        await startPage.fill('#number2Field', '2');
        await startPage.selectOption('#selectOperationDropdown', '0');
        await startPage.click('#calculateButton');
        const answerContent = await startPage.getInputValue('#numberAnswerField');
        expect(answerContent).toBe('4.5');
    });

    test('Test if build prototype calculator works with add and integer numbers only', async () => {
      await startPage.fill('#number1Field', '2.5');
      await startPage.fill('#number2Field', '2');
      await startPage.selectOption('#selectOperationDropdown', '0');
      await startPage.click('#integerSelect');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('4');
    });

    test('Test if build prototype calculator works with subtract', async () => {
      await startPage.fill('#number1Field', '2');
      await startPage.fill('#number2Field','1.5');
      await startPage.selectOption('#selectOperationDropdown', '1');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('0.5');
    });

    test('Test if build prototype calculator works with subtract and integer numbers only', async () => {
      await startPage.fill('#number1Field', '2');
      await startPage.fill('#number2Field','1.5');
      await startPage.selectOption('#selectOperationDropdown', '1');
      await startPage.click('#integerSelect');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('0');
    });

    test('Test if build prototype calculator works with multiply', async () => {
      await startPage.fill('#number1Field', '1.5');
      await startPage.fill('#number2Field', '1.5');
      await startPage.selectOption('#selectOperationDropdown', '2');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('2.25');
    });

    test('Test if build prototype calculator works with multiply and integer numbers only', async () => {
      await startPage.fill('#number1Field', '1.5');
      await startPage.fill('#number2Field', '1.5');
      await startPage.selectOption('#selectOperationDropdown', '2');
      await startPage.click('#integerSelect');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('2');
    });

    test('Test if build prototype calculator works with divide', async () => {
      await startPage.fill('#number1Field', '5');
      await startPage.fill('#number2Field', '2');
      await startPage.selectOption('#selectOperationDropdown', '3');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('2.5');
    });

    test('Test if build prototype calculator works with divide and integer numbers only', async () => {
      await startPage.fill('#number1Field', '5');
      await startPage.fill('#number2Field', '2');
      await startPage.selectOption('#selectOperationDropdown', '3');
      await startPage.click('#integerSelect');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('2');
    });

    test('Test if build prototype calculator works with concatenate', async () => {
      await startPage.fill('#number1Field', '2');
      await startPage.fill('#number2Field', '2');
      await startPage.selectOption('#selectOperationDropdown', '4');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('22');
    });
});