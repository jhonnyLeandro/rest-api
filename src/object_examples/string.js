var strPrimitive = "I am a string";
console.log (typeof strPrimitive);							// "string"
console.log (strPrimitive instanceof String);					// false

var strObject = new String( "I am a string" );
console.log (typeof strObject); 								// "object"
console.log (strObject instanceof String);					// true

// inspect the object sub-type
Object.prototype.toString.call( strObject );	// [object String]

var strPrimitive = "I am a string";

console.log( strPrimitive.length );			// 13

console.log( strPrimitive.charAt( 3 ) );