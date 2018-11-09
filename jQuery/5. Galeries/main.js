

var $body = $("body");
var $prvi = $('.prviDiv');
var $drugi = $('.drugiDiv');

$body.on('click', findClass);
$body.on('click', addClass);

function findClass() {
    $prvi.children("img").siblings(".selected").removeClass();
}

function addClass() {
    var $leng = ($drugi.children('img').length - 1) / 2;

    $drugi.children("img").eq($leng).addClass("selected");
}

