var menu = document.querySelector('.top'),
slides = document.querySelector('.is-selected');
height = slides.clientHeight;

console.log(height);




window.addEventListener('scroll', function (){


if ( this.pageYOffset >= height ) {
menu.classList.add('sticky');
} else {

menu.classList.remove('sticky')

}
console.log(this.pageYOffset);

})



var nav = document.querySelector('.nav-collapse'),

navList = nav.firstElementChild,

link = document.createElement('a');


nav.appendChild(link);

link.setAttribute('href', '#');

link.classList.add('hamburger');

link.innerHTML = '<span>Menu</span';


var hamburger = document.querySelector('.hamburger')


navList.classList.add('accessibly-hidden');

hamburger.addEventListener('click', function (e){

e.preventDefault();
navList.classList.toggle('accessibly-hidden');

});