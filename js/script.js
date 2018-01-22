$('.panel-heading a').click(function() {
    $('.panel-heading').removeClass('active');
    
    //If the panel was open and would be closed by this click, do not active it
    if(!$(this).closest('.panel').find('.panel-collapse').hasClass('in'))
        $(this).parents('.panel-heading').addClass('active');
 });

$('.hamburger-menu').on('click', function (argument) {
	$('.mobile-menu').addClass('mobile-menu-show');
	$('.black-opacity').show();
	console.log('work')
})

$('.black-opacity').on('click', function (argument) {
	$('.mobile-menu').removeClass('mobile-menu-show');
	$('.black-opacity').hide();
	console.log('click')
});

if ( $('.timezone').length > 0 ) {
	setInterval(function(){
		$('#divUkr').text(moment.tz('Europe/Kiev').format('HH:mm'));
		$('#divChina').text(moment.tz('Asia/Hong_Kong').format('HH:mm'));
		$('#divSeoul').text(moment.tz('Asia/Seoul').format('HH:mm'));
		$('#divLondon').text(moment.tz('Europe/London').format('HH:mm'));
	}, 1000);
}


if ( $('.count-number').length > 0 ) {
	$('.count-number').counterUp({delay:10,time:2000,});
	function getCurrentScroll(){
		return window.pageYOffset||document.documentElement.scrollTop;
	}
}

if ( $('.reviews-list').length > 0 ) {
	$('.reviews-list').masonry({
	  itemSelector: '.review',
	  percentPosition: true,
	  gutter: 12,
	});
}

if ( $('.swiper-container').length > 0 ) {
	var mySwiper = new Swiper ('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		loop: 'true'
	})
}

//Send Mail TOP
$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
	if (document.form.name.value == '' || document.form.email.value == '' || document.form.phone.value == '') {
		valid = false;
		return valid;
	}
	$.ajax({
		type: "POST",
		url: "send_mail.php",
		data: $(this).serialize()
	}).done(function() {
		$('#sendRequest').modal('hide');
		$('#thxAlert').modal('show');
		$(this).find('input').val('');
		$('#form').trigger('reset');
	});
	return false;
});

//Send Mail FOOTER
$('#form-footer').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
	if (document.form.name.value == '' || document.form.email.value == '' || document.form.phone.value == '') {
		valid = false;
		return valid;
	}
	$.ajax({
		type: "POST",
		url: "send_mail.php",
		data: $(this).serialize()
	}).done(function() {
		$('#thxAlert').modal('show');
		$(this).find('input').val('');
		$('#form-footer').trigger('reset');
	});
	return false;
});