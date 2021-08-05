const { test, expect } = require('@playwright/test');

test('checks that duckduckgo page can be opened', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  const isLogoVisible = await page.isVisible('#logo_homepage_link');

    expect(isLogoVisible).toBe(true);
});

test('checks that duckduckgo results page opens and results are correct', async ({ page }) => {
    await page.goto('https://duckduckgo.com/');
    await page.fill('#search_form_input_homepage', "Test");
    await page.click('#search_button_homepage');
    await page.textContent('#r1-0');
    const rezultatasTextContent = await page.textContent('#r1-0');
    console.log(rezultatasTextContent);
    expect(rezultatasTextContent).toContain('Test');
  });

  test('Inspector demo', async ({ page }) => {
    await page.goto('https://duckduckgo.com/');
    await page.fill('[placeholder="Search the web without being tracked"]', 'Test');
    await Promise.all([
        page.waitForNavigation(/*{ url: 'https://duckduckgo.com/?q=Test&t=h_&ia=web' }*/),
        page.click('input:has-text("S")')

  ]);
    const rezultatasTextContent = await page.textContent('#r1-0');
    expect(rezultatasTextContent).toContain('Test');

});


test('microsoft word cheat sheet', async ({ page }) => {
    await page.goto('https://duckduckgo.com/');
    await page.fill('#search_form_input_homepage', "microsoft word cheat sheet");
    await page.click('#search_button_homepage');
    const rezultatasTextContent = await page.textContent('h3.c-base__title');
    const rezultatasTextContent2 = await page.textContent('a.zcm__link.js-zci-link.js-zci-link--cheat_sheets.is-active');
   
    expect(rezultatasTextContent).toContain('Microsoft Word 2010');
    expect(rezultatasTextContent2).toContain('Cheat Sheet');
  });

test('shorten wikipedia', async ({ page }) => {
    await page.goto('https://start.duckduckgo.com/');
    await page.waitForSelector('#logo_homepage_link');
    await page.fill('#search_form_input_homepage', "shorten www.wikipedia.com");
    await page.click('#search_button_homepage');
    const shortURL = await page.getAttribute('#shorten-url','value');
    await page.goto(shortURL);
    const webPage = page.url();
    expect(webPage).toBe('https://www.wikipedia.org/')
  });


  test('panda', async ({ page }) => {
    await page.goto('https://duckduckgo.com');
  await page.waitForSelector("#search_form_input_homepage");
  await page.fill('#search_form_input_homepage', "intitle:panda");
  await page.click("#search_button_homepage", { force: true });
  await page.waitForNavigation();
      const results = await page.evaluate(() => Array.from(document.querySelectorAll('.result__title'), element => element.textContent));
      console.log(results);
  results.forEach(result => {
    expect(result.toLowerCase()).toContain("panda");
  });
});


const passwordsLengths = ['7', '65'];
    passwordsLengths.forEach(passwordLength => {
    test(`Generate ${passwordLength} chracters long password`, async ({ page }) => {
        await page.goto('https://duckduckgo.com');
        await page.waitForSelector("#search_form_input_homepage");
        await page.fill('#search_form_input_homepage', ("password " + passwordLength));
        await page.click("#search_button_homepage");
        const isPasswordContentVisible = await page.isVisible(".c-base__title");
        expect(isPasswordContentVisible).toBe(false)
    });
  });