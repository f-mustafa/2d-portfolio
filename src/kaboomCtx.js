import kaboom from "kaboom";

export const k = kaboom({
//don't make kaboom global
    global: false, 
    //translate touch commands to click events by keeping mouse and mobile in mind
    touchToMouse: true,
    canvas: document.getElementById("game"),
    debug: false,
});