// Select the output div
let outputDiv = document.getElementById("output");

// 1: Declare a variable age and check if it's 18 or more
let age = 25;
let isAdult = age >= 18;
outputDiv.innerHTML += `<p>Is Adult: ${isAdult}</p>`;

// 2: Given x = 10 and y = 5, perform operations
let x = 10, y = 5;
let addition = x + y;
let multiplication = x * y;
let modulus = x % y;

outputDiv.innerHTML += `<p>Addition: ${addition}</p>`;
outputDiv.innerHTML += `<p>Multiplication: ${multiplication}</p>`;
outputDiv.innerHTML += `<p>Modulus: ${modulus}</p>`;

// 3: Check if a number n is even or odd
let n = 8;
let isEven = (n % 2 === 0) ? "Even" : "Odd";
outputDiv.innerHTML += `<p>${n} is ${isEven}</p>`;

// 4: Store numbers from 1 to 5 in an array using a loop
let numbers = [];
for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}
outputDiv.innerHTML += `<p>Numbers: ${numbers.join(", ")}</p>`;

// 5: Function to return the square of a number
function square(num) {
    return num * num;
}
outputDiv.innerHTML += `<p>Square of 5: ${square(5)}</p>`;
