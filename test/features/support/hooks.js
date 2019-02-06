var {After, Before, BeforeAll, AfterAll} = require('cucumber');
var fs = require("fs");

module.exports = function() {
	
	this.Before(async function () {
        await console.log("In Before hook");
        await browser.driver.manage().window().maximize();
    });

	this.After(async function (scenario) {
		await console.log("In After hook for scenario: " + scenario.getName());
		
		if (scenario.isFailed()) {
			var myScreenshot = await browser.takeScreenshot();
			await scenario.attach(new Buffer(myScreenshot, 'base64'), 'image/png'); 
		}
	});

}