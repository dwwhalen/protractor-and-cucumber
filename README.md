### Open a terminal session and install Protractor
```sh
$ npm install -g protractor
```
### Open a terminal session and install project dependencies
```sh
$ git clone https://github.com/dwwhalen/protractor-and-cucumber
$ cd protractor-and-cucumber
$ npm install
$ npm run webdriver-update
```
### Open another terminal session and run the tests
```sh
$ cd protractor-and-cucumber
$ npm run e2e
```
### Run/debug in VSCode
- install VS Code.  consider installing the extension "Cucumber (Gherkin) Full Support" to make working with gherkin easier.
- open the protractor-and-cucumber folder in VS Code.
- press F5 - that should result in a browser opening and the calculator features running.  Breakpoints can be set as well.
- Run from command line in the main project directory:
```sh
$ protractor --specs test/features/calculator.feature

Or

$ npm run e2etest
```

### Create the report in HTML format
When thd test is run, the test results are written to test/.reports/report.json.  To create an HTML view of that data, run the following to create cucumber_report.html in the same folder:

```sh
$ node test/create-report.js
```