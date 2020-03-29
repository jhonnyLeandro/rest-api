const hello = require ('./bar').hello;

var hungry = "hippo";

var awesome = function awesome () {
	console.log( hello( hungry ).toUpperCase() );
}

exports.awesome = awesome;