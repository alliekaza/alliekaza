var currentImage = document.getElementById("current-image");

var imageThumbs = document.getElementById("image-thumbs");

var maxIndex = 3
var jump = 5
var index = maxIndex;
var w = window.innerWidth;
var amount = 9;
if (w < 576){
    amount = 4;
};

function showPics(index) {

    // clean up thumbnails and pics
    imageThumbs.innerHTML = "";

    // show left arrow
    var arrow = document.createElement("img");
    arrow.src = "gallery/leftArrow.svg";
    arrow.alt = "load previous 10 images";
    arrow.classList.add("arrow");
    imageThumbs.appendChild(arrow);

    if (index < maxIndex) {
        arrow.addEventListener(
          "click", function() {
             if (index + jump > maxIndex){
                showPics(maxIndex)
             } else {
                showPics(index + jump);
             }
          }
        );
    } else {
        arrow.style.visibility="hidden";
    }


    // add images
    for (var i = index; i >= index - amount; i--) {
        var thumb = document.createElement("img");
        thumb.src = "gallery/image" + i + ".webp";
        thumb.alt = "Image " + i;
        thumb.classList.add("thumb");
        imageThumbs.appendChild(thumb);

        thumb.addEventListener(
          "click", function() {
                currentImage.src = this.src;
                currentImage.alt = this.alt;
          }
        );
    }

    // show right arrow
    var arrow = document.createElement("img");
    arrow.src = "gallery/leftArrow.svg";
    arrow.alt = "load next 10 images";
    arrow.classList.add("rightArrow");
    imageThumbs.appendChild(arrow);
    if (index > amount+1) {
        arrow.addEventListener(
          "click", function() {
             if (index - jump < amount+1) {
                showPics(amount+1)
             } else {
                showPics(index - jump);
             }
          }
        );
    } else {
        arrow.style.visibility="hidden";
    }
}

showPics(index);
