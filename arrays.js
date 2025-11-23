let heroes = ["ironman","thor","hulk","batman","shaktiman"];
// for loop
// for(let i = 0; i<heroes.length; i++){
//     console.log(heroes[i]);
// }


// for..of loop
// for(let hero of heroes){
//     console.log(hero);
// }


// let marks = [34, 67, 89, 23, 45];
// let sum = 0 ;
// for(let val of marks){
//     sum+=val;
// }
// let avg = sum/marks.length;
// console.log(avg);




// practice qs:

// let items = [250,645,345,789,123,456];

// for(let i = 0; i<items.length; i++){
//     let offer = items[i]/10;
//     items[i] = items[i] - offer;
// }
// console.log("the price after discount is: " + items);


// array methods



let fooditems = ["pizza","burger","fries","pasta","nuggets"];

// fooditems.push("mommos");  // add item at last
// console.log(fooditems);
// let deleteitems =  fooditems.pop(); // delete item from last & retuurns deleted item
// console.log(fooditems);
// console.log("deleted item is: " + deleteitems);
// console.log(fooditems.toString()); // converts array to strin

// fooditems.unshift("samosa"); // add item at start
// fooditems.shift(); // delete item from start
console.log(fooditems.slice(1,4)); // return a peace of array  
console.log(fooditems.splice(1,2,"dosa","idli")); // delete or add items in array  (add,remove,replace)







