
$(function(){

	/*Events*/
	openS();
	users_hover();
	sidebar_drop();
	$('[data-toggle="tooltip"]').tooltip();

	function openS(){

		$('.header-sidebtn').on('click', function(e){
	        e.preventDefault();
	        $('.sidebar-links').toggleClass('sidebar-off');
	        $('.header-sidebtn').toggleClass('open');
	        $(".listss").slideUp();
	        $('.active').removeClass('active');
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


	function sidebar_drop(){

		$(".sectionBtn").on( "click", function(e) {
		    e.preventDefault();
		    $('.active').removeClass('active');
		    $(this).addClass('active');
		    var id = $(this).attr('data-section');

		    $(".listss").each(function(){
		        $(this).slideUp();
		        if($(this).attr('data-list') == id) {
		            $(this).slideDown();
		        }
		    });
		});

		$('.sidebar-icons h3').on('click', function(e){

			if ($('.sidebar-links').hasClass('sidebar-off')) {
				$('.sidebar-links').toggleClass('sidebar-off');
				$('.header-sidebtn').toggleClass('open');
				$('.active').removeClass('active');
			};

	     });

	}

	/*
	  Slidemenu
	*/


	/*$(".sidebar-links h3").click(function(){
		$(".sidebar-links ul ul").slideUp();

		if(!$(this).next().is(":visible"))
		{
			$(this).next().slideDown();
		}
	})*/
})