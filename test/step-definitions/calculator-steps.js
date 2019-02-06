var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var expect = chai.expect;

  var latestResult = element(by.binding('latest'));
var CalculatorPage = require('../page-objects/CalculatorPage');

chai.use(chaiAsPromised);

var calculatorPage = require('../page-objects/CalculatorPage'),
calculatorPage = new CalculatorPage();

var steps = function () {

  this.Given(/^I view the Calculator page$/, async function () {
    await browser.get("http://juliemr.github.io/protractor-demo/");
    await calculatorPage.waitForPageLoad();
  });

  this.When(/^I set the (first|second) number to "([^"]*)"$/, async function (fieldToSet, value) {
    await calculatorPage.setField(fieldToSet, value);
  });

  this.When(/^I click submit$/, async function () {
    await calculatorPage.go();
  });

  this.Then(/^the result is "([^"]*)"$/, async function (expectedResult) {
    await expect(latestResult.getText()).to.eventually.equal(expectedResult);
  });

};
module.exports = steps;