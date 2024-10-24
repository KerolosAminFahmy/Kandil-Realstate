$(document).ready(function(){
  $(".slider-img").on("click", function () {
      $(".slider-img").removeClass("active");
      $(this).addClass("active");
    });
    $('.slider-images-slick').slick({
      rtl: true,
      infinite: true,       
      slidesToShow: 2,       
      slidesToScroll: 1,     
      autoplay: true,        
      autoplaySpeed: 2000,   
      arrows: false,          
      dots: true ,  
      prevArrow:'<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: flex;align-content: center;justify-content: center;align-items: center;"></button>' ,         
      nextArrow:'<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: flex;align-content: center;justify-content: center;align-items: center;"></button>',
      responsive: [

            {
                breakpoint: 580,    
                settings: {
                  arrows: false,
                  centerMode: false,
                  centerPadding: "0px",
                  dots: true,
                  slidesToScroll: 1,
                  slidesToShow: 1
                }
            }
        ]
    });
  })