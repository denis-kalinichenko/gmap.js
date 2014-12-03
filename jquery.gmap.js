/**
 * gmap.js 0.1.1
 *
 * MIT licensed
 *
 * Copyright (C) 2014 - A script by Denis Kalinichenko
 */
(function($) {
$.fn.gmap = function ( options ) {
    options.location = ((options.location) ? options.location : false);
    if(!options.location) {
        console.error("Map location is undefined");
        return false;
    }
    options.zoom = ((options.zoom > 0) ? options.zoom : 13);
    options.title = ((options.title) ? options.title : options.location);
    options.marker = ((options.marker) ? options.marker : '');

    var mapElement = $(this)[0];

    google.maps.event.addDomListener(window, 'load', function () {
        var geocoder = new google.maps.Geocoder();

        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: options.zoom
            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.

            // styles...
        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it

        geocoder.geocode( { 'address': options.location}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    icon: options.marker,
                    title: options.location
                });
            } else {
                console.error('Geocode was not successful for the following reason: ' + status);
            }
        });

    });
};
});