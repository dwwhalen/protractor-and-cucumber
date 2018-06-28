var CalculatorPageObject = function () {
  this.selectors = {
    'FIRST_FIELD': '.e2e-start-button',
    'SECOND_FIELD': '.e2e-start-button',
    'RESULT': '.e2e-result'
  };

  this.startButton = browser.$(this.selectors.START_BUTTON);
  this.result = browser.$(this.selectors.RESULT);

  this.firstNumber = element(by.model('first'));
  this.secondNumber = element(by.model('second'));
  this.goButton = element(by.id('gobutton'));
};

CalculatorPageObject.prototype.setField = function (fieldName, value) {
  if (fieldName == 'first')
    return this.firstNumber.sendKeys(value)
  else
    return this.secondNumber.sendKeys(value);
};

CalculatorPageObject.prototype.go = function () {
  return this.goButton.click();
};

CalculatorPageObject.prototype.isResultPresent = function () {
  return this.result.isPresent();
};

module.exports = CalculatorPageObject;
