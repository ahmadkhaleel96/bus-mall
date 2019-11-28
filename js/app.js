'use strict'

var names = ["bag.jpg", "banana.jpg", "bathroom.jpg", "boots.jpg", "breakfast.jpg", "bubblegum.jpg", "chair.jpg", "cthulhu.jpg", "dog-duck.jpg", "dragon.jpg", "pen.jpg", "pet-sweep.jpg", "scissors.jpg", "shark.jpg", "sweep.png", "tauntaun.jpg", "unicorn.jpg", "usb.gif", "water-can.jpg", "wine-glass.jpg"];

var firstImage = document.querySelector('#firstImage');
var secondImage = document.querySelector('#secondImage');
var thirdImage = document.querySelector('#thirdImage');
var imagesSection = document.querySelector('#imagesSelector');


var clicks = 25;


// i used the name function in place of changing the extention i took it from the demo
function Choose(path) {
  var pathArr =path.split(".");
    this.name = pathArr[0];
    this.imagePath = `img/${this.name}.${pathArr[1]}`;
    this.votes = 0;
    this.shows = 0;
    Image.all.push(this);
}
Image.all = [];

for (let i = 0; i < names.length; i++) {
    new Choose(names[i])

}

// i took this funtion from the reveiw and deleted the while loop 
var previousIndexs = [];
function getUniqueIndex() {
  var index = randomNumber(0, Image.all.length - 1);
  while (previousIndexs.includes(index)) {
    index = randomNumber(0, Image.all.length - 1);
    }
  previousIndexs.push(index);
  
  if (previousIndexs.length > 3) {
    previousIndexs.shift();
    console.log('hello', previousIndexs)

  }
  return index;
}

// the image render function
function render() {
    var leftOne = Image.all[getUniqueIndex()];
    var middleOne = Image.all[getUniqueIndex()];
    var rightOne = Image.all[getUniqueIndex()];
    

    
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

// i put the chart and list render functions togeather just like the review i used the chart construction used in the review beacause it is much much cleaner and easier to follow. 
function renderListAndChart(){
  var votes = []; //to push the votes for the chart.
  var views = []; // to push the views for the chart.
  var labels = []; // to add the votes and views for each label.

  // the list render function and pushed the data for the labels (votes and veiws).
  var container = document.getElementById('list');
    var ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (var i = 0; i <= names.length -1 ; i++){
      var liEl = document.createElement('li');
        liEl.textContent =`${names} had ${Image.all[i].votes} votes and was shown ${Image.all[i].shows} times`;
        console.log('gfgccf',Image.all[i])
        ulEl.appendChild(liEl);
        labels.push(Image.all[i].name);
        votes.push(Image.all[i].votes);
        views.push(Image.all[i].shows);
    }

    // the chart function i used the chart function format from the review because it is much cleaner.

    var ctx = document.getElementById("chart").getContext("2d");
    var voteData = {
      label: "# of Votes",
      data: votes,
      backgroundColor: "#666666"
    };
  
    var viewsData = {
      label: "# of Views",
      data: views,
      backgroundColor: "#000000"  
    };
  
    var labelsInfo = {
      labels: labels,
      datasets: [voteData, viewsData]
    };
  
    var chartOptions = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    };
  
    var myChart = new Chart(ctx, {
      type: "bar",
      data: labelsInfo,
      options: chartOptions
    });
  }
    

  // the event listener that works for 25 times
  function handleClick(e) {
      clicks--;
              if (clicks === 0 ){
                  imagesSelection.removeEventListener('click', handleClick);
                  renderListAndChart();
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
function randomNumber(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(random)
    return random

}