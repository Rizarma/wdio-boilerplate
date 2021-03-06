'use strict';

import { assert } from 'chai';

describe('webdriver.io page', () => {
  it('should have the right title', () => {
    browser.url('https://webdriver.io');
    const title = browser.getTitle();
    assert.equal(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
  });
});
