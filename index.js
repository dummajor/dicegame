// Dice 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomImage;  //images/dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


// Dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// Rules for the game

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " 🚩Player 1 Wins";

} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}