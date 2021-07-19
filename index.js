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
    if () { //color at corpx, corpy is corp color, = true
        true;
    } else {
        false;
    }
}

function checkHealth() {
    if () { //color at healthx, healthy is health color, return true, otherwise false
        true;
    } else {
        false;
    }
}

function checkPrayer() {
    if () { //color at prayerx, prayery is prayer color, return true, otherwise false
        true;
    } else {
        false;
    }
}

main();