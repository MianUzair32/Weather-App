let searchValue = document.getElementById('searchBox');
searchValue.addEventListener('keypress',setFunc);
function setFunc(e){
    if (e.keyCode == 13) {
        getData(searchValue.value);
    }
}

function getData(value){
    fetch('https://api.openweathermap.org/data/2.5/weather?units=metric&q=' + value + '&appid=12da26087ea913ea0144013f1896339e')
    .then(function(response){
        return response.json();
        
    })
   
    .then(function(weather){
        document.querySelector('#city').innerHTML=weather.name;
        document.querySelector('#temp').innerHTML=weather.main.temp;
        document.querySelector('#min_max_temp').innerHTML='Min. '+ weather.main.temp_min + '/ Max.' + weather.main.temp_max;
        document.querySelector('#weather').innerHTML= weather.weather[0].main;
        document.querySelector('#weather_desc').innerHTML=weather.weather[0].description;
        document.querySelector('#wind_dirc_speed').innerHTML='Wind Direction:' + weather.wind.deg + '/ Wind Speed' + weather.wind.speed;
        updateBackgroundImage(weather);
        console.log(weather);

      
    })
    .catch(function(error){
        console.log(error);
    })
}

function updateBackgroundImage(weather) {
    const body = document.getElementById('card');

    // Customize this based on the weather condition or any other criteria
    if (weather.weather[0].main === 'Haze') {
        body.style.backgroundImage = 'url("bghaze.jpg")';
    } else if (weather.weather[0].main === 'Clouds') {
        body.style.backgroundImage = 'url("bgcloud.jpg")';
    }
    else if (weather.weather[0].main === 'Rain') {
        body.style.backgroundImage = 'url("bgrain.jpg")';
    }
    else if (weather.weather[0].main === 'Smoke') {
        body.style.backgroundImage = 'url("bgsmoge.jpg")';
    }
    else if (weather.weather[0].main === 'Fog') {
        body.style.backgroundImage = 'url("bgfog.jpg")';
    }
    else if (weather.weather[0].main === 'Clear') {
        body.style.backgroundImage = 'url("bgclear.jpg")';
    }
    
    
    else{
        body.style.backgroundImage = 'url("bg.jpg")';
    }
    // Add more conditions based on different weather types

    // Clear previous background images
    // setTimeout(() => {
    //     body.style.backgroundImage = '';
    // }, 5000);
}