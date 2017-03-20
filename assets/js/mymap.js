// ---------------------------------------
// // GMap 3 - Set Address on line 79
// ---------------------------------------

var styles = [
    {
      "featureType":"landscape",
      "stylers":[
          {"saturation":-100},
          {"lightness":65},
          {"visibility":"on"}
          ]
        },
      {
        "featureType":"poi",
        "stylers":[
            {"saturation":-100},
            {"lightness":51},
            {"visibility":"simplified"}
            ]
          },
      {
        "featureType":"road.highway",
        "stylers":[
            {"saturation":-100},
            {"visibility":"simplified"}
            ]
          },
      {
        "featureType":"road.arterial",
        "stylers":[
            {"saturation":-100},
            {"lightness":30},
            {"visibility":"on"}
            ]
          },
      {
          "featureType":"road.local",
          "stylers":[
            {"saturation":-100},
            {"lightness":40},
            {"visibility":"on"}
            ]
          },
      {
          "featureType":"transit",
          "stylers":[
            {"saturation":-100},
            {"visibility":"simplified"}
            ]
          },
      {
          "featureType":"administrative.province",
          "stylers":[{"visibility":"on"}
            ]
          },
      {
          "featureType":"water",
          "elementType":"labels",
          "stylers":[
            {"visibility":"on"},
            {"lightness":-25},
            {"saturation":-100}
            ]
          },
      { 
          "featureType":"water",
          "elementType":"geometry",
          "stylers":[
            {"hue":"#ffff00"},
            {"lightness":-25},
            {"saturation":-97}
            ]
          }
      ];

$("#map").gmap3({
    marker:{
      address: '-7.031249 , 109.6078997'
    },
    map:{
      options:{
          styles: styles,
            zoom: 17,
            scrollwheel: false,
            draggable: true,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
                },
            mapTypeControl: false,
            scaleControl: false,
            scrollwheel: false,
            streetViewControl: false
        }
    }
});