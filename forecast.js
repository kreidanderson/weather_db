$(document).ready(function() {
var buttons = ["Chicago", "New York", "Austin", "Orlando", "San Francisco", "Seattle", "Denver", "Atlanta"]



function dailyWeather() {
var today = moment().format('dddd, MMMM Do YYYY')
var tomorrow = moment().add(1, 'days').format('MMM Do YYYY')
var tomorrowPlus = moment().add(2, 'days').format('MMM Do YYYY')
var tomorrowPP = moment().add(3, 'days').format('MMM Do YYYY')
var tomorrowPPP = moment().add(4, 'days').format('MMM Do YYYY')
var tomorrowPPPP = moment().add(5, 'days').format('MMM Do YYYY')
$("#today").text(today);

$("#dayOne").text(tomorrow);
$("#dayTwo").text(tomorrowPlus);
$("#dayThree").text(tomorrowPP);
$("#dayFour").text(tomorrowPPP);
$("#dayFive").text(tomorrowPPPP);
};
dailyWeather();

// code below (the renderButtons() function) was essentially code from exercise 10 (06-Server Side APIs) which I took and adapted for this assigment.
function renderButtons() {
    $("#constantCities-view").empty();
    for (var i = 0; i < buttons.length; i++) {
      var a = $("<button>");
      a.addClass("city-btn btn btn-primary btn-lg btn-block");
      a.attr("data-name", buttons[i]);
      a.text(buttons[i]);
      $("#constantCities-view").append(a);
    }
  };
  renderButtons();


$(".city-btn").on("click", function(cityClick) {
  cityClick.preventDefault()

  $(".currentWeather").empty();

  var cityInput = $(cityClick.target).text();

  var apiKey = config.myKey;
  var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&appid=" + apiKey;
  
      // We then created an AJAX call
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

      $("#dayOneWeather").empty();
      $("#dayTwoWeather").empty();
      $("#dayThreeWeather").empty();
      $("#dayFourWeather").empty();
      $("#dayFiveWeather").empty();
  
      tomorrowTemp = (((response.list[5].main.temp)- 273.15)*1.80+32).toFixed(1);
      var temp=$("<div>").text("Temp: " + tomorrowTemp + "°F");

      var humidity=$("<div>").text("Humidity: " + response.list[5].main.humidity + "%");
      var row=$("<div>").append(temp, humidity);
      $("#dayOneWeather").append(row);
  
      tomorrowPTemp = (((response.list[13].main.temp)- 273.15)*1.80+32).toFixed(1);
      var temp=$("<div>").text("Temp: " + tomorrowPTemp + "°F");
    
      var humidity=$("<div>").text("Humidity: " + response.list[13].main.humidity + "%");
      var row=$("<div>").append(temp, humidity);
      $("#dayTwoWeather").append(row);
  
      tomorrowPPTemp = (((response.list[21].main.temp)- 273.15)*1.80+32).toFixed(1);
      var temp=$("<div>").text("Temp: " + tomorrowPPTemp + "°F");
    
      var humidity=$("<div>").text("Humidity: " + response.list[21].main.humidity + "%");
      var row=$("<div>").append(temp, humidity);
      $("#dayThreeWeather").append(row);
  
      tomorrowPPPTemp = (((response.list[29].main.temp)- 273.15)*1.80+32).toFixed(1);
      var temp=$("<div>").text("Temp: " + tomorrowPPPTemp + "°F");

      var humidity=$("<div>").text("Humidity: " + response.list[29].main.humidity + "%");
      var row=$("<div>").append(temp, humidity);
      $("#dayFourWeather").append(row);
  
      tomorrowPPPPTemp = (((response.list[37].main.temp)- 273.15)*1.80+32).toFixed(1);
      var temp=$("<div>").text("Temp: " + tomorrowPPPPTemp + "°F");

      var humidity=$("<div>").text("Humidity: " + response.list[37].main.humidity + "%");
      var row=$("<div>").append(temp, humidity);
      $("#dayFiveWeather").append(row);
   
      });
});



