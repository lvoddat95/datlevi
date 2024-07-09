$(function () {
	if ($('#dok-header-top').length > 0) {
		$('.dok-header-item').hover(
			function () {
				$('.dok-header-overlay').addClass('active');
				$(this).closest('#dok-header-top').find('#menu-main').attr('style', '');
			},
			// function() {
			// 	$('.dok-header-overlay').removeClass('active');
			// }
		);

		$('.dok-header-item-mobile').click(function () {
			$(this).toggleClass('active');
			$(this).closest('#dok-header-top').find('#menu-main').toggleClass('active');
		});

		$('.dok-header-overlay').click(function () {
			$(this).removeClass('active');
			$('#dok-header-top').find('#menu-main').css("display", "none");
		});

		$('.dok-menu-mobile-close').click(function () {
			$('.dok-header-item-mobile').removeClass('active');
			$('#menu-main').removeClass('active');
		});
	};

	if ($('.dok-categories-info').length > 0) {
		$('.show').click(function () {
			const desc = $('.short');
			desc.removeAttr('style').removeClass('short').addClass('full').css({
				'max-height': '100%',
				'overflow-y': 'hidden',
			});
			$(this).hide();
		});
	}

	if ($('#dok_filter_total').length > 0) {
		$('#dok_filter_total').on('show.bs.collapse', function () {
			$("body").addClass("overlay-filter");
			$('html, body').animate({
				scrollTop: $(".dok-combination").offset().top
			}, 500);
		});
		$('#dok_filter_total').on('hide.bs.collapse', function () {
			$("body").removeClass("overlay-filter");
		});

		$(".close-popup-total").click(function (e) {
			e.preventDefault();
			$('#dok_filter_total').collapse('hide');
		});
	};

	$('.comment-btn__item blue').on('click', function () {
		$('.read-assess').addClass('showR');
		return false;
	});


	if ($('[data-sticky]').length > 0) {
		var sticky = new Sticky('[data-sticky]');
	};

	if ($('.ftoc').length > 0) {
		$(".btn-toc").on("click", function () {
			$(".ftoc").toggleClass("open");
		});

		// if($(this).width() <= 1600){
		//     $(".ftoc").removeClass('open');
		// }

		$(window).resize((event) => {
			const screenWidth = window.screen.width;
			let windowWidth = $(this).width();
			// Window width
			if (windowWidth <= 1600) {
				$(".ftoc").removeClass("open");
			} else {
				$(".ftoc").addClass("open");
			}
			// Window width
			if (screenWidth <= 1600) {
				$(".ftoc").removeClass("open");
			}
		});

		if ($(".toc").length > 0) {
			var toc = document.querySelector(".toc");
			var tocPath = document.querySelector(".toc-marker path");
			var tocItems;

			// Factor of screen size that the element must cross
			// before it's considered visible
			var TOP_MARGIN = 0.1,
				BOTTOM_MARGIN = 0.2;

			var pathLength;

			var lastPathStart, lastPathEnd;

			window.addEventListener("resize", drawPath, false);
			window.addEventListener("scroll", sync, false);

			drawPath();

			function drawPath() {
				tocItems = [].slice.call(toc.querySelectorAll("li"));

				// Cache element references and measurements
				tocItems = tocItems.map(function (item) {
					var anchor = item.querySelector("a");
					var target = document.getElementById(
						anchor.getAttribute("href").slice(1)
					);

					return {
						listItem: item,
						anchor: anchor,
						target: target,
					};
				});

				// Remove missing targets
				tocItems = tocItems.filter(function (item) {
					return !!item.target;
				});

				var path = [];
				var pathIndent;

				tocItems.forEach(function (item, i) {
					var x = item.anchor.offsetLeft - 5,
						y = item.anchor.offsetTop,
						height = item.anchor.offsetHeight;

					if (i === 0) {
						path.push("M", x, y, "L", x, y + height);
						item.pathStart = 0;
					} else {
						// Draw an additional line when there's a change in
						// indent levels
						if (pathIndent !== x) path.push("L", pathIndent, y);

						path.push("L", x, y);

						// Set the current path so that we can measure it
						tocPath.setAttribute("d", path.join(" "));
						item.pathStart = tocPath.getTotalLength() || 0;

						path.push("L", x, y + height);
					}

					pathIndent = x;

					tocPath.setAttribute("d", path.join(" "));
					item.pathEnd = tocPath.getTotalLength();
				});

				pathLength = tocPath.getTotalLength();

				sync();
			}

			function sync() {
				var windowHeight = window.innerHeight;

				var pathStart = pathLength,
					pathEnd = 0;

				var visibleItems = 0;

				tocItems.forEach(function (item) {
					var targetBounds = item.target.getBoundingClientRect();

					if (
						targetBounds.bottom > windowHeight * TOP_MARGIN &&
						targetBounds.top < windowHeight * (1 - BOTTOM_MARGIN)
					) {
						pathStart = Math.min(item.pathStart, pathStart);
						pathEnd = Math.max(item.pathEnd, pathEnd);

						visibleItems += 1;

						item.listItem.classList.add("visible");
					} else {
						item.listItem.classList.remove("visible");
					}
				});

				// Specify the visible path or hide the path altogether
				// if there are no visible items
				if (visibleItems > 0 && pathStart < pathEnd) {
					if (pathStart !== lastPathStart || pathEnd !== lastPathEnd) {
						tocPath.setAttribute("stroke-dashoffset", "1");
						tocPath.setAttribute(
							"stroke-dasharray",
							"1, " + pathStart + ", " + (pathEnd - pathStart) + ", " + pathLength
						);
						tocPath.setAttribute("opacity", 1);
					}
				} else {
					tocPath.setAttribute("opacity", 0);
				}

				lastPathStart = pathStart;
				lastPathEnd = pathEnd;
			}
		}
	}



	var swiper = new Swiper(".dok-product-thumbnail", {
		slidesPerView: 'auto',
		spaceBetween: 10,
		loop: true,
		slideToClickedSlide: true,
	});
	var swiper2 = new Swiper(".dok-product-img-main", {
		spaceBetween: 10,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: swiper,
		},
	});


	if ($('[data-fancybox="gallery"]').length > 0) {
		Fancybox.bind('[data-fancybox="gallery"]', {
			// Your custom options
		});
	}

	if ($('[data-fancybox="review"]').length > 0) {
		Fancybox.bind('[data-fancybox="review"]', {
			// Your custom options
		});
	}

	if ($('[data-fancybox="video"]').length > 0) {
		Fancybox.bind('[data-fancybox="video"]', {
			// Your custom options
		});
	}

	if ($(".dok-adv-slider").length > 0) {
		var main_slider = new Swiper(".dok-adv-slider", {
			slidesPerView: 1,
			loop: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	}



	if ($(".dok-products-slider").length > 0) {
		var product_slider = new Swiper(".dok-products-slider", {
			slidesPerView: 2,
			spaceBetween: 0,
			loop: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				640: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 5,
				},
			},
		});
	}


	if ($(".dok-brand-list").length > 0) {
		var brand_slider = new Swiper(".dok-brand-list", {
			slidesPerView: 4,
			spaceBetween: 16,
			freeMode: true,
			pagination: {
				el: ".swiper-pagination",
				type: "progressbar",
				clickable: true
			},
			breakpoints: {
				640: {
					slidesPerView: 4,
				},
				768: {
					slidesPerView: 6,
				},
				1024: {
					slidesPerView: 8,
				},
			},
		});
	};

	if ($(".dok-category-list").length > 0) {
		var category_slider = new Swiper(".dok-category-list", {
			slidesPerView: 3,
			spaceBetween: 16,
			freeMode: true,
			pagination: {
				el: ".swiper-pagination",
				type: "progressbar",
				clickable: true
			},
			breakpoints: {
				640: {
					slidesPerView: 4,
				},
				768: {
					slidesPerView: 6,
				},
				1024: {
					slidesPerView: 8,
				},
			},
		});
	};

	if ($(".dok-partner-list").length > 0) {
		var partner_slider = new Swiper(".dok-partner-list", {
			slidesPerView: 1,
			spaceBetween: 16,
			loop: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				640: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				},
			},
		});
	};


	var swiper = new Swiper(".nav-newscate", {
		slidesPerView: "auto",
		freeMode: true,
	});

	// Len dau trang
	$(".go-top").on("click", function () {
		$("html, body").animate({
			scrollTop: 0,
		},
			500
		);
	});

	$(document).on("click", "#clickShowSendReview", function () {
		$("#dok_review_pdp_show_npv").css("display", "none");
		$("#clickShowSendReview").css("display", "none");
		$("#send_vote_npv").css("display", "flex");
		$(".wrap_post_composer_pdp").css("display", "block");
	});

});


