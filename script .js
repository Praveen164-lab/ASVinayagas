const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Replace with your image paths
let currentIndex = 0;

const swappingImage = document.getElementById("swappingImage");

function swapImage() {
  currentIndex = (currentIndex + 1) % images.length;
  swappingImage.src = images[currentIndex];
}

setInterval(swapImage, 3000); // Change image every 3 seconds
