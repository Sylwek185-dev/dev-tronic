const hamburgerBtn = document.querySelector('.hamburger'); //button hamburger
const mobileMenu = document.querySelector('.nav__mobile-menu'); //white menu mobile
const allNavItems = document.querySelectorAll('.nav-link');

const toggle = () => {
	hamburgerBtn.classList.toggle('is-active'); //toggle button X
	mobileMenu.classList.toggle('activating'); //toggle mobile menu
	document.body.classList.toggle('hide-body');

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			mobileMenu.classList.remove('activating');
			hamburgerBtn.classList.remove('is-active');
		});
	});

	// allNavItems.forEach((item) => {
	// 	item.addEventListener('click', () => {});
	// });
};

hamburgerBtn.addEventListener('click', toggle, { passive: true });



//---------------------------------
//scroll color

jQuery.event.special.touchstart = {
	setup: function (_, ns, handle) {
		this.addEventListener('touchstart', handle, {
			passive: !ns.includes('noPreventDefault'),
		});
	},
};
jQuery.event.special.touchmove = {
	setup: function (_, ns, handle) {
		this.addEventListener('touchmove', handle, {
			passive: !ns.includes('noPreventDefault'),
		});
	},
};
jQuery.event.special.wheel = {
	setup: function (_, ns, handle) {
		this.addEventListener('wheel', handle, { passive: true });
	},
};
jQuery.event.special.mousewheel = {
	setup: function (_, ns, handle) {
		this.addEventListener('mousewheel', handle, { passive: true });
	},
};

//---------------------------------
//date

const date = document.querySelector('.date');

const actualYear = new Date().getFullYear();
date.innerHTML = actualYear;
