$(function() {

	$('th a.asc').parent().addClass('sorted');
	$('th a.desc').parent().addClass('sorted');

	$('.well .close').click(function(e) {
		e.preventDefault();
		$(this).parent().hide();
	});

	$('.show-filters').click(function(e) {
		e.preventDefault();
		$('form.filters').show();
	});

	$("#list input.toggle").live("click", function() {
		return $("#list [name='bulk_ids[]']").attr("checked", $(this).is(":checked"));
	});

	$('.form-horizontal legend').live('click', function() {
		if ($(this).has('i.icon-chevron-down').length) {
			$(this).siblings('.control-group:visible').hide('slow');
			return $(this).children('i').toggleClass('icon-chevron-down icon-chevron-right');
		} else {
			if ($(this).has('i.icon-chevron-right').length) {
				$(this).siblings('.control-group:hidden').show('slow');
				return $(this).children('i').toggleClass('icon-chevron-down icon-chevron-right');
			}
		}
	});

	$('.keynav:first')
		.addClass('active');

	key('j', function(){
		$this = $('.keynav.active');
	   	if($this.next().length){
	   		$this.toggleClass('active');
	   		$this.next().toggleClass('active');
	   	}
	   	else{
	   		if($('.next a').attr('href').length){
	   			window.location = $('.next a').attr('href');
	   		}
	   	}
	});

	key('k', function(){
		$this = $('.keynav.active');
		if($this.prev().length){
		   	$this.toggleClass('active');
		   	$this.prev().toggleClass('active');
		}
		else{
			if($('.prev a').attr('href').length){
		   		window.location = $('.prev a').attr('href');
			}
	   	}
	});

	key('x', function(){
		$('.keynav.active input[type=checkbox]').click();
	});


/*
	key('enter', function(){
		window.location = $('.keynav.active').find('.default-action').attr('href');
	});

	key('u', function(){
		 window.history.back()
	});

	key('e', function(){
		if($('.edit').attr('href').length)
		{
			window.location = $('.edit').attr('href');
		}
	});

	key('h', function(){
	   $('#help-modal').modal('toggle');
	});

	key('l', function(){
	   $('#login-modal').modal('toggle');
	});

	key('s', function(e){
		$('#search-query').focus();
	   	e.preventDefault();
	});

	key('m', function(){
	   alert('sitemap');
	});
*/

});