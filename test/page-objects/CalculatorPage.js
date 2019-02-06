var EC = protractor.ExpectedConditions;
// var chai = require('chai');
// var expect = chai.expect;

var CalculatorPage = function () {

  this.firstNumber = element(by.model('first'));
  this.secondNumber = element(by.model('second'));
  this.goButton = element(by.buttonText("Go!"));
  this.result = element(by.binding('latest'));

  this.waitForPageLoad = async function () {
		await browser.wait(EC.visibilityOf(this.goButton), 5000, "Waiting for GO button");
  }

  this.setField = async function (fieldName, value) {
    if (fieldName == 'first')
      await this.firstNumber.sendKeys(value)
    else
      await this.secondNumber.sendKeys(value);
  };

  this.go = function () {
    return this.goButton.click();
  };

  // this.isResultPresent = function () {
  //   return this.result.isPresent();
  // };

  // this.latestResult = async function() {
  //   return await result.getText();
  // }

  // this.ResultsMatchesExpected = async function(expectedResult) {
  //   await console.log("expectedResult: " + expectedResult)
  //   await browser.wait(EC.textToBePresentInElement(element(by.binding('latest')), "dfgasdfgasdfgsdfgsdfgsdfg"), 20000);
  // }
};

module.exports = CalculatorPage;
