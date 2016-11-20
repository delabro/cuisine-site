window.addEventListener('load', function() {
  

    var elem = document.querySelector('.flickity');
    var flkty = new Flickity(elem, {
        contain: true,
        wrapAround: true,
        autoPlay: 6000,
        selectedAttraction: 0.01,
        friction: 0.2
            // lower attraction and lower friction
            // slower transitions
            // easier to flick past cells
            // advance cells every 3 seconds
    });
    


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
});