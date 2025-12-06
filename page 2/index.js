function sum(){let sum = 0;

while (true) {
    let value = prompt("Enter a number (0 to stop):");

    // Check if input is numeric
    if (isNaN(value) || value.trim() === "") {
        alert("Please enter a valid numeric value!");
        continue; // ask again
    }

    value = Number(value);

    // Stop if user enters 0
    if (value === 0) break;

    sum += value;

    // Stop if sum exceeded 100
    if (sum > 100) {
        alert("Sum exceeded 100!");
        break;
    }
}
document.writeln("Total sum of entered values = " + sum);
console.log("Total sum of entered values = " + sum);
}
sum();