$("#newCitySubmit").on("click", function(event) {
  event.preventDefault();
    $(".currentWeather").empty();
var cityInput = $("#userCity").val();
var apiKey = config.myKey;
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&appid=" + apiKey;

    // We then created an AJAX call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

    $("#dayOneWeather").empty();
    $("#dayTwoWeather").empty();
    $("#dayThreeWeather").empty();
    $("#dayFourWeather").empty();
    $("#dayFiveWeather").empty();

    tomorrowTemp = (((response.list[5].main.temp)- 273.15)*1.80+32).toFixed(1);
    var temp=$("<div>").text("Temp: " + tomorrowTemp + "°F");
    var humidity=$("<div>").text("Humidity: " + response.list[5].main.humidity + "%");
    var row=$("<div>").append(temp, humidity);
    $("#dayOneWeather").append(row);

    tomorrowPTemp = (((response.list[13].main.temp)- 273.15)*1.80+32).toFixed(1);
    var temp=$("<div>").text("Temp: " + tomorrowPTemp + "°F");
    var humidity=$("<div>").text("Humidity: " + response.list[13].main.humidity + "%");
    var row=$("<div>").append(temp, humidity);
    $("#dayTwoWeather").append(row);

    tomorrowPPTemp = (((response.list[21].main.temp)- 273.15)*1.80+32).toFixed(1);
    var temp=$("<div>").text("Temp: " + tomorrowPPTemp + "°F");
    var humidity=$("<div>").text("Humidity: " + response.list[21].main.humidity + "%");
    var row=$("<div>").append(temp, humidity);
    $("#dayThreeWeather").append(row);

    tomorrowPPPTemp = (((response.list[29].main.temp)- 273.15)*1.80+32).toFixed(1);
    var temp=$("<div>").text("Temp: " + tomorrowPPPTemp + "°F");
    var humidity=$("<div>").text("Humidity: " + response.list[29].main.humidity + "%");
    var row=$("<div>").append(temp, humidity);
    $("#dayFourWeather").append(row);

    tomorrowPPPPTemp = (((response.list[37].main.temp)- 273.15)*1.80+32).toFixed(1);
    var temp=$("<div>").text("Temp: " + tomorrowPPPPTemp + "°F");
    var humidity=$("<div>").text("Humidity: " + response.list[37].main.humidity + "%");
    var row=$("<div>").append(temp, humidity);
    $("#dayFiveWeather").append(row);
});
  });



$("#newCitySubmit").on("click", function(event) {
    event.preventDefault();
    $(".currentWeather").empty();

    var cityInput = $("#userCity").val();
var apiKey = config.myKey;
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + apiKey;

    // We then created an AJAX call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      
      currentTempK = response.main.temp
      currentTempF = (currentTempK - 273.15)*1.80+32;

        var city=$("<h1>").text(response.name);
        tempF = (((response.main.temp)- 273.15)*1.80+32)
        var temperature=$("<div>").text("Temperature: " + ((tempF).toFixed(1)) + "°F");
        var humidity=$("<div>").text("Humidity: " + response.main.humidity + "%");
        var windSpeed=$("<div>").text("Wind Speed: "+ response.wind.speed + " MPH");
        let lat1 = response.coord.lat;
        let lon1 = response.coord.lon;

        queryLatLong = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat1 + "&lon=" + lon1 + "&appid=" + apiKey;
        $.ajax({
            url: queryLatLong,
            method: "GET"
          }).then(function(response2) {
      
            var uvIndex=$("<div>").text("UV Index: " + response2.value)
            var row=$("<div>").append(city, temperature, humidity, windSpeed, uvIndex);
            $(".currentWeather").append(row);

          });

    });

  

});



$(".city-btn").on("click", function(cityClick) {
    cityClick.preventDefault()

  $(".currentWeather").empty();

  var cityInput = $(cityClick.target).text();
  var apiKey = config.myKey;
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + apiKey;

  
      // We then created an AJAX call
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        currentTempK = response.main.temp
        currentTempF = (currentTempK - 273.15)*1.80+32;

  
          var city=$("<h1>").text(response.name);
          tempF = (((response.main.temp)- 273.15)*1.80+32)
          var temperature=$("<div>").text("Temperature: " + ((tempF).toFixed(1)) + "°F");
          var humidity=$("<div>").text("Humidity: " + response.main.humidity + "%");
          var windSpeed=$("<div>").text("Wind Speed: "+ response.wind.speed + " MPH");
          let lat1 = response.coord.lat;
          let lon1 = response.coord.lon;
  
          queryLatLong = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat1 + "&lon=" + lon1 + "&appid=" + apiKey;
          $.ajax({
              url: queryLatLong,
              method: "GET"
            }).then(function(response2) {
              var uvIndex=$("<div>").text("UV Index: " + response2.value)
              var row=$("<div>").append(city, temperature, humidity, windSpeed, uvIndex);
              $(".currentWeather").append(row);
        
              var text = $('.currentWeather').html();
              localStorage.setItem('current_weather', text);
                // I was able to save the html to local storage but can't seem to figure out how to make it pop back up when the browser is refreshed.
            
            });
              
             



            });

  
      



});

});