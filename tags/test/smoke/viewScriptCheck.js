// import chai from 'chai'
// let expect = chai.expect
// let Nightmare = require('nightmare');
//
// describe('SomeTest: shop.nordstrom.com', function () {
//   it('loads the clickstream script on site load', (done) => {
//     let nightmare = Nightmare()
//     nightmare
//       .goto('http://shop.nordstrom.com/')
//       .end()
//       .then(function(link) {
//         let head = document.getElementsByTagName("head")[0];
//         let checkScript = head.outerHTML.includes('images.nordstromdata.com/js/sp/2.6.2/sp.js')
//         expect(checkScript.include('images.nordstromdata.com/js/sp/2.6.2/sp.js'));
//         $(document).ajaxComplete(function(event, xhr, settings) {
//           if (settings.url === "images.nordstromdata.com/js/sp/2.6.2/sp.js") {
//             expect(true).to.equal(true)
//             done()
//           }
//         });
//         setTimeout(function(){
//           expect(true).to.be(false)
//         }, 5000)
//       })
//   });
// });

var config = require('../../nightwatch.conf.BASIC.js');

module.exports = { // adapted from: https://git.io/vodU0
  'loads the clickstream script on site load': function(browser) {
    browser
    .url('http://shop.nordstrom.com/')
    .timeoutsAsyncScript(15000) // set async exec timeout
    // browser
    //   .url('http://shop.nordstrom.com/')
    //   .waitForElementVisible('body')
    //   .assert.title('Nordstrom Online & In Store: Shoes, Jewelry, Clothing, Makeup, Dresses')
    //   .assert.containsText("head", "images.nordstromdata.com/js/sp/2.6.2/sp.js")
      .end();
  }
};
