//------------------------
//FEATURES

$('.customers__carousel').slick({
	centerMode: true,
	autoplay: true,
	centerPadding: '60px',
	slidesToShow: 5,
	arrows: false,

	speed: 9000,
	autoplaySpeed: 0,
	cssEase: 'linear',

	responsive: [
		{
			breakpoint: 992,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 576,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '100px',
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1,
			},
		},

		{
			breakpoint: 380,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 2,
			},
		},
	],
});

//------------------------
//OPINIONS

$('.opinions__carousel').slick({
	centerPadding: '60px',
	slidesToShow: 3,
	arrows: false,
	autoplay: true,
	infinite: true,
	speed: 9000,

	responsive: [
		{
			breakpoint: 1440,
			settings: {
				centerPadding: '40px',
				slidesToShow: 3,
				focusOnSelect: true,
			},
		},
		{
			breakpoint: 1024,
			settings: {
				centerPadding: '100px',
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 768,
			settings: {
				centerPadding: '500px',
				slidesToShow: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				centerPadding: '0px',
				slidesToShow: 1,
			},
		},

		{
			breakpoint: 350,
			settings: {
				arrows: false,
				centerPadding: '0px',
				slidesToShow: 1,
			},
		},
	],
});
