  var swiperMobile = new Swiper('.swiper-container.swiper-full-mobile', {
          slidesPerView: 5,
          spaceBetween: 50,
          slideToClickedSlide:true,
          centeredSlides:true,
         pagination: {
            el: '.swiper-pagination',
            clickable: true,
    
          },
    
          loop:true,
          autoplay: {
          delay: 2000,
          },
    
    
            keyboard: {
            enabled: true,
            onlyInViewport: true,
          },
    
    
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    
    
           breakpoints: {
                
                640: {
                  freemode:true,
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                320: {
                  freemode:true,
                  slidesPerView: 3,
                  spaceBetween: 20,
                }
          }
    
        });




function showTwo(){
  
    document.getElementById("newstwohide").style.display = "none";
    document.getElementById("newstwoshow").style.display = "block";
}

function hideTwo(){
    setInterval(function(){
        document.getElementById("newstwoshow").style.display = "none";
        document.getElementById("newstwohide").style.display = "block";
      }, 3000);
      
   
   
}




