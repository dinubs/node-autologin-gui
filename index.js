// var path = require('path');
var exec = require('child_process').exec;

var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
client = webdriverio.remote(options);

client.started = false;

var cmd = 'java -jar selenium-server.jar -Dwebdriver.chrome.driver="./node_modules/chromedriver/bin/chromedriver"';
var selenium = exec(cmd, function(error, stdout, stderr) {
});