// Mobile JS
$(function () {
	if ($('#dok_filter_total').length > 0) {
		$('#dok_filter_total').on('show.bs.collapse', function () {
			$("body").addClass("overlay-filter");
		});
		$('#dok_filter_total').on('hide.bs.collapse', function () {
			$("body").removeClass("overlay-filter");
		});

		$(".close-popup-total").click(function (e) {
			e.preventDefault();
			$('#dok_filter_total').collapse('hide');
		});
	};

	if ($('[data-sticky]').length > 0) {
		var sticky = new Sticky('[data-sticky]');
	};


	if ($(".dok-mb-banner-slider").length > 0) {
		var main_slider = new Swiper(".dok-mb-banner-slider", {
			slidesPerView: 1,
			loop: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	}

	if ($(".dok-mb-category-slider").length > 0) {
		var category_slider = new Swiper(".dok-mb-category-slider", {
			slidesPerView: 4,
			spaceBetween: 5,
			freeMode: true,
			pagination: {
				el: ".cate-swiper-pagination",
				type: "progressbar",
			},
		});
	};



	if ($(".dok-mb-products-slider").length > 0) {
		var product_slider = new Swiper(".dok-mb-products-slider", {
			slidesPerView: 2,
			spaceBetween: 10,
			loop: false,
			navigation: {
				nextEl: ".mb-products-button-next",
				prevEl: ".mb-products-button-prev",
			},
			breakpoints: {
				640: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 4,
					spaceBetween: 10,
				},
				1024: {
					slidesPerView: 5,
					spaceBetween: 10,
				},
			},
		});
	}

	// Lấy thẻ div cần theo dõi
	const product_acts = document.querySelector('#product-actions-fieldset');
	if ($(product_acts).length > 0) {
		// Lắng nghe sự kiện cuộn
		window.addEventListener('scroll', () => {
			if (isInViewport(product_acts)) {
				document.body.classList.remove('show-buynow');
			} else {
				document.body.classList.add('show-buynow');
			}
		});

		// Hàm kiểm tra xem một phần tử có hiển thị trên màn hình hay không
		function isInViewport(element) {
			const rect = element.getBoundingClientRect();
			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
				rect.right <= (window.innerWidth || document.documentElement.clientWidth)
			);
		}
	}

});

