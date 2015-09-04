var request;
var config;

exports.init = function(callback) {
	request = require('request');
	config = require('./config.json');
	callback();
}

exports.enterNewProject = function(req, res) {
	res.render('enter_project');
}

exports.showMap = function(req, res) {
	res.render('map');
}

exports.getProjects = function(req, res) {
	var username = config.couch_username
	var password = config.couch_pw;
	var url = 'https://' + username + ':' + password + '@commcarehq.cloudant.com/commcarehq/_design/domain/_view/domains?reduce=false&include_docs=true';
	console.log('in getProjects()');
	var withLocations = [];
	request({url: url}, function(err, response, body) {
		/*for (int i = 0 ; i < body.length; i++) {
			var project = body[i];
			var country = project.doc.deployment.country;
			var city = project.doc.deployment.city;
		}*/
		res.send(body);
	});
}