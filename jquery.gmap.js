/**
 * gmap.js 0.3.1
 *
 * MIT licensed
 * https://github.com/denis-kalinichenko/gmap.js
 * Copyright (C) 2014 - A script by Denis Kalinichenko
 */

$.fn.gmap = function ( options ) {
    
    var data = $(this).data("gmap"); //TODO updating map
    if ( !data ) { // first init
        var state = {};
        $(this).data("gmap", state);
    } else {
        // update
    }
    
    options.location = ((options.location) ? options.location : false);
    if(!options.location) {
        console.error("Map location is undefined");
        $(this).text("Map location is undefined").css("color", "red");
        return false;
    }
    options.zoom = ((options.zoom > 0) ? options.zoom : 13);
    options.title = ((options.title) ? options.title : options.location);
    options.marker = ((options.marker) ? options.marker : '');

        var mapElement = $(this)[0];

        var geocoder = new google.maps.Geocoder();

        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: options.zoom
            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.

            /* styles here */

        };

        var map = new google.maps.Map(mapElement, mapOptions);

        if( typeof options.location  === 'string' ) {
            // single marker
            geocoder.geocode( { 'address': options.location}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location,
                        icon: options.marker,
                        title: options.title
                    });

                    if(options.onMarkerClick) {
                        google.maps.event.addListener(marker, 'click', function() {
                            options.onMarkerClick(map);
                        });
                    }
                } else {
                    console.error('Geocode was not successful for the following reason: ' + status);
                }
            });

        } else {
            // multiple markers
            options.location.forEach(function(address) {
                geocoder.geocode( { 'address': address}, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        var location_code = results[0].geometry.location;
                        map.setCenter(location_code);
                        var marker = new google.maps.Marker({
                            map: map,
                            position: location_code,
                            icon: options.marker,
                            title: options.title
                        });
                        if(options.onMarkerClick) {
                            google.maps.event.addListener(marker, 'click', function() {
                                options.onMarkerClick(map);
                            });
                        }
                    } else {
                        console.error('Geocode was not successful for the following reason: ' + status);
                    }
                });
            });
        }
};
