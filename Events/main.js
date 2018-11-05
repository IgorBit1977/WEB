var b = document.querySelector(".firstDiv");

var button = document.querySelector(".firstButton");



// button = function() {
//     //b.classList.toggle("active");
//   };

var $auto = document.querySelector(".automatic");

 $auto = function myFunction() {
    setInterval(function(){ b.classList.toggle("active")}, 1000);
}
button = function myStopFunction() {
    clearInterval($auto);
}



function toggleBackground() {
    $body.classList.toggle('nolight');
}

var hasRunningInterval;

function toggleAuto() {
    if (hasRunningInterval === undefined) {
        hasRunningInterval = setInterval(toggleBackground, 1000);
    } else {
        clearInterval(hasRunningInterval);
        hasRunningInterval = undefined;
    }
}

