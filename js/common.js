$(document).ready(function () {
	$('.tab-content:first').show();
	$('.tabs-nav li:first').addClass('active');

	$('.tabs-nav li').click(function () {
		index = $(this).index();
		$('.tabs-nav li').removeClass('active');
		$(this).addClass('active');
		$('.tab-content').hide();
		$('.tab-content').eq(index).show();
	});

	$('.nav-toggle').click(function () {
		$(this).toggleClass('active');
		$('.gnav').toggleClass('is-show');

	});




	$('.sliding-row').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		variableWidth: true,
		slidesToScroll: 3,
		arrows: true,
		responsive: [
			{
				breakpoint: 1161,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 9,
					infinite: true,
					dots: true,
					centerMode: true,
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 9,
					infinite: true,
					dots: true,
					centerMode: true,
				}
			}
		]
	});
});

