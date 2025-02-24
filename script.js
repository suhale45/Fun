const images = [
    { src: "image1.jpg", caption: "Ungu Morgai😂" },
    { src: "image2.jpg" , caption: "Panda Jaisa Urunduleko😁" },
    { src: "image3.jpg", caption: "When Abba Shouts Aafrida🤣" }
];

let currentIndex = 0;
const imgElement = document.getElementById("displayedImage");
const captionElement = document.getElementById("caption");

document.getElementById("prevBtn").addEventListener("click", () => changeImage(-1));
document.getElementById("nextBtn").addEventListener("click", () => changeImage(1));

function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    imgElement.src = images[currentIndex].src;
    captionElement.innerText = images[currentIndex].caption; // Updates caption
}