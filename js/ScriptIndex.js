
      function initMap() {
		  alert("dgfdesw");
		  
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: {lat: 41.8719, lng: 12.5674} // Centro iniziale su Italia
        });
        var geocoder = new google.maps.Geocoder();

        document.getElementById('submit').addEventListener('click', function() {
          geocodeCity(geocoder, map);
        });
      }

      function geocodeCity(geocoder, map) {
        var city = document.getElementById('city').value;
        geocoder.geocode({'address': city}, function(results, status) {
          if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }
