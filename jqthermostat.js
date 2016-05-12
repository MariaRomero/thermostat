$(document).ready(function() {

  thermostat = new Thermostat();

  $('#increase').click(function(event) {
    thermostat.up(1)
    updateTemperatureDisplay()
    updateDisplayColour ()
  });

  $('#decrease').click(function(event) {
    thermostat.down(1)
    updateTemperatureDisplay()
    updateDisplayColour ()
  });

  $('#reset').click(function(event) {
    thermostat.reset()
    updateTemperatureDisplay()
    updateDisplayColour ()
  });

  $('#powerMode').click(function(event) {
    thermostat.switchPowerMode()
    updatePowerModeDisplay ()
  });

  $('select').change(function(event) {
    getWeather(this.value)
    if(this.value == "2643743") {
      $("#cityName").text("London")
      $("#image").attr('src', "http://www.europeanconnection.com/media/1573/london_bridge_falling_down_by_startle3iv-d4r5w1o.jpg")
    } else if (this.value == "2673730") {
      $("#cityName").text("Stockholm")
      $("#image").attr('src', "http://cleditorial.s3.amazonaws.com/article/destinations/insiders-guide/stockholm/stockholm-sweden-770.jpg")
    }  else {
      $("#cityName").text("Maracaibo")
      $("#image").attr('src', "http://www.juancarlosdiazlorenzo.com/wp-content/uploads/2016/04/puente_sobre_el_lago.jpg")
    }
    })

  updateTemperatureDisplay()
  updateDisplayColour ()
  updatePowerModeDisplay ()
  getWeather("2643743")
  $("#image").attr('src', "http://www.europeanconnection.com/media/1573/london_bridge_falling_down_by_startle3iv-d4r5w1o.jpg")
  $("#cityName").text("London")

  function getWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?id=' + city + '&APPID=0ea98111060a61f6a3408109332873c0&units=metric';  $.get(url,function(wheather) {
      $("#cityTemperature").text(wheather.main.temp)
    });
  }

  function updateTemperatureDisplay() {
    $('#currentTemperature').text(thermostat.temperature());
  }

  function updateDisplayColour () {
    $('body').css({'background-color':thermostat.colour()});
  }

  function updatePowerModeDisplay () {
    $('#powerModeStatus').text(thermostat.powerMode());
  }
});
