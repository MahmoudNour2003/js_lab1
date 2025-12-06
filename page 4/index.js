function divisble(x, y, z ) {
    if (x % y === 0 && x % z === 0) {
        document.writeln(x + " is divisible by " + y + " and " + z);
    } else if (x % y === 0) {
        document.writeln(x + " is divisible by " + y);
    } else if (x % z === 0) {
        document.writeln(x + " is divisible by " + z);
    } else {
        document.writeln(x + " is not divisible by " + y + " or " + z);}
    
}

let num = parseInt(prompt("Enter a number:"));
let divisor1 = parseInt(prompt("Enter first divisor:"));
let divisor2 = parseInt(prompt("Enter second divisor:"));
divisble(num, divisor1, divisor2);