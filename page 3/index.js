let Welcome = alert("Welcome to our site!");
let userName = prompt("Please enter your name:");
if (userName) {
    document.writeln("<h2>Hello, " + userName + "!</h2>");
} else {
    document.writeln("<h2>Hello, Guest!</h2>");
}
