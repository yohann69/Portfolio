"use strict";
/*------------------------------------------------
					Project Name
			  ~ Written By @Yohann69 ~
-----------------------v0.1---------------------*/


console.log("Welcome on Project Name");
console.log("This project has been created by @Yohann69");

function log(object) {
	console.log(object);
}
/*------------------------------------------------------------
					~ New Section ~
------------------------------------------------------------*/


function fillemail() {

	const subject = document.querySelector('.subject').value;
	const message = document.querySelector('.message').value;
	const email = document.querySelector('.emailaddress');

	email.href = `mailto:yohann@chavanel.eu.org?subject=${subject}&body=${message}`;

	email.click();

}



/*------------------------------------------------------------
					~ Hamburger Menu ~
------------------------------------------------------------*/

let ouvert = false;
const menu = document.querySelector('nav>section');

function hamburgerMenu() {
	if (ouvert) {
		menu.classList.add('hidden');
		ouvert = false;
	} else {
		menu.classList.remove('hidden');
		ouvert = true;
	}
}

const menuLinks = document.querySelectorAll('nav>section>a');



for (let i = 0; i < menuLinks.length; i++) {
	menuLinks[i].addEventListener('click', closeMenu)
}

function closeMenu() {

	if (window.innerWidth < 980) {
		menu.classList.add('hidden');
		ouvert = false;
	}
}


if (window.innerWidth > 980) {
	menu.classList.remove('hidden');
}


/*------------------------------------------------------------
					~ Animate text ~
------------------------------------------------------------*/


let TxtRotate = function (el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
	let i = this.loopNum % this.toRotate.length;
	let fullTxt = this.toRotate[i];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

	let that = this;
	let delta = 300 - Math.random() * 100;

	if (this.isDeleting) { delta /= 3; }

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
	}

	setTimeout(function () {
		that.tick();
	}, delta);
};

window.onload = function () {
	let elements = document.getElementsByClassName('txt-rotate');
	for (var i = 0; i < elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-rotate');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TxtRotate(elements[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	let css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
	document.body.appendChild(css);
};