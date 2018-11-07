

$('li:first').css('border-bottom','2px solid red');
$('li').addClass('text');
$('li:last').addClass('active');
// $('li.active').find('li-middle').addClass('background');
var $listItems = $('li');
var middle =($listItems.length - 1)/2;
$listItems.eq(middle).addClass('background'); 
