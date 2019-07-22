// JavaScript Document

// filter
$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});
// filter ends


$(function () {
  $(document).scroll(function () {
	  var $nav = $(".navbar-fixed-top");
	  $nav.toggleClass('shrink', $(this).scrollTop() > $nav.height
());
	});
});



// slider nav
	function openNav() {
		document.getElementById("mnav-slider").style.width = "100%";
	}

	function closeNav() {
		document.getElementById("mnav-slider").style.width = "0";
	}	
// slider nav ends



// smooth scroll
		$(document).ready(function(){
			$(".navbar a, footer a[href='#home'],header a[href='#about'],#about a[href='#contact']").on('click', function(event) {
			if (this.hash !== "") {
				event.preventDefault();

				var hash = this.hash;

				$('html, body').animate({
					scrollTop: $(hash).offset().top
					}, 900, function(){

					window.location.hash = hash;
				});
			} // End if
			});

			$(window).scroll(function() {
				$(".slideanim").each(function(){
				var pos = $(this).offset().top;

				var winTop = $(window).scrollTop();
					if (pos < winTop + 600) {
					$(this).addClass("slide");
					}
				});
			});
		})
// smooth scroll ends