function do_active_slt(elem) {
	// get all 'a' elements
	var li = document.querySelectorAll('ul.ul-star > li');
	// loop through all 'a' elements
	for (i = 0; i < li.length; i++) {
		// Remove the class 'active' if it exists
		li[i].classList.remove('active-slt')
	}
	// add 'active' classs to the element that was clicked
	elem.classList.add('active-slt');
}

var showInputRating = function () {
	$(".read-assess").show();
	$("body").addClass("overlay");
}

var hideInputRating = function () {
	$(".read-assess").hide();
	$("body").removeClass("overlay");
}

var show_search_box = function (p_this) {
	$(p_this).focus();
	$("#dok_mb_search").show();
}

var hide_search_box = function (p_this) {
	$(p_this).focus();
	$("#dok_mb_search").hide();
}
var likeRating = function () {
	$(".click-like").find("i").removeClass('icondetail-likewhite');
	$(".click-like").find("i").addClass('icondetail-like');
}

var showRatingCmtChild = function (pid) {
	$(".r" + pid).show();
}
var ratingRelply = function (pid) {
	$(".rRepPopup").show();
	$("body").addClass("overlay");
}
var hideReplyConfirmPopup = function (pid) {
	$(".rRepPopup").hide();
	$("body").removeClass("overlay");
}