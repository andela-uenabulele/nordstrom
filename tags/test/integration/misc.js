var CreditCardApplication_setCreditLocalStorage = require('../../src/misc/CreditCardApplication_setCreditLocalStorage')
var config = require('../../nightwatch.conf.BASIC.js');

module.exports = { // adapted from: https://git.io/vodU0
  'injects a new tag without breaking app': function(client) {

    client
      .url('http://shop.nordstrom.com/')
      .waitForElementVisible('body')
      .assert.title('Nordstrom Online & In Store: Shoes, Jewelry, Clothing, Makeup, Dresses')
      .executeAsync(function(data, done) {
        someAsyncOperation(function() {
          CreditCardApplication_setCreditLocalStorage();
          done(true);
        });
      }, function(result) {
        client.getCookies(function callback(cookieResult) {
          console.log(result, cookieResult)
          this.assert.equal(result.value, null);
            client.click("a.rfx_T-B-F", function(response) {
              this.assert.ok(client === this, "Check if the context is right.");
              this.assert.containsText(".side-navigation.browse-nav", "Women");
              console.log(response);
            })
            .end();
        })
      });
  }
}
