//let main = document.getElementsByTagName("main");
// let contai = document.querySelector("div.container");
let contai = document.querySelector("span#value");
// let contai = main.length
// console.log(main);
console.log(contai);

let contai2 = document.querySelectorAll(".btn");
console.log(contai2[2]);

let count = 0;

contai2[2].addEventListener("click", function (){
    count++;
    contai.innerHTML = count;
})

contai2[0].addEventListener("click", function (){
    count--;
    contai.innerHTML = count;
})

contai2[1].addEventListener("click", function (){
    count = 0;
    contai.innerHTML = count;
})





// function increment(){
//     count++;
//     contai.innerHTML = count;
// }

// function decrement(){
//     count--;
//     contai.innerHTML = count;
// }

// function reset(){
//     count = 0;
//     contai.innerHTML = count;
// }