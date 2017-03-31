var config = require('../../nightwatch.conf.BASIC.js');

module.exports = { // adapted from: https://git.io/vodU0
  'loads the clickstream script on site load': function(browser) {
    browser
    .url('http://shop.nordstrom.com/')
    .timeoutsAsyncScript(15000) // set async exec timeout
    browser
      .url('http://shop.nordstrom.com/')
      .waitForElementVisible('body')
      .assert.title('Nordstrom Online & In Store: Shoes, Jewelry, Clothing, Makeup, Dresses')
      .end();
  }
};
