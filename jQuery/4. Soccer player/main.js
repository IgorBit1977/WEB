var $field = $(".field");
var $player = $("#player");
var $button = $("#button");

$button.on('click', restartMoving);

function changePosition(e) {

    var xPosition = e.clientX;
    var yPosition = e.clientY;

    $player.css({ left: (xPosition - 50) + 'px' });
    $player.css({ top: (yPosition - 50) + 'px' });

}

var changeStatus = false;

function restartMoving(e) {
    e.stopPropagation();

    if (changeStatus) {

        $field.off('click', changePosition);
        $button.text("Start moving");
        changeStatus = false;

    } else {

        $field.on('click', changePosition);
        changeStatus = true;
        $button.text("Stop moving");
    }
}