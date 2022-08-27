const OPEN_WEATHER_MAP_API_KEY = config.apikey;

function onGeo(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    //console.log("You live in ", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_MAP_API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const temp = document.querySelector("#weather span:nth-child(2)");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = data.weather[0].main;
            temp.innerText = `${data.main.temp}℃`;
            city.innerText = data.name;
        }); //request URL , promise : 하고 기다린다.
}

function onGeoError(){
    alert("Can't find U. Please allow the geolocation");
}

navigator.geolocation.getCurrentPosition(onGeo, onGeoError);