
// let Button = document.getElementById('btn');
// Button.addEventListener('click',setFunc);


function setFunc(){
        let searchValue = document.getElementById('searchBox').value;
        getData(searchValue);
        getdata1(searchValue);

}

function getData(value){
  
    // const headers = {
    //     headers: new Headers({
    //       "Access-Control-Allow-Origin": "*",
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
    //       "Access-Control-Allow-Headers": "origin, x-requested-with",
    //     })
    //   };

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
        // console.log(weather);

    })

   
    // .then(function (forecastData) {
        
    //     // Display 5-day forecast
    //     document.querySelector('#city').innerHTML=forecastData.forecast.name;

    //     // displayFiveDayForecast(forecastData);
    // })

    .catch(function(error){
        console.log(error);
    })
 
   
}
function getdata1(value){
     const headers = {
        headers: new Headers({
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
          "Access-Control-Allow-Headers": "origin, x-requested-with",
        })
      };
    fetch('https://api.openweathermap.org/data/2.5/forecast?units=metric&q=' + value + '&appid=12da26087ea913ea0144013f1896339e' , headers)

    .then(function (response) {
        console.log(response)
        return response.json();
       
    })       
}

function updateBackgroundImage(weather) {
    const body = document.getElementById('card');

    // Customize this based on the weather condition or any other criteria
    if (weather.weather[0].main === 'Haze') {
        body.style.backgroundImage = 'url("asset/images/bghaze.jpg")';
    } else if (weather.weather[0].main != 'Clouds') {
        body.style.backgroundImage = 'url("asset/images/bgcloud.jpg")';
        body.style.color='#000';
    }else if (weather.weather[0].main === 'Clouds') {
        body.style.backgroundImage = 'url("asset/images/bgcloud.jpg")';
        body.style.color='#fff';
        body.style.fontSize='5px';

    }
    else if (weather.weather[0].main === 'Rain') {
        body.style.backgroundImage = 'url("asset/images/bgrain.jpg")';
    }
    else if (weather.weather[0].main === 'Smoke') {
        body.style.backgroundImage = 'url("asset/images/bgsmoge.jpg")';
    }
    else if (weather.weather[0].main === 'Fog') {
        body.style.backgroundImage = 'url("asset/images/bgfog.jpg")';
    }
    else if (weather.weather[0].main === 'Clear') {
        body.style.backgroundImage = 'url("asset/images/bgclear.jpg")';
        // document.getElementById("card").style.height = "40%";
        body.style.color = '#000';
    }
    else{
        body.style.backgroundImage = 'url("asset/images/bg.jpg")';
        body.style.color = '#000';
    }
    weather.weather[0].main=[]
    // Add more conditions based on different weather types

    // Clear previous background images
    // setTimeout(() => {
    //     body.style.backgroundImage = '';
    // }, 5000);
}

// function displayForecast(forecastData) {
//     const forecast1 = document.getElementById('forecast-day-1');
//     const forecast2 = document.getElementById('forecast-day-2');
//     const forecast3 = document.getElementById('forecast-day-3');
//     const forecast4 = document.getElementById('forecast-day-4');
//     const forecast5 = document.getElementById('forecast-day-5');
    
//     // Assuming the forecast data structure has a list of forecasts
//     const forecasts = forecastData.list;

//     // You may want to loop through the forecasts and update the UI accordingly
//     for (let i = 0; i < forecasts.length; i++) {
//         const forecast = forecasts[i];
//         // Extract relevant information from the forecast and update the UI
//         // Example: document.querySelector('#forecast-day-1').innerHTML = forecast.main.temp;
//     }
// }