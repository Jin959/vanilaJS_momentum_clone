const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
];

const chosenImg = images[Math.floor(Math.random()*images.length)];

//creatElement로 생성된 bgImg는 바로 HTML에 추가 되지 않는다.
//appendChild나 prepend method를 이용해야 추가 된다.
const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImg}`;
bgImg.classList.add("bgimg"); //CSS

// console.log(bgImg);
// console.dir(bgImg);

//document.body.appendChild(bgImg);
document.body.appendChild(bgImg);
