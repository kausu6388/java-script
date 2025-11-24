//  dom manipulation 

// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()    // onlinly first element and it is also return node list
// document.querySelectorAll() // all the elements


//  properties

// .tagName  //return the tag name of the element
// innerText // return the text content of the element and all its children
// .textContent  // return the texutual content of the element Even hidden elements
// .innerHTML // return the html content of the element



// practical example

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " and DOM manipulation";


// practical example 2

// let divs = document.getquerySelectorAll(".box");


// let indx = 1;

// for(let div of divs){
//     div.innerText = `this is box number ${indx}`;
//     indx++;
// }


let newbtn = document.createElement("button");
newbtn.innerText = "click me";

newbtn.style.backgroundColor = "blue";
newbtn.style.color = "white";
newbtn.style.padding = "10px 20px";
newbtn.style.borderRadius = "5px";
newbtn.style.border = "none";
newbtn.style.cursor = "pointer";
document.querySelector("body").prepend(newbtn);
