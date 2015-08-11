
$(function(){

	openS();

	function openS(){

		$('.header-sidebtn').on('click', function(e){
	        e.preventDefault();
	        $('.sidebar-links').toggleClass('sidebar-off');
	     });
	}

	$(".sidebar-links h3").click(function(){
		//slide up all the link lists
		$(".sidebar-links ul ul").slideUp();
		//slide down the link list below the h3 clicked - only if its closed
		if(!$(this).next().is(":visible"))
		{
			$(this).next().slideDown();
		}
	})
})