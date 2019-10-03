var data = require("D:/Protractor/ShopPay1/com.Shop.Config/dataprovider.js");

describe('Signing up on JetBlue', function () {

	/* afterAll(function () {
		browser.close();
		browser.quit();
	}) */

	it('Navigating to JetBlue Site', function () {
		browser.waitForAngularEnabled(false);
		data.getUrl();
	})

	it('Clicking on the sign in Button', function () {
		element(by.className('title')).click();

		browser.getAllWindowHandles().then(function (handles) {
			browser.switchTo().window(handles[1]).then(function () {
				browser.getTitle().then(function (tittle) {
					expect(tittle).toEqual("Airline Tickets, Flights & Airfare: Book Direct - Official Site | JetBlue");
				})
				var joinus = element(by.className('dn-m avenir main-nav-link b white no-underline nowrap dib ng-star-inserted'));

				browser.driver.wait(function () {
					browser.wait(EC.visibilityOf(joinus), 10000);
					return joinus;
				});

				joinus.click();

				browser.getCurrentUrl().then(function (text) {
					console.log(text);
				})

				var EC = protractor.ExpectedConditions;

				var email = element(by.xpath("//*[@id='email']"));

				browser.driver.wait(function () {
					browser.wait(EC.visibilityOf(email), 10000);
					return email;
				});

				email.click();
				element(by.css('input#email')).click(); //Clicking on Email id
				element(by.className('check-email box-content')).click(); //Clicking out side 

				expect(element(by.id('invalidEmail2')).getText()).toBe('Please enter a valid email.');

				//Now entering the email id and clicking on Next
				element(by.css('input#email')).sendKeys(data.emailid);
			})
		})
	})
})