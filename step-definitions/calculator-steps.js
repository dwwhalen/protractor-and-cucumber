var chai = require('chai'),
  chaiAsPromised = require('chai-as-promised'),
  expect = chai.expect;

var latestResult = element(by.binding('latest'));

chai.use(chaiAsPromised);

var calculatorPage = require('../page-objects/calculator-page'),
  calc = new calculatorPage();

var steps = function () {

  this.Given(/^I view the Calculator page$/, function (callback) {
    browser
      // .get(browser.params.env.hostname)
      .get("http://juliemr.github.io/protractor-demo/")
      .then(callback);
  });

  this.When(/^I set the (first|second) number to "([^"]*)"$/, function (fieldToSet, value, callback) {
    calc
      .setField(fieldToSet, value)
      .then(callback);
  });

  this.When(/^I click submit$/, function (callback) {
    calc
      .go()
      .then(callback);
  });

  this.Then(/^the result is "([^"]*)"$/, function (expectedResult, callback) {
    expect(latestResult.getText()).to.eventually.equal(expectedResult)
      .and.notify(callback);
  });

};
module.exports = steps;