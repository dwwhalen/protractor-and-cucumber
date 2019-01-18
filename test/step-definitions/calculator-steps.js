var chai = require('chai'),
  chaiAsPromised = require('chai-as-promised'),
  expect = chai.expect;

var latestResult = element(by.binding('latest'));

chai.use(chaiAsPromised);

var calculatorPage = require('../page-objects/calculator-page'),
  calc = new calculatorPage();

var steps = function () {

  this.Given(/^I view the Calculator page$/, async function () {
    await browser.get("http://juliemr.github.io/protractor-demo/");
  });

  this.When(/^I set the (first|second) number to "([^"]*)"$/, async function (fieldToSet, value) {
    await calc.setField(fieldToSet, value);
  });

  this.When(/^I click submit$/, async function () {
    await calc.go();
  });

  this.Then(/^the result is "([^"]*)"$/, function (expectedResult) {
    expect(latestResult.getText()).to.eventually.equal(expectedResult);
  });

};
module.exports = steps;