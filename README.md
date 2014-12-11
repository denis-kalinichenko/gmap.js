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

```javascript
$(document).ready(function() {
    $(".map").gmap({
        zoom: 16, // default value is 13
        location: '1600 Amphitheatre Parkway, Mountain View', // string or array
        title: 'My Home',
        marker:'img/map_marker.png'
    });
});
```
You can use complex initialization with all options, __'location' option__ is __`required`__.


###Version

0.3