function greet() {
    for(let i = 1; i <= 6; i++) {
    document.writeln("<h"+i+">Welcome to the Basic HTML Page!"+"</h"+i+">");
}
}
greet();

function todayTemperature(degree) {
degree >= 30 ? document.writeln("HOT DAY") : document.writeln("COLD DAY");
}
todayTemperature(35);
