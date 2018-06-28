### Open a terminal session and install Protractor
```sh
$ npm install -g protractor
```
### Open a terminal session and install project dependencies
```sh
$ git clone https://github.com/dwwhalen/protractor-and-cucumber
$ cd protractor-and-cucumber
$ npm install
```
### Open another terminal session to start webdriver-manager
```sh
$ webdriver-manager update && webdriver-manager start
```

### Open another terminal session and run the tests
```sh
$ cd protractor-and-cucumber
$ npm run e2etest
```
### Run/debug in VSCode
- install VS Code.  consider installing the extension "Cucumber (Gherkin) Full Support" to make working with gherkin easier.
- open the protractor-and-cucumber folder in VS Code.
- press F5 - that should result in a browser opening and the calculator features running.  Breakpoints can be set as well.
- Run from command line:
```sh
$ protractor --specs features/calculator.feature

Or

$ npm run e2etest
```