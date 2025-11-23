// stirng : string is a sequence of characters

// let str = "Hello, World!";
// console.log(str[6]); // Output: W

// template literals this is also called a string interpolation.

// let specialStr = `This is a template literal with a variable: ${42}`;
// console.log(specialStr);




// string methods in javascript

// let str = "kaushal thakur";

// 1. toUpperCase() method
// let upperStr = str.toUpperCase();
// console.log(upperStr); // Output: KAUSHAL THAKUR
// 2. toLowerCase() method
// let lowerStr = str.toLowerCase();
// console.log(lowerStr); // Output: kaushal thakur


// let str = "kaushal   singh  javascript      ";

// console.log(str.trim()); // Output: "kaushal   singh  javascript"


// let str = "heloo";

// console.loh(str.slice(1,3)); // Output: "el"
// console.log(str.slice(1)); // Output: "eloo"
// console.log(str.slice(-3)); // Output: "loo"


// let str1  = "kaushal";
// let str2 = " thakur";

// let res = str1.concat(str2);
// console.log(res); // Output: "kaushal thakur"



// let str = "hello";
// // console.log(str.replace( "lo", "p")); // Output: "help"
// // console.log(str.replaceAll( "l", "p")); // Output: "heppo"

// console.log(str.charAt(1)); // Output: "e"



// practice qs;

let fullname = prompt("enter your full name without spaces: ");

let username = "@" + fullname + fullname.length;
console.log("your username is: " + username); 