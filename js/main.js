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
          console.log(`Selected: ${airport.icao}`);
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
