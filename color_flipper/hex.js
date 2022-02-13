const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


function getrandomnumber() {
    return Math.floor(Math.random() * colors.length); // For generating random numbers between 0 and 3 (because 4 is the length of color array)
}

btn.addEventListener("click", function () {
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        hexColor += hex[getrandomnumber()]
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})