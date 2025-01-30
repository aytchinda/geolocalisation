
navigator.geolocation.getCurrentPosition(
    (position) => {

        var coords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }
        console.log(coords);
    },
    (error) => {
        console.log(error);
    }
);