var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
	dest: 'target/screenshots',
	filename: 'my-report.html'
});

exports.config = {
	//seleniumAddress:'http://localhost:4444/wd/hub/',
	directConnect: true,
	frammework: 'jasmine2',
	capabilities: {
		'browserName': 'chrome',
		//'shardTestFiles': true,
		'maxInstances': 1
	  },
	// Setup the report before any tests start
	beforeLaunch: function () {
		return new Promise(function (resolve) {
			reporter.beforeLaunch(resolve);
		});
	},
	specs: [
		'../com.Shop.Login/test1.js',
		'../com.Shop.Login/test1 copy.js'],
	onPrepare: function () {
		browser.driver.manage().window().maximize();
		jasmine.getEnv().addReporter(reporter);

		var AllureReporter = require('jasmine-allure-reporter');
		jasmine.getEnv().addReporter(new AllureReporter({
			resultsDir: 'allure-results'
		}));
	},

	onComplete:function() {
		/* browser.close();
		browser.quit(); */
		console.log("in On complete");
	},

	onCleanup: function() {
		console.log("on cleanup");

	},

	afterlaunch: function () {
		console.log("in afterlaunch");
	},
	// Close the report after all tests finish	
	afterLaunch: function (exitCode) {
		console.log("in method after launch");
		return new Promise(function (resolve) {
			reporter.afterLaunch(resolve.bind(this, exitCode));
		});
	},
	// Options to be passed to Jasmine-node.
	jasmineNodeOpts: {
		showColors: true, // Use colors in the command line report.
		defaultTimeoutInterval: 30000   // Default time to wait in ms before a test fails.
	},

}