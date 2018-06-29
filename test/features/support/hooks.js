var hooks = function hooks() {
    var fs = require('fs');
    var tmp = require('tmp');

    this.Before(function () {
        var tmpObject = tmp.dirSync({ unsafeCleanup: true });
        this.tmpDir = fs.realpathSync(tmpObject.name);
    });

    // this.After(function (scenario, callback) {
    //     if (scenario.isFailed()) {
    //         browser.manage().window().setSize(1024, 2048).then(result =>
    //             browser.takeScreenshot().then(function (stream) {
    //                 scenario.attach(new Buffer(stream, 'base64').toString('binary'), 'image/png', callback);
    //             }, function (err) {
    //                 callback(err);
    //             }));
    //     }
    //     else {
    //         callback();
    //     }
    // });

    this.After(function (scenario, callback) {
        if (scenario.isFailed()) {
 
            browser.takeScreenshot().then(function (buffer) {
              scenario.attach(buffer, 'image/png');
            });
            callback();
        }
        else {
            callback();
        }
    });

};

module.exports = hooks;