let btn1 =  document.querySelector('#btn1');

btn1.onclick = () => {
    console.log('button was clicked');
    let a = 25;
    a++;
    console.log(a);
}

let div1 = document.querySelector('div');

div1.onmouse = () =>{
    console.log('you are inside div');
}