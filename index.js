/*
* this script assumes that user brings player to correct spot
* with correct gear and inventory 
* for bot to go through a whole corp trip
*/ 

//hp color loc 1431,592
//1260, 700 is corp coord on my screen
1429,625
var robot = require("robotjs");
var corpX = 1260;
var corpY = 700;
var healthX = 1431;
var healthY = 592;
var prayX = 1429;
var prayY = 625;
var corpColor; //value still needed
var healthColor; //value still needed, color of hp text when 65 hp

function main() {
    console.log("Starting application...")
    while (true) {
        checkHealth();
        checkPrayer();
        if (corpIsAlive() = true) {
            robot.attackCorp(corpX, corpY);
        } else {
            sleep(1500);
        }
        sleep(1500);
    }
}

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function attackCorp(corpX, corpY) {
    robot.mouseClick(corpX, corpY);
}

function corpIsAlive() {
    var img = robot.screen.capture(0, 0, 1920, 1080);
    var pixel_color = img.colorAt(corpX, corpY);
    console.log("Corp color is: " + pixel_color);
    if (pixel_color = corpColor) { //color at corpx, corpy is corp color, = true
        true;
    } else {
        false;
    }
}

function checkHealth() {
    var img = robot.screen.capture(0, 0, 1920, 1080);
    var pixel_color = img.colorAt(healthX, healthY);
    console.log("Health color is: " + pixel_color);
    if (pixel_color = healthColor) { //color at healthx, healthy is health color, = health is low
        console.log("Health is low.")
        true;
    } else {
        false;
    }
}

function checkPrayer() {
    var img = robot.screen.capture(0, 0, 1920, 1080);
    var pixel_color = img.colorAt(prayX, prayY);
    console.log(pixel_color);
    if (pixel_color = corpColor) { //color at prayx, prayy is pray color, = prayer is low
        console.log("Prayer is low");
        true;
    } else {
        false;
    }
}

main();