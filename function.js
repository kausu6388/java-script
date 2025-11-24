// function it works on to reduce the redundancy it means repetion of code 
// function myfunction() {
//     console.log("This is my function.");
// }

// myfunction();   

// function myfunction(msg){
//     // parameter => input
//     console.log(msg);
// }
// myfunction("I love javascript");  // argument => output



// sum of two numbers

// function sum(a, b) {
//     // local variable --> block scope 
//     s = a + b;

//     return s;
// }

// let val = sum(5, 10);
// console.log(val);


// arrow function: compact way to write a function
// const sum = (a, b) => {
//     return a + b;
// }

// let val = sum(5, 10);
// console.log(val);



// task1
// function countVowels (str){
//     let count = 0;
//     for(const char of str){
//         if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
//            char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'){
//             count++;
//         }
//     }
//     console.log("Number of vowels:", count);
// }

// arr.foreach(callbackfunction)

// let arr = [1,2,3,4,5,6,7,8,9,10];

// arr.forEach(function printval(val){
//     console.log(val);
// })

// higher order function : function that takes another function as an argument or returns a function as a result
// callback function : function that is passed as an argument to another function and is executed after some operation is completed


// let num = [1,2,3,4,5];

// num.forEach((num)=>{
//     console.log(num*num);
// });



let factorial = arr.reduce((res , curr){
    return res * curr;
});


console.log(factorial);