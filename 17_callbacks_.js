function do_assignment(callback) {
    console.log("I am Doing assignment and it is done now...");
    callback();
}

function copy_assignment() {
    console.log("Hey bro.. Thank you. Let me copy");
}

do_assignment(copy_assignment);


function display() {
    console.log("display function");
}



setInterval(display, 2000);
setTimeout( display, 4000);










function display() {
    console.log("display function");
}

setInterval( display, 2000);
