const images = [
    "0.png", "1.png", "2.png", "3.png", "4.png","5.png" ,"6.png", "7.png",
    "8.png", "9.png", "10.png", "11.png"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// JavaScript 변수를 사용하여 body의 배경 이미지를 설정합니다.
document.body.style.backgroundImage = `url('img/${chosenImage}')`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.height = '100vh';
document.body.style.margin = '0';

//const bgImage = document.createElement("img");

//bgImage.src = `img/${chosenImage}`;

//document.body.appendChild(bgImage);