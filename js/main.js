// search bar
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
searchInput.addEventListener('input', function () {
  if (this.value.length > 0) {
    const searchTerm = this.value.toLowerCase();
    searchResults.innerHTML = '';
    const matchingAirports = airports.filter(airport => {
      return (
        airport.airport.toLowerCase().includes(searchTerm) ||
        airport.icao.toLowerCase().includes(searchTerm)
      );
    });
    if (matchingAirports.length) {
      searchResults.style.display = 'block';
      matchingAirports.forEach(airport => {
        const option = document.createElement('div');
        option.innerHTML = `${airport.icao} - ${airport.airport}`;
        option.classList.add('search-option');
        option.addEventListener('click', () => {
          searchInput.value = option.innerHTML;
          searchResults.style.display = 'none';
          var airportName = airport.airport;
          getWeather(airport.icao, airportName);
          viewSwap('results');
        });
        searchResults.appendChild(option);
      });
    } else {
      searchResults.style.display = 'none';
    }
  } else {
    searchResults.style.display = 'none';
    searchResults.innerHTML = '';
  }
});

searchInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    const firstOption = searchResults.firstChild;
    if (firstOption) {
      firstOption.click();
    }
  }
});
// send request to get data from API
function getWeather(icao, airport) {
  var request = new XMLHttpRequest();
  request.open('GET', `https://avwx.rest/api/metar/${icao}`);
  request.setRequestHeader('Authorization', 'wu0icY1PqK87EZ84HMd5Qd4OJVGwbv34BqEZ3g7SAMQ');
  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log('Status:', this.status);
      console.log('Headers:', this.getAllResponseHeaders());
      console.log('Body:', this.responseText);
      results = JSON.parse(this.responseText);
      displayResults(results, airport);
    }
  };

  request.send();
}
// tabs on results page
var $tabContainer = document.querySelector('.tab-container');
var $tabElements = document.querySelectorAll('.tab');
var $viewElements = document.querySelectorAll('.view');
$tabContainer.addEventListener('click', handleClick);
function handleClick(event) {
  var eventTarget = event.target.getAttribute('data-view');
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabElements.length; i++) {
      if (event.target === $tabElements[i]) {
        $tabElements[i].className = 'tab active';
      } else {
        $tabElements[i].className = 'tab';
      }
    }
  }
  if (event.target.matches('.tab')) {
    for (let j = 0; j < $viewElements.length; j++) {
      if (eventTarget !== $viewElements[j].getAttribute('data-view')) {
        $viewElements[j].className = 'view hidden';
      } else {
        $viewElements[j].className = 'view';
      }
    }
  }
}
// view swapping
var body = document.querySelector('body');
var resultsView = document.querySelector('.results-view');
var searchView = document.getElementById('search-container');
function viewSwap(view) {
  if (view === 'search') {
    body.className = 'body-search';
    resultsView.className = 'results-view hide';
    searchView.className = 'search-container';
  } else if (view === 'results') {
    body.className = 'body-results';
    resultsView.className = 'results-view';
    searchView.className = 'search-container hide';
  }
}
// back arrow functionality
var backArrow = document.querySelector('.fa-arrow-left-long');
backArrow.addEventListener('click', handleBackArrow);
function handleBackArrow() {
  viewSwap('search');
  searchInput.value = '';
  var rows = table.querySelectorAll('.new');
  for (let j = 0; j < rows.length; j++) {
    rows[j].remove();
  }

}
// displaying data on results page
var results = {};
// DOM elements for cards
var flightRule = document.getElementById('flight-rule');
var airportName = document.getElementById('airport-name');
var rawMetar = document.getElementById('raw-metar');
var weatherBottom = document.getElementById('weather-bottom');
var weatherTop = document.getElementById('weather-top');
var windSpeed = document.getElementById('wind-speed');
var windDirection = document.getElementById('wind-direction');
var visibility = document.getElementById('visibility');
var densityAltitude = document.getElementById('density');
var altimeter = document.getElementById('altimeter');
// DOM elements for decoded tab
var station = document.getElementById('station-id');
var time = document.getElementById('time');
var pressureAltitude = document.getElementById('pressure-altitude');
var noClouds = document.getElementById('cloud');
var tableDiv = document.getElementById('table');
var table = document.querySelector('table');
var tbody = document.querySelector('tbody');
function displayResults(data, airport) {
  // display info in cards
  rawMetar.innerHTML = results.raw;
  airportName.innerHTML = airport;
  flightRule.innerHTML = results.flight_rules;
  weatherTop.innerHTML = results.temperature.value + '&#176' + results.units.temperature;
  windSpeed.innerHTML = results.wind_speed.value + ' ' + results.units.wind_speed;
  windDirection.innerHTML = results.wind_direction.value + '&#176';
  visibility.innerHTML = results.visibility.value + ' ' + results.units.visibility;
  altimeter.innerHTML = results.altimeter.value + ' ' + results.units.altimeter;
  densityAltitude.innerHTML = results.density_altitude + ' ' + results.units.altitude;
  if (results.visibility.value > 3) {
    visibility.className = 'card-overlay green';
  } else {
    visibility.className = 'card-overlay';
  }
  if (results.wind_speed.value < 10) {
    windSpeed.className = 'card-overlay green';
  } else {
    windSpeed.className = 'card-overlay';
  }
  if (results.wx_codes.length === 0) {
    weatherBottom.innerHTML = 'Clear Skies';
  } else {
    weatherBottom.innerHTML = results.wx_codes[0].value;
  }
  if (results.flight_rules === 'VFR') {
    flightRule.className = 'card-overlay green';
  } else {
    flightRule.className = 'card-overlay';
  }
  // dislpay info in decoded tab
  station.innerHTML = 'Station Identifier: ' + results.station;
  time.innerHTML = 'Timestamp: ' + results.time.dt;
  pressureAltitude.innerHTML = 'Pressure Altitude: ' + results.pressure_altitude + ' ' + results.units.altitude;
  // cloud table
  if (results.clouds.length === 0) {
    console.log('no clouds');
    tableDiv.className = 'table-container hide';
    noClouds.removeAttribute('style');
  } else {
    tableDiv.className = 'table-container';
    noClouds.style.display = 'none';
    for (let i = 0; i < results.clouds.length; i++) {
      var tr = document.createElement('tr');
      var td1 = document.createElement('td');
      var td2 = document.createElement('td');
      td1.innerText = results.clouds[i].type;
      td2.innerText = results.clouds[i].altitude + '00' + ' ft';
      td1.className = 'new';
      td2.className = 'new';
      tbody.appendChild(tr);
      tr.appendChild(td1);
      tr.appendChild(td2);
    }
  }
}
