function slider(){
    // Slider 

  const slides = document.querySelectorAll('.offer__slide'),
  next = document.querySelector('.offer__slider-next'),
  prev = document.querySelector('.offer__slider-prev'),
  total = document.querySelector('#total'),
  current = document.querySelector('#current'),
  slidesWrapper = document.querySelector('.offer__slider-wrapper'),
  slidesField = document.querySelector('.offer__slider-inner'),
  width = window.getComputedStyle(slidesWrapper).width,
  slider = document.querySelector('.offer__slider');

console.log(width);

let slideIndex = 1;
let offset = 0;

slidesField.style.display = 'flex';
slidesField.style.width = 100 * slides.length + '%';
slidesField.style.transition = '.5s ease all'; 
slidesWrapper.style.overflow = 'hidden';

slides.forEach(slide => {
slide.style.width = width;
})

const indicators = document.createElement('ol');
const dots = [];
indicators.classList.add('carousel-indicators');
slider.append(indicators);

for(let i = 0; i < slides.length; i ++){
const dot = document.createElement('li');
dot.setAttribute('data-slide-to',i+1);
dot.classList.add('carousel-dot');
if(i == 0){
dot.style.opacity = 1;
}
indicators.append(dot);
dots.push(dot);
}

next.addEventListener('click',()=>{
if(offset === +width.slice(0,width.length - 2) * (slides.length - 1)){
offset = 0;
}else{
offset += +width.slice(0,width.length - 2);
}
slidesField.style.transform = `translateX(-${offset}px)`

if(slideIndex===slides.length){
slideIndex = 1;
}else{
slideIndex++;
}

dots.forEach(dot => dot.style.opacity = 0.5);
dots[slideIndex - 1].style.opacity = 1;

})


prev.addEventListener('click',()=>{
if(offset == 0){
offset = +width.slice(0,width.length - 2) * (slides.length - 1);
}else{
offset -= +width.slice(0,width.length - 2);
}

if(slideIndex === 1){
slideIndex = slides.length;
}else{
slideIndex--;
}
slidesField.style.transform = `translateX(-${offset}px)`

dots.forEach(dot => dot.style.opacity = 0.5);
dots[slideIndex - 1].style.opacity = 1;

})
}


export default slider;