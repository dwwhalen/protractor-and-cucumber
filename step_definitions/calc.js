var chai = require('chai'),
  chaiAsPromised = require('chai-as-promised'),
  expect = chai.expect;

  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));
  var history = element.all(by.repeater('result in memory'));

chai.use(chaiAsPromised);

var HomePO = require('../page_objects/home.po.js'),
  home = new HomePO();

var steps = function () {

  this.Given(/^I view the Calculator page$/, function (callback) {
    browser
      // .get(browser.params.env.hostname)
      .get("http://juliemr.github.io/protractor-demo/")
      .then(callback);
  });

  this.When(/^I set the (first|second) number to "([^"]*)"$/, function (fieldToSet, value, callback) {
    // Write code here that turns the phrase above into concrete actions
    if (fieldToSet == 'first')
        firstNumber.sendKeys(value)
    else
        secondNumber.sendKeys(value);
    callback();
  });

  this.When(/^I click submit$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    goButton.click()
    .then(callback);
    // callback(null, 'pending');
  });

  this.Then(/^the result is (\d+)$/, function (expectedResult, callback) {
    expect(latestResult.getText()).to.eventually.equal(expectedResult)
    .and.notify(callback);
  });

};
module.exports = steps;