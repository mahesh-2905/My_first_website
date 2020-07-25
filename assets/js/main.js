$('a[href*="#"]').on('click', function(e) {
    e.preventDefault()
  
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      700,
      'linear'
    )
  })

  AOS.init({
    duration: 1000,
    easing: "ease-in-out-back"
  });
  //paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");
	});