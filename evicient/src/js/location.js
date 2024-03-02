function getLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var coordinatesElement = document.getElementById("coordinates");
            coordinatesElement.textContent = "Latitude: " + latitude + ", Longitude " + longitude;
            sendLocationToServer(latitude, longitude);
        }, function (error) {
            console.error("Error getting location:", error.message);
        });
    }
    else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function sendLocationToServer(latitude, longitude) {
    var url = 'http://localhost:3000';
    var data = {
        latitude: latitude,
        longitude: longitude
    };
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Server response:', data);
        })
        .catch(error => {
            console.error('Error sending location to server:', error);
        });
}