const images = ['0.jpeg', '1.jpeg', '2.png', '3.jpeg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const movieScreen = document.getElementById('movie_screen');
//const bgImage = document.createElement("img");

//bgImage.src = `img/${chosenImage}`;

//document.body.appendChild(bgImage);
function addBackground() {
  movieScreen.style.backgroundImage = `url(img/${chosenImage})`;
}
addBackground();
