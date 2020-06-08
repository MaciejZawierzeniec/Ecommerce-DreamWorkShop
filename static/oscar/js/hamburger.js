const menuBtn = document.querySelector('.menu-btn');
var slideRight = document.querySelectorAll('.slide-right');
var slideLeft = document.querySelectorAll('.slide-left');
var hide = document.querySelectorAll('.hide');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
	if(!menuOpen) {
        for (var i = 0; i < slideRight.length; ++i) {
            hide[i].style.visibility = 'visible';
            slideRight[i].classList.add('open');
            slideLeft[i].classList.add('open');
		    slideLeft[i].classList.remove('close');
		    slideRight[i].style.animationDelay= 1/5*i+'s';
		    if (i == 0){ slideRight[i].style.background= 'rgb(224, 226, 219, 0.98)'; }
		    else if (i == 1){ slideRight[i].style.background= 'rgb(218, 220, 211, 0.98)'; }
		    else if (i == 2){ slideRight[i].style.background= 'rgb(206, 210, 204, 0.98)'; }
		    else if (i == 3){ slideRight[i].style.background= 'rgb(195, 204, 204, 0.98)'; }
        };
        menuBtn.classList.remove('close');
		menuBtn.classList.add('open');
		menuOpen = true;
	} else {
        for (var i = 0; i < slideLeft.length; ++i) {
            slideRight[i].classList.remove('open');
            slideLeft[i].classList.remove('open');
            slideLeft[i].classList.add('close');
        };
        menuBtn.classList.remove('open');
        menuBtn.classList.add('close');
        menuOpen = false;
	}
});

function disable() {

};