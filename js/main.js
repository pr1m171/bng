
$(function(){

	/*Events*/
	openS();
	sidebar();

	function openS(){

		$('.header-sidebtn').on('click', function(e){
	        e.preventDefault();
	        $('.sidebar-links').toggleClass('sidebar-off');
	     });
	}

	function sidebar(){

		var $promo = $('[data-section="promo"]'),
			$promolist = $('[data-list="promo"]'),
			$profile = $('[data-section="profile"]');

		$promo.click(function(){

			if(!$promolist.is(":visible"))
			{
				$promolist.slideDown();
			}

		})
	}

	/*$(".sidebar-links h3").click(function(){
		//slide up all the link lists
		$(".sidebar-links ul ul").slideUp();
		//slide down the link list below the h3 clicked - only if its closed
		if(!$(this).next().is(":visible"))
		{
			$(this).next().slideDown();
		}
	})*/
})