function initMap() {
        var uluru = {lat: 55.9115164, lng: 37.5425225};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          animation: google.maps.Animation.DROP,
          map: map
        });
      }
