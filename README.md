A simple and easy to use plugin to insert a Google Map to your page.

###Including files:
```html
<!-- jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

<!-- Google Maps JavaScript API v3 -->
<script src="https://maps.googleapis.com/maps/api/js"></script>

<script type="text/javascript" src="jquery.gmap.js"></script>
```

###Required HTML structure
Each map will be defined.

```html
<div class="map"></div>
```


###Initialization
All you need to do is call the plugin inside a `$(document).ready` function:

####Simple usage

```javascript
$(document).ready(function() {
    $(".map").gmap({
        zoom: 16, // default value is 13
        location: '1600 Amphitheatre Parkway, Mountain View', // string or array
        title: 'My Home',
        marker: 'img/map_marker.png'
    });
});
```

####Advanced usage
With callbacks.

```javascript
$(document).ready(function() {
    var address = [ "Langiewicza 33 Rzeszów", "Wyspiańskiego 41D Rzeszów" ]; // max 11 (google limits)
    var infoWindow = new google.maps.InfoWindow();

    $(".map").gmap({
        zoom: 16, // default value is 13
        location: address, // array
        marker: 'img/map_marker.png',
         onMarkerClick: function(map, marker) {
             // your code...
             map.setZoom(15);
             map.setCenter(marker.getPosition());
             //marker.setMap(null);
         },
         onMarkerHover: function(map, marker) {
            // example code...
             var content = "<div style='width: 300px;height: 100px;color: #4f5b6f;'>"+marker.getPosition()+"</div>";
             infoWindow.setContent(content);
             infoWindow.open(map, marker);
         },
         onMarkerHoverEnd: function(map, marker) {
            // example code...
             infoWindow.close();
         },
         onZoom: function(zoom) {
            // example code...
             console.log("zoom:" + zoom);
         }
    });
});
```

You can use complex initialization with all options, __'location' option__ is __`required`__.


###Version

0.4.5
