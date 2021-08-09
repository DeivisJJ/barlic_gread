const { test, expect } = require('@playwright/test');
const { basicCalculatorStartPage } = require('../pages/basicCalculatorStartPage')
const websiteURL = 'https://testsheepnz.github.io/BasicCalculator';

test.describe('Build six test suite', () => {
    let page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
      startPage = new basicCalculatorStartPage(page);
  });
 test.beforeEach(async () => {
    await startPage.goto(websiteURL);
    await startPage.selectOption('#selectBuild', '6');
  });
    test('Test if addition operation with positive numbers works', async () => {
        await startPage.fill('#number1Field', '2.5');
        await startPage.fill('#number2Field', '2');
        await startPage.selectOption('#selectOperationDropdown', '0');
        await startPage.click('#calculateButton');
        const answerContent = await startPage.getInputValue('#numberAnswerField');
        expect(answerContent).toBe('4.5');
    });

    test('Test if addition operation with negative numbers works', async () => {
      await startPage.fill('#number1Field', '-2.5');
      await startPage.fill('#number2Field', '-2');
      await startPage.selectOption('#selectOperationDropdown', '0');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('-4.5');
  });

    test('Test if addition operation with positive integer numbers works', async () => {
      await startPage.fill('#number1Field', '2.5');
      await startPage.fill('#number2Field', '2');
      await startPage.selectOption('#selectOperationDropdown', '0');
      await startPage.click('#integerSelect');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('4');
    });

    test.only('Test if addition operation with negative integer numbers works', async () => {
      await startPage.fill('#number1Field', '-2.5');
      await startPage.fill('#number2Field', '-2');
      await startPage.selectOption('#selectOperationDropdown', '0');
      await startPage.click('#integerSelect');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('-4');
    });

    test('Test if subtraction operation with positive numbers works', async () => {
      await startPage.fill('#number1Field', '2');
      await startPage.fill('#number2Field','1.5');
      await startPage.selectOption('#selectOperationDropdown', '1');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('0.5');
    });

    test('Test if subtraction operation with negative numbers works', async () => {
      await startPage.fill('#number1Field', '-2');
      await startPage.fill('#number2Field','-1.5');
      await startPage.selectOption('#selectOperationDropdown', '1');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('-0.5');
    });

    test('Test if subtraction operation with positive integer numbers works', async () => {
      await startPage.fill('#number1Field', '2');
      await startPage.fill('#number2Field','1.5');
      await startPage.selectOption('#selectOperationDropdown', '1');
      await startPage.click('#integerSelect');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('0');
    });

    test.only('Test if subtraction operation with negative integer numbers works', async () => {
      await startPage.fill('#number1Field', '-2');
      await startPage.fill('#number2Field','-1.5');
      await startPage.selectOption('#selectOperationDropdown', '1');
      await startPage.click('#integerSelect');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('0');
    });

    test('Test if multiply operation with positive numbers works', async () => {
      await startPage.fill('#number1Field', '1.5');
      await startPage.fill('#number2Field', '1.5');
      await startPage.selectOption('#selectOperationDropdown', '2');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('2.25');
    });

    test('Test if multiply operation with negative numbers works', async () => {
      await startPage.fill('#number1Field', '-1.5');
      await startPage.fill('#number2Field', '-1.5');
      await startPage.selectOption('#selectOperationDropdown', '2');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('2.25');
    });

    test('Test if multiply operation with positive integer numbers works', async () => {
      await startPage.fill('#number1Field', '1.5');
      await startPage.fill('#number2Field', '1.5');
      await startPage.selectOption('#selectOperationDropdown', '2');
      await startPage.click('#integerSelect');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('2');
    });

    test.only('Test if multiply operation with negative integer numbers works', async () => {
      await startPage.fill('#number1Field', '-1.5');
      await startPage.fill('#number2Field', '-1.5');
      await startPage.selectOption('#selectOperationDropdown', '2');
      await startPage.click('#integerSelect');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('2');
    });

    test('Test if divide operation with positive numbers works', async () => {
      await startPage.fill('#number1Field', '5');
      await startPage.fill('#number2Field', '2');
      await startPage.selectOption('#selectOperationDropdown', '3');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('2.5');
    });

    test('Test if divide operation with negative numbers works', async () => {
      await startPage.fill('#number1Field', '-5');
      await startPage.fill('#number2Field', '-2');
      await startPage.selectOption('#selectOperationDropdown', '3');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('2.5');
    });

    test('Test if divide operation with positive integer numbers works', async () => {
      await startPage.fill('#number1Field', '5');
      await startPage.fill('#number2Field', '2');
      await startPage.selectOption('#selectOperationDropdown', '3');
      await startPage.click('#integerSelect');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('2');
    });

    test.only('Test if divide operation with negative integer numbers works', async () => {
      await startPage.fill('#number1Field', '-5');
      await startPage.fill('#number2Field', '-2');
      await startPage.selectOption('#selectOperationDropdown', '3');
      await startPage.click('#integerSelect');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('2');
    });

    test.only('Test if concatenate operation works', async () => {
      await startPage.fill('#number1Field', '2');
      await startPage.fill('#number2Field', '2');
      await startPage.selectOption('#selectOperationDropdown', '4');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('22');
    });

    test('Test if addition operation with symbols work', async () => {
      await startPage.fill('#number1Field', '2a');
      await startPage.fill('#number2Field', 'b');
      await startPage.selectOption('#selectOperationDropdown', '0');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('NaN');
    });

    test('Test if subtraction operation with symbol works', async () => {
      await startPage.fill('#number1Field', '2a');
      await startPage.fill('#number2Field', 'b');
      await startPage.selectOption('#selectOperationDropdown', '1');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('NaN');
    });

    test('Test if multiply operation with symbol works', async () => {
      await startPage.fill('#number1Field', '2a');
      await startPage.fill('#number2Field', 'b');
      await startPage.selectOption('#selectOperationDropdown', '2');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('NaN');
    });

    test('Test if divide operation with symbol works', async () => {
      await startPage.fill('#number1Field', '2a');
      await startPage.fill('#number2Field', 'b');
      await startPage.selectOption('#selectOperationDropdown', '3');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('NaN');
    });

    test('Test if concatenate operation with symbol works', async () => {
      await startPage.fill('#number1Field', '2a');
      await startPage.fill('#number2Field', 'b');
      await startPage.selectOption('#selectOperationDropdown', '4');
      await startPage.click('#calculateButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('NaN');
    });

    test('Test if clear button works', async () => {
      await startPage.fill('#number1Field', '2.5');
      await startPage.fill('#number2Field', '2');
      await startPage.selectOption('#selectOperationDropdown', '0');
      await startPage.click('#calculateButton');
      await startPage.click('#clearButton');
      const answerContent = await startPage.getInputValue('#numberAnswerField');
      expect(answerContent).toBe('');
  });
});