var fs = require('fs');

module.exports = function(app){
    fs.readdirSync(__dirname + "/routes" ).forEach(function(file) {
        var name = file.substr(0,-2);
        require("./routes/" + name)(app);
    });
		/* 404 */ 
		app.get('/*', function(req, res){
		  res.render('404', {
				title: '404 Page Not Found.'
		  });
		});
}