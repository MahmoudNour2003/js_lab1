let userName = prompt("Please enter your name:");
//make sure the name is string and not empty and have no numbers and if not ask again
while (!userName || !isNaN(userName)) {
    userName = prompt("Invalid input. Please enter a valid name:");
}
let BOD = prompt("Please enter your birth year:");
const currentYear = new Date().getFullYear();
//make sure the BOD is number and not empty and less than current year and if not ask again and the user born before 2010  
while (!BOD || isNaN(BOD) || BOD >= currentYear || BOD > 2010) {
    BOD = prompt("Invalid input. Please enter a valid birth year (before 2010):");
}
let age = currentYear - BOD;
document.writeln("<H2><u>Name:</u> " + userName + "</H2>");
document.writeln("<H2><u>Age:</u> " + age +" year"+"</H2>");
document.writeln("<h2><u>Birth year:</u> " + BOD + "</h2>");