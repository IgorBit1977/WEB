$(function() {
  var imgArray = [
    "./images/img1.jpg",
    "./images/img2.jpg",
    "./images/img3.jpg",
    "./images/img4.jpg",
    "./images/img5.jpg"
  ];

  createGallery(imgArray);

  var $title = $("<h1>").text("Our Gallery");
  $('div').before($title)

  markSpecial();
});

// console.log(widthValue);
function createGallery(imgArray) {
  var $imgGalery = $("<div>");

  for (var i = 0; i < imgArray.length; i++) {
    var widthValue = Math.floor(Math.random() * 300) + "px";
    var $singleImg = $("<img>")
      .attr("src", imgArray[i])
      .css("width", widthValue);

    $imgGalery.append($singleImg);
  }

  $("body").append($imgGalery);
}

function markSpecial() {
  for (var j = 0; j < $imgGalery.length; j++) {
    if (parseInt(widthValue) < 200) {
      $imgGalery[j].css("border", "2px solid green");
    } else {
      return;
    }
  }

  console.log($imgGalery);
}
