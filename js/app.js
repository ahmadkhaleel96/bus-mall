'use strict'

var names = ["bag", "banana", "bathroom", "boots", "breakfast", "bubblegum", "chair", "cthulhu", "dog-duck", "dragon", "pen", "pet-sweep", "scissors", "shark", "sweep", "tauntaun", "unicorn", "usb", "water-can", "wine-glass"];

var firstImage = document.querySelector('#firstImage');
var secondImage = document.querySelector('#secondImage');
var thirdImage = document.querySelector('#thirdImage');
var imagesSection = document.querySelector('#imagesSelector');

var clicks = 25;

function Choose(name) {
    this.name = name;
    this.imagePath = `img/${name}.jpg`;
    this.votes = 0;
    this.shows = 0;
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
    
    leftOne.shows++;
    middleOne.shows++;
    rightOne.shows++;

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

imagesSelection.addEventListener('click', handleClick);


// the event listener that works for 25 times
function handleClick(e) {
    clicks--;
            if (clicks === 0 ){
                imagesSelection.removeEventListener('click', handleClick);
                renderList();
            }
    if (e.target.id !== "imagesSelection") {
        for (var i = 0; i < Image.all.length; i++) {
            if (e.target.title === Image.all[i].name) {
                Image.all[i].votes++;
            }
        }
        // console.table(Image.all);
        
    }
    render();
}
function renderList(){
    var container = document.getElementById('list');
    var ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (var i = 0; i <= names.length; i++){
        var liEl = document.createElement('li');
        liEl.textContent =`${names[i]} had ${Image.all[i].votes} votes and was shown ${Image.all[i].shows} times`;
        ulEl.appendChild(liEl);
    }
}
function randomNumber(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(random)
    return random

}


