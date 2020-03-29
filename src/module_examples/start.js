const hello = require ('./bar').hello;
const awesome = require ('./foo').awesome; 

console.log(
	hello ( "rhino" )
); // Let me introduce: rhino

awesome ();