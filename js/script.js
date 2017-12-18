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

setInterval(function(){
	$('#divUkr').text(moment.tz('Europe/Kiev').format('HH:mm'));
	$('#divChina').text(moment.tz('Asia/Hong_Kong').format('HH:mm'));
	$('#divSeoul').text(moment.tz('Asia/Seoul').format('HH:mm'));
	$('#divLondon').text(moment.tz('Europe/London').format('HH:mm'));
}, 1000);

$('.count-number').counterUp({delay:10,time:2000,});
function getCurrentScroll(){
	return window.pageYOffset||document.documentElement.scrollTop;
}

$('.reviews-list').masonry({
  itemSelector: '.review',
  // gutter: 1,
  percentPosition: true,
  gutter: 12,
  // horizontalOrder: true,
  // originTop: false,
});