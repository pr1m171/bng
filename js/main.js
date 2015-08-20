
$(function(){

	/*Events*/
	openS();
	users_hover();
	sidebar_drop();

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


	function sidebar_drop(e){

		$(".sidebar-links h3, .sidebar-icons h3").click(function(){
			$(".sidebar-links ul ul").slideUp();
			$(".sidebar-icons ul ul").slideUp();

			if(!$(".sidebar-links h3, .sidebar-icons h3").next().is(":visible"))
			{
				$(".sidebar-links h3, .sidebar-icons h3").next().slideDown();
			}


		});

	}

	/*$(".sidebar-links h3").click(function(){
		$(".sidebar-links ul ul").slideUp();

		if(!$(this).next().is(":visible"))
		{
			$(this).next().slideDown();
		}
	})*/
})