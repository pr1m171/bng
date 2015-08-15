
$(function(){

	/*Events*/
	openS();

	function openS(){

		$('.header-sidebtn').on('click', function(e){
	        e.preventDefault();
	        $('.sidebar-links').toggleClass('sidebar-off');
	        $('.header-sidebtn').toggleClass('open');
	     });
	}

	/*function sidebar(){

		var $promo = $('[data-section="promo"]'),
			$promolist = $('[data-list="promo"]'),

		$promo.click(function(){
			
			$promolist.slideUp();
			if(!$promolist.is(":visible"))
			{
				$promolist.slideDown();
			}
		})
	}*/

	$(".sidebar-links h3").click(function(){
		$(".sidebar-links ul ul").slideUp();

		if(!$(this).next().is(":visible"))
		{
			$(this).next().slideDown();
		}
	})
})