function getLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var coordinatesElement = document.getElementById("coordinates");
            coordinatesElement.textContent = "Latitude: " + latitude + ", Longitude " + longitude;
            console.log(latitude + ", " + longitude);
        }, function (error) {
            console.error("Error getting location:", error.message);
        });
    }
    else {
        console.log("Geolocation is not supported by this browser.");
    }
}

export { getLocation };