'use strict'

var names = ["bag", "banana", "bathroom", "boots", "breakfast", "bubblegum", "chair", "cthulhu", "dog-duck", "dragon", "pen", "pet-sweep", "scissors", "shark", "sweep", "tauntaun", "unicorn", "usb", "water-can", "wine-glass"];

var firstImage = document.querySelector('#firstImage');
var secondImage = document.querySelector('#secondImage');
var thirdImage = document.querySelector('#thirdImage');
var imagesSection = document.querySelector('#imagesSelector');
var shown = 0;
var choosen = 0;
var clicks = 0;

function Choose(name) {
    this.name = name,
        this.imagePath = `img/${name}.jpg`;
    Image.all.push(this);
}
Image.all = [];

for (let i = 0; i < names.length; i++) {
    new Choose(names[i])

}
// the image render function
function render() {
    var leftOne = Image.all[randomNumber(0, Image.all.length - 1)];
    var middleOne = Image.all[randomNumber(0, Image.all.length - 1)];
    var rightOne = Image.all[randomNumber(0, Image.all.length - 1)];
    while (leftOne == middleOne || leftOne == rightOne || middleOne == rightOne) {
        var leftOne = Image.all[randomNumber(0, Image.all.length - 1)];
        var middleOne = Image.all[randomNumber(0, Image.all.length - 1)];
        var rightOne = Image.all[randomNumber(0, Image.all.length - 1)];
    }
    firstImage.setAttribute("src", leftOne.imagePath);
    firstImage.setAttribute("alt", leftOne.name);
    firstImage.setAttribute("title", leftOne.name);

    secondImage.setAttribute("src", middleOne.imagePath);
    secondImage.setAttribute("alt", middleOne.name);
    secondImage.setAttribute("title", middleOne.name);

    thirdImage.setAttribute("src", rightOne.imagePath);
    thirdImage.setAttribute("alt", rightOne.name);
    thirdImage.setAttribute("title", rightOne.name);
}
render();

// the event listener that works for 25 times
imagesSelection.addEventListener('click', function (e) {
    console.log(event.target.id);
    if (clicks >= 25) {
        clicks.setEnabled(false);
    }
    clicks++;

    if (event.target.id !== "imagesSelection") {
        render();
    }
});

// the random function
function randomNumber(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(random)
    return random
}
