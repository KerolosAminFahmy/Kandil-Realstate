$(document).ready(function(){
  
  $('.slick-slider').slick({
    rtl: true,
    infinite: true,       
    slidesToShow: 3,       
    slidesToScroll: 1,     
    autoplay: true,        
    autoplaySpeed: 2000,   
    arrows: true,          
    dots: true ,  
    prevArrow:'<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: flex;align-content: center;justify-content: center;align-items: center;"></button>' ,         
    nextArrow:'<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: flex;align-content: center;justify-content: center;align-items: center;"></button>',
    responsive: [
    {
            breakpoint: 1600,  
            settings: {
                centerMode:true,
                centerPadding: "200px",
                slidesToScroll: 1,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 1200,  
            settings: {
                centerMode:true,
                centerPadding: "200px",
                slidesToScroll: 1,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 768,    
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "0px",
              dots: true,
              slidesToScroll: 1,
              slidesToShow: 1
            }
        },
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
  
  
  $('a[data-rel^=lightcase]').lightcase();
});
