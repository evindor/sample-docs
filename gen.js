var jade = require('jade'),
	dox = require('dox'),
	fs = require('fs');

var file = fs.readFile('api.js', function(err, data) {
	var c = dox.parseComments(data.toString());
	jade.renderFile('tmpl.jade', {data: c}, function(err, html) {
		fs.writeFile('gen.html', html, function(err) {
			console.log('done!');
		})
	});
});
