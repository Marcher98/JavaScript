/*
* this script assumes that user brings player to correct spot
* with correct gear and inventory 
* for bot to go through a whole corp trip
*/ 

//hp color loc 1431,592
//1260, 700 is corp coord on my screen

var robot = require("robotjs");
var corpX = 1260;
var corpY = 700;
var healthX = 1431;
var healthY = 592;
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
    }
    
}

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
function attackCorp(corpX, corpY) {

    robot.mouseClick(corpX, corpY);
    while (corpIsAlive()) {
        checkHealth();
        checkPrayer();
    }
}

function corpIsAlive() {
    var img = robot.screen.capture(0, 0, 1920, 1080);
    var pixel_color = img.colorAt(corpX, corpY);
    if (pixel_color = corpColor) { //color at corpx, corpy is corp color, = true
        true;
    } else {
        false;
    }
}

function checkHealth() {
    var img = robot.screen.capture(0, 0, 1920, 1080);
    var pixel_color = img.colorAt(healthX, healthY);
    if (pixel_color = healthColor) { //color at healthx, healthy is health color, = health is low
        true;
    } else {
        false;
    }
}

function checkPrayer() {
    var img = robot.screen.capture(0, 0, 1920, 1080);
    var pixel_color = img.colorAt(prayX, prayY);
    if (pixel_color = corpColor) { //color at prayx, prayy is pray color, = prayer is low
        true;
    } else {
        false;
    }
}

main();