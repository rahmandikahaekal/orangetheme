//======================
//  Progress Bar
//======================
$(function () { 
  $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});  

// $( window ).scroll(function() {   
 // if($( window ).scrollTop() > 10){  // scroll down abit and get the action   
  $(".progress-bar").each(function(){
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
  });
       
 //  }  
// });

//======================
//  Isotope
//======================
$('.main_work').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
});

//======================
//  Activation Isotope
//======================
$('.work_nav ul li').click(function() {
    $('.work_nav ul li').removeClass('active');
    $(this).addClass('active');
    
    var selector = $(this).attr('data-filter');
    $('.main_work').isotope({
        filter: selector
    });
    return false;
});

//======================
//  Magnific Popup
//======================
$('.portfolio-popup').magnificPopup({
    type: 'image',
      gallery: {
          enabled: true
      },
    zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
          return element.find('img');
        }
    }
});


//======================
//  OWL CAROUSEL
//======================
$(document).ready(function() {
    
    $("#testi-carousel").owlCarousel({
        //Most important owl features
        items: 1,
        itemsCustom: false,
        itemsDesktop: [1199,1],
        itemsDesktopSmall: [980,1],
        itemsTablet: [768,1],
        itemsTabletSmall: false,
        itemsMobile: [479,1],
        singleItem: false,
        startDragging: true
    });
});

      function initMap() {
        var uluru = {lat: -7.0313661, lng:109.6107107};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          scrollwheel: false,
          draggable: true,
          zoomControl: true,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }