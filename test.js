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

let score  = 75;
let grade;
if(score>=90 && score<=100){
    grade = 'A';
} else if(score>=80 && score<90){
    grade = 'B';
} else if(score>=70 && score<80){
    grade = 'C';
} else if(score>=60 && score<70){
    grade = 'D';
} else if(score>=50 && score<60){
    grade = 'E';
}
console.log("Grade: " + grade);