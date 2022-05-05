console.log("working");

let str = "Lakhwinder Singh";
console.log(str.length);
console.log(str.charAt(2));

//endsWith
console.log(str.endsWith("g"));

//includes

let sentence = "Hello World";
console.log(sentence.includes("World"));

//indexof, LastIndexOf

console.log(sentence.indexOf("o"));
console.log(sentence.lastIndexOf("o"));

//Length

console.log(str.length);

//replace
//Not going to manipulate the original string

console.log(str.replace("Lakhwinder","Lucky"));

//search
console.log(str.search("Lakhwinder"));

//substr

console.log(sentence.substr(1,4))// first value is the index position and the second value
// is the no of character from the index position mentioned in the first value

console.log(sentence.substring(0,7));//first index value is inclusive, last index value is exclusive

//for substring always the lower value is the starting index and higher value is the
//ending index, irrespective of the position of the bvalues mentioned
console.log(sentence.substring(7,0));

let email = "sidhant.gupta@prepbytes.com";

let values = email.split(".");
console.log(values);
