// // alert("hello"); one time popup
// let name   = prompt("Enter your name"); // input from user
// console.log("Hello " + name); // output to console

// practice problem 1: check if a number is divisible by 5 or not

// let num = prompt("Enter a number");
// if(num%5===0){
//     console.log("Divisible by 5");
// } else {
//     console.log("Not Divisible by 5");
// }


// practice problem 2: check grade of a student based on marks

// let score  = 75;
// let grade;
// if(score>=90 && score<=100){
//     grade = 'A';
// } else if(score>=80 && score<90){
//     grade = 'B';
// } else if(score>=70 && score<80){
//     grade = 'C';
// } else if(score>=60 && score<70){
//     grade = 'D';
// } else if(score>=50 && score<60){
//     grade = 'E';
// }
// console.log("Grade: " + grade);

// practice problem 3: check if a number is even or odd

// let number = prompt("Enter a number");  
// if(number%2===0){
//     console.log("Even Number");
// } else {
//     console.log("Odd Number");
// }



// for loop
// for(let i=1; i<=5; i++){
//     console.log("anshu & kausu");
// }
// console.log("loop ended");


// calculate sum of first n natural numbers

// let sum = 0;
// for(let i = 1; i<=5; i++){
//     sum += i;  
// }
// console.log("Sum is: " + sum);



// calculate factorial of a number

// let fact = 1;
// let n = 5;  
// for(let i = 1; i<=n; i++){
//     fact = fact * i;  
// }
// console.log("Factorial is: " + fact);


// for of loop
// let str  = "kaushlendra";
// let size  = 0;
// for(let i of str){
//     size++;
// }
// console.log("Size of string is: " + size);


// practice qs 


let gamenum = 25;

let usernum = prompt("guess the game number");

while(usernum!=gamenum){
     usernum = prompt("you entered wrong number , please try again");

}
console.log("congratulation you guessed the correct number");