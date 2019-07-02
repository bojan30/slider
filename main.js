const leftArrow = document.getElementById('left');
const rightArrow = document.getElementById('right');
const images = document.getElementsByClassName('slider-images');

//set the display of all images to none;
function reset(){
    for(let i = 0; i < images.length; i++){
        images[i].style.display = 'none';
        images[i].classList.remove('active');
    }
};
reset();

let counter = 0;

images[0].style.display = 'inline';

//event listeners
leftArrow.onclick = prevSlide;
function prevSlide() {
    reset();
    (counter === 0) ? counter = images.length - 1 : counter--;
    images[counter].style.display = 'inline';
    images[counter].classList.add('active');
    resetInterval();
}

rightArrow.onclick = nextSlide;
function nextSlide() {
    reset();
    (counter === images.length - 1) ? counter = 0 : counter++;
    images[counter].style.display = 'inline';
    images[counter].classList.add('active');
    resetInterval();
}

let timer = setInterval(nextSlide, 3000);

function resetInterval(){
    clearInterval(timer);
    timer = setInterval(nextSlide, 3000);
}






