$(function () {
	if ($("#menu-nav").length > 0) {
		if (typeof hcOffcanvasNav == "undefined") {
			console.warn("Warning - hcOffcanvasNav Js is not loaded.");
			return;
		}
		if ($(".navbar-toggle").length == 0) {
			console.warn("Warning - Thieu button navbar-toggle. Kiem tra lai HTML!");
			return;
		}
		var $nav = $("#menu-nav").hcOffcanvasNav({
			disableAt: 1200,
			customToggle: ".navbar-toggle",
			levelSpacing: 0,
			levelTitles: true,
			levelTitleAsBack: true,
			labelBack: "Quay lại",
			labelClose: "",
			// expanded: true,
			levelOpen: "expand",
		});
		var Nav = $nav.data("hcOffcanvasNav");
	}

	if ($(".ct-choose-number-user").length > 0) {
		$('.ct-choose-number-user-label').click(function (e) {
			$('.box-popup-number-user').addClass('open-box');
		});
		$('body').click(function (e) {
			var eventTarget = e.target;
			var listenClick = '.imt-otp-filter';
			if ($(eventTarget).parents(listenClick).length != 1) {
				$('.box-popup-number-user').removeClass('open-box');
			}
		});

		$('#bookHomeCustomerAccept').click(function (e) {
			$('.box-popup-number-user').removeClass('open-box');
			$("#NumberPassengers").text(getTextBookingPeople(true));
		});

		$('#bookHomeCustomerAdultPlus').click(function (e) {
			$(this).parent().find("#bookHomeCustomerAdultValue").val(getValue('bookHomeCustomerAdultValue') + 1);
		});
		$('#bookHomeCustomerAdultMinus').click(function (e) {
			let temp = getValue('bookHomeCustomerAdultValue') - 1;
			if (temp >= 0)
				$("#bookHomeCustomerAdultValue").val(temp);
		});

		$('#bookHomeCustomerChildPlus').click(function (e) {
			$("#bookHomeCustomerChildValue").val(getValue('bookHomeCustomerChildValue') + 1);
		});
		$('#bookHomeCustomerChildMinus').click(function (e) {
			let temp = getValue('bookHomeCustomerChildValue') - 1;
			if (temp >= 0)
				$("#bookHomeCustomerChildValue").val(temp);
		});

		$('#bookHomeCustomerBabyPlus').click(function (e) {
			$("#bookHomeCustomerBabyValue").val(getValue('bookHomeCustomerBabyValue') + 1);
		});
		$('#bookHomeCustomerBabyMinus').click(function (e) {
			let temp = getValue('bookHomeCustomerBabyValue') - 1;
			if (temp >= 0)
				$("#bookHomeCustomerBabyValue").val(temp);
		});



		$('.homeBookingBtn').click(function (e) {
			let message = "Tôi muốn đặt tour"

			let temp = $(this).find(".book-room").val();
			if (temp) {
				message += " " + temp;
			}

			temp = $("#homeBookCruise option:selected").text();
			if (temp && $("#homeBookCruise").val()) {
				message += " " + temp;
			}
			else {
				temp = $("#detail_name").text();
				if (temp) {
					message += " " + temp;
				}
			}

			temp = $("#bookHomeStartDate").val();
			if (temp) {
				message += " vào ngày " + temp;
			}

			temp = getTextBookingPeople();
			if (temp) {
				message += " đoàn có " + temp;
			}

			openModalBooking(message);
		})

		$('#headerBookingBtn').click(function (e) {
			openModalBooking();
		});

		$('#bookingCloseModal').click(function (e) {
			closeModalBooking();
		});

		$(".bg-popup-page-row").off('click').on('click', function () {
			$(".popup-page-row").removeClass("open-popup");
			$("body").removeClass('over-hidden-body');
		});


		//Modal booking
		function openModalBooking(content) {
			$("#bookingContent").val(content)
			$("#modalBooking").addClass("open-popup");
			$("body").addClass('over-hidden-body');
		}

		function closeModalBooking() {
			$("#bookingCustomerName").val('')
			$("#bookingCustomerPhone").val('')
			$("#bookingContent").val('')
			$("#modalBooking").removeClass("open-popup");
			$("body").removeClass('over-hidden-body');
		}

		function getTextBookingPeople(isSetDefault) {
			let numberPassengers = "";

			let temp = getValue('bookHomeCustomerAdultValue');
			if (temp > 0)
				numberPassengers += (temp < 10 ? '0' + temp : temp) + " người lớn, ";

			temp = getValue('bookHomeCustomerChildValue');
			if (temp > 0)
				numberPassengers += (temp < 10 ? '0' + temp : temp) + " trẻ em, ";

			temp = getValue('bookHomeCustomerBabyValue');
			if (temp > 0)
				numberPassengers += (temp < 10 ? '0' + temp : temp) + " em bé, ";

			if (numberPassengers == "") {
				if (isSetDefault)
					numberPassengers = "Số hành khách";
				else
					return "";
			}
			else {
				if (numberPassengers.slice(-2) == ', ')
					numberPassengers = numberPassengers.slice(0, numberPassengers.length - 2)
			}

			return numberPassengers;
		}
	}
	if ($(".block-destinations").length > 0) {

		$(".location-item").off('click').on('click', function () {
			let temp = $(this).find('.name');
			if (temp) {
				$("#popupLocationTitle").text(temp.text());
			}
			var element = $(this).find("#noi-dung-tin");
			if (element) {
				$("#popupLocationBody").html(element.html());
			}
			$("#popupLocation").addClass("open-popup");
			$("body").addClass('over-hidden-body');

		});

		$("#popupLocation .icon-close-row").off('click').on('click', function () {
			$("#popupLocation").removeClass("open-popup");
			$("body").removeClass('over-hidden-body');
		});

		$(".bg-popup-page-row").off('click').on('click', function () {
			$(".popup-page-row").removeClass("open-popup");
			$("body").removeClass('over-hidden-body');
		});

	}



	//Hiệu ứng parallax
	if ($(window).width() >= 992) {

		// var sceneBanner = ơ
		var sceneTexturePrd1 = document.getElementById('texture-prd_1');
		if (sceneTexturePrd1)
			var parallaxTexturePrd_1 = new Parallax(sceneTexturePrd1, {
				relativeInput: true
			});
		var sceneTexturePrd2 = document.getElementById('texture-prd_2');
		if (sceneTexturePrd2)
			var parallaxTexturePrd_2 = new Parallax(sceneTexturePrd2, {
				relativeInput: true
			});


		var sceneTexturePrd3 = document.getElementById('texture-prd_3');
		if (sceneTexturePrd3)
			var parallaxTexturePrd_3 = new Parallax(sceneTexturePrd3, {
				relativeInput: true
			});
		var sceneTexturePrd4 = document.getElementById('texture-prd_4');
		if (sceneTexturePrd4)
			var parallaxTexturePrd_4 = new Parallax(sceneTexturePrd4, {
				relativeInput: true
			});

		var sceneTextureWhy1 = document.getElementById('texture-why_1');
		if (sceneTextureWhy1)
			var parallaxTextureWhy_1 = new Parallax(sceneTextureWhy1, {
				relativeInput: true
			});
		var sceneTextureWhy2 = document.getElementById('texture-why_2');
		if (sceneTextureWhy2)
			var parallaxTextureWhy_2 = new Parallax(sceneTextureWhy2, {
				relativeInput: true
			});
	}

	if ($(".title-imt").length > 0) {
		$(".title-imt").off('click').on('click', function () {
			if (!$(this).parent().hasClass('active')) {
				$(".imt-exp-book").removeClass('active');
				$(this).parent().addClass('active');
			}
			else
				$(this).parent().removeClass('active');
		});
	}

	if ($("#button-view-on").length > 0) {
		$("#button-view-on").click(function () {
			var offsetBlock = $('.block-why-choose-us').offset().top;
			//JS slide Work

			$(".wp-show-block-more").addClass('active');
			$('.box-button-show-off').addClass('show-on');
			var SwiperProducts = new Swiper("#slide-work-yacht", {
				slidesPerView: '4',
				spaceBetween: 30,
				speed: 700,
				navigation: {
					nextEl: "#next-slide-work-yacht",
					prevEl: "#prev-slide-work-yacht",
				},
				pagination: {
					el: "#pagination-slide-work-yacht",
					clickable: true,
				},
				autoHeight: true,
				breakpoints: {
					575: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					991: {
						slidesPerView: 2,
						spaceBetween: 15,
					},
					1199: {
						slidesPerView: 3,
						spaceBetween: 15,
					},
					1400: {
						spaceBetween: 15,
					}
				}
			});

			var SwiperProducts1 = new Swiper("#slide-destinations", {
				slidesPerView: '4',
				spaceBetween: 12,
				speed: 700,
				navigation: {
					nextEl: "#next-slide-destinations",
					prevEl: "#prev-slide-destinations",
				},
				pagination: {
					el: "#pagination-slide-destinations",
					clickable: true,
				},
				autoHeight: true,
				breakpoints: {
					575: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					991: {
						slidesPerView: 2,
						spaceBetween: 15,
					},
					1199: {
						slidesPerView: 3,
						spaceBetween: 15,
					},
					1400: {
						spaceBetween: 15,
					}
				}
			});
			$('body,html').animate({
				scrollTop: offsetBlock + 500
			}, 800);
		});
	}

	if ($("#button-view-off").length > 0) {
		$("#button-view-off").click(function () {
			$(".wp-show-block-more").removeClass('active');
			$('.box-button-show-off').removeClass('show-on');
		});
	}

	// Filter danh sách sản phẩm 
	$(".button__filter-parent").off('click').on('click', function () {
		$('.imt-filter-search-detail').removeClass("active");
		$(this).parent().addClass("active");
	});

	$(".button__filter-children-close").off('click').on('click', function () {
		$('.imt-filter-search-detail').removeClass("active");
	});

	$(".btn-choose-otp").off('click').on('click', function () {
		if (!$(this).hasClass("active"))
			$(this).addClass("active");
		else
			$(this).removeClass("active");

		//check show hide button
		let temp = $(this).parent().parent().find(".active").length;
		if (temp > 0)
			$(this).parent().parent().parent().find(".lst-btn-close-xn").show();
		else
			$(this).parent().parent().parent().find(".lst-btn-close-xn").hide();
	});


	$(".imt-schedule-container").off('click').on('click', function () {
		let temp = $(this).find('.schedule-content-title');
		if (temp) {
			$("#modal-detail-schedule-title").text($("#scheduleProductTitle").val() + " " + temp.text());
		}
		var element = $(this).find(".container-modal-lich-trinh");
		console.log(element);
		if (element) {
			$("#modalScheduleDetail").html(element.html());
		}
		$("#modalDetailSchedule").addClass("open-popup");
		$("body").addClass('over-hidden-body');
		$(".imt-title-tab-schedule").removeClass('active');
		$("#modalDetailScheduleTabActivity").addClass('active');

	});

	$("#modalDetailSchedule .icon-close-row").off('click').on('click', function () {
		$("#modalDetailSchedule").removeClass("open-popup");
		$("body").removeClass('over-hidden-body');
	});

	$(".location-item").off('click').on('click', function () {
		let temp = $(this).find('.name');
		if (temp) {
			$("#popupLocationTitle").text(temp.text());
		}
		var element = $(this).find("#noi-dung-tin");
		if (element) {
			$("#popupLocationBody").html(element.html());
		}
		$("#popupLocation").addClass("open-popup");
		$("body").addClass('over-hidden-body');

	});

	$("#popupLocation .icon-close-row").off('click').on('click', function () {
		$("#popupLocation").removeClass("open-popup");
		$("body").removeClass('over-hidden-body');
	});

	$("#modalDetailScheduleTabActivity").off('click').on('click', function () {
		$(".imt-title-tab-schedule").removeClass('active');
		$(this).addClass('active');
		$("#modalScheduleDetail").find(".bao-gom").hide();
		$("#modalScheduleDetail").find(".lich-trinh").show();
		$("#modalScheduleDetail").find(".luu-y").hide();
	});



	$("#modalDetailScheduleTabInclude").off('click').on('click', function () {
		$(".imt-title-tab-schedule").removeClass('active');
		$(this).addClass('active');
		$("#modalScheduleDetail").find(".lich-trinh").hide();
		$("#modalScheduleDetail").find(".bao-gom").show();
		$("#modalScheduleDetail").find(".luu-y").hide();
	});

	$("#modalDetailScheduleTabAttention").off('click').on('click', function () {
		$(".imt-title-tab-schedule").removeClass('active');
		$(this).addClass('active');
		$("#modalScheduleDetail").find(".lich-trinh").hide();
		$("#modalScheduleDetail").find(".bao-gom").hide();
		$("#modalScheduleDetail").find(".luu-y").show();
	});

	$('.imt-topbar-yacht').click(function () {
		$('.imt-topbar-yacht').removeClass('active');
		$(this).addClass('active');
		var idMenu = $(this).attr('href');
		$('html,body').animate({
			scrollTop: $(idMenu).offset().top - 140
		}, 800);
	});

	//Scrollspy
	$(window).scroll(function () {
		// $('.menu--close').removeClass('open');
		// $('.menu-header').removeClass('open-menu-header');
		var offsetWindow = $(window).scrollTop();
		var wpBlocks = ['detail-about', 'detail-room', 'detail-schedule', 'detail-feature', 'detail-file', 'detail-utility', 'detail-question'];
		var menuActive;
		for (var i = 0; i < wpBlocks.length; i++) {
			if ($('#' + wpBlocks[i]) && $('#' + wpBlocks[i]).offset() && $('#' + wpBlocks[i]).offset().top - 250 <= offsetWindow) {
				menuActive = wpBlocks[i];
			}
		}
		if (offsetWindow == 0)
			menuActive = wpBlocks[0];
		$(".imt-topbar-yacht").removeClass('active');
		$(".imt-topbar-yacht[href='#" + menuActive + "']").addClass('active');
	});


	if ($("#slide-banner-home").length > 0) {
		var SwiperBanner = new Swiper("#slide-banner-home", {
			slidesPerView: '1',
			spaceBetween: 0,

			speed: 700,
			pagination: {
				el: "#pagination-slide-banner",
				clickable: true,
			},
			// autoHeight: true,
			navigation: {
				nextEl: "#next-slide-banner",
				prevEl: "#prev-slide-banner",
			},
		});
	}
	if ($("#slide-new-hot").length > 0) {
		// Slide new
		var slideNew = new Swiper("#slide-new-hot", {
			slidesPerView: 1,
			spaceBetween: 15,

			speed: 800,
			pagination: {
				el: "#pagination-slide-new",
				clickable: true,
			},
			navigation: {
				nextEl: "#next-slide-new-hot",
				prevEl: "#prev-slide-new-hot",
			},
			on: {
				init: function () {
					if ($(window).width() >= 1200) {
						$(".swiper-container .swiper-slide .animated").addClass("off");
						$(".swiper-container .swiper-slide-active .animated").removeClass(
							"off"
						);
					}
				},

				transitionEnd: function () {
					if ($(window).width() >= 1200) {
						$(".swiper-container .swiper-slide .animated").addClass("off");
						$(".swiper-container .swiper-slide-active .animated").removeClass(
							"off"
						);
					}
				}
			}
		});
	}
	if ($("#slide-destinations").length > 0) {
		var SwiperProducts1 = new Swiper("#slide-destinations", {
			slidesPerView: '4',
			spaceBetween: 12,
			speed: 700,
			navigation: {
				nextEl: "#next-slide-destinations",
				prevEl: "#prev-slide-destinations",
			},
			pagination: {
				el: "#pagination-slide-destinations",
				clickable: true,
			},
			autoHeight: true,
			breakpoints: {
				575: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				991: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				1199: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				1400: {
					spaceBetween: 15,
				}
			}
		});
	}


});

function getValue(id, element) {
	try {
		return parseInt($("#" + id).val());
	} catch (e) {
		return 0;
	}
}