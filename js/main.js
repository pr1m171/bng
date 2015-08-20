
$(function(){

	/*Events*/
	openS();
	users_hover();

	function openS(){

		$('.header-sidebtn').on('click', function(e){
	        e.preventDefault();
	        $('.sidebar-links').toggleClass('sidebar-off');
	        $('.header-sidebtn').toggleClass('open');
	     });
	}

	function users_hover(){

		$('body').on('mouseover click','.item-photo',function(){
			$(this).find('.photoMain-links').show().stop().animate({ opacity:'1'  }, { duration: 300, queue: false });
		});

		$('body').on('mouseover click','.item-photo',function(){
			$(this).find('.photoMain-links-s').show().stop().animate({ opacity:'1'  }, { duration: 300, queue: false });
		});

		$('body').on('mouseleave','.item-photo',function(){
			$(this).find('.photoMain-links').show().stop().animate({ opacity:'0'  }, { duration: 300, queue: false });
		});

		$('body').on('mouseleave','.item-photo',function(){
			$(this).find('.photoMain-links-s').show().stop().animate({ opacity:'0'  }, { duration: 300, queue: false });
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