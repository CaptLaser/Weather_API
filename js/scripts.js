$(document).ready(function(){
    var apiKey = "4a3d4ac20073e60fb2cd184662202026"

    $("form").submit(function() {
        var city = $('#city').val();
        var strCity = `${city}`;
        var state = $('#state').val();
        var strState = `${state}`;

        var url = `https://api.openweathermap.org/data/2.5/weather?q=${strCity},${strState},us&APPID=${apiKey}&units=imperial`
        console.log(url);
        $.get(url, function(data){
            //get data from API
            // console.log(data)
            var strHTML = `<br><p>Current temp: ${data.main.temp}</p>`
            strHTML += `<p>Humidity: ${data.main.humidity}</p>`
            strHTML += `<p>Feels like: ${data.main.feels_like}</p>`
            var dtSunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-US");
            strHTML += "<p>Sunrise: " + dtSunrise + "</p>"
            var dtSunset = new Date(data.sys.sunset * 1000).toLocaleTimeString("en-US");
            strHTML += "<p>Sunset: " + dtSunset + "</p>"
            // console.log(strHTML)
            $("#forecast").html(strHTML);
        },'json');
        return false;
    })
});
