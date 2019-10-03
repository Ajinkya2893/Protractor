function data()
{
	this.baseUrl = "https://www.madewithangular.com/sites/jetblue";
	this.emailid = "ajinkya@mindsarray.com";
	
	this.getUrl=function(){
		browser.get(this.baseUrl);
	};
};



module.exports = new data();