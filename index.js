document.querySelector("button").addEventListener("click", button)
document.addEventListener("keypress",button)




function button () {
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomimagesrc = "images/dice" + randomNumber1 + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomimagesrc);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomimagesrc = "images/dice" + randomNumber2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomimagesrc);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML= " 🚩 Player 1 wins";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML= "Player 2 wins 🚩";
}
else {
    document.querySelector("h1").innerHTML= "Tie";
}

}



