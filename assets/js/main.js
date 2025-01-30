
// DETERMINER LA POSITION 

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

// POSITION EN TEMPS REEL

var result =navigator.geolocation.watchPosition(
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
)

navigator.geolocation.clearWatch(result);