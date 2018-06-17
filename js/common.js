



	$(".header__nav-opener").click(function () {
		$(this).addClass("header__nav-opener--opened");
		$(".header__nav").addClass("header__nav--opened");
	});

	$(".header__nav-close, .header__nav-list a").click(function () {
		$(".header__nav-opener").removeClass("header__nav-opener--opened");
		$(".header__nav").removeClass("header__nav--opened");
	});


