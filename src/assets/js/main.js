$(function() {
  "use strict";  


    /*-------------------------------------------------------------------------------
	  clients logo slider
    -------------------------------------------------------------------------------*/
    function sliderCards() {
        setTimeout(() => {        
            if ($('.clients_slider').length) {
              $('.clients_slider').owlCarousel({
                  loop: true,
                  margin: 30,
                  items: 5,
                  nav: false,
                  dots: false,
                  responsiveClass: true,
                  autoplay: 2500,
                  slideSpeed: 300,
                  paginationSpeed: 500,
                  responsive: {
                      0: {
                          items: 1,
                      },
                      768: {
                          items: 3,
                      },
                      1024: {
                          items: 4,
                      },
                      1224: {
                          items: 5
                      }
                  }
              })
            }
        }, 500);
    };
    sliderCards();   
 
  
